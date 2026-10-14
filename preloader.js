/**
 * ============================================================================
 * ORBYX MEDIA - TUNNEL WARP PRELOADER (preloader.js)
 * High-performance canvas starfield warp jump synchronized with frame loading.
 * ============================================================================
 */

(function () {
  'use strict';

  // 1. CONFIGURATION & CONSTANTS
  const STORAGE_KEY = 'orbyx_warp_preloader_seen';
  const COLORS = ['#8B5CF6', '#D946EF', '#F0ABFC'];
  const SLOW_TIMEOUT_MS = 8000;
  const SAFETY_TIMEOUT_MS = 10000;
  const FALLBACK_DURATION_MS = 2500;

  // Reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // DOM elements (created if not present in HTML)
  let preloaderEl = null;
  let canvas = null;
  let ctx = null;
  let counterEl = null;
  let barFillEl = null;
  let statusEl = null;
  let flashEl = null;

  // Animation state
  let isMobile = window.innerWidth < 768;
  let particleCount = isMobile ? 120 : 200;
  let particles = [];
  let dpr = 1;
  let width = 0;
  let height = 0;
  let cx = 0;
  let cy = 0;
  let maxRadius = 0;
  let rafId = null;
  let isPaused = false;
  let isExiting = false;
  let isFinished = false;

  // Progress smoothing state
  let targetProgress = 0;
  let smoothProgress = 0;
  let currentShownPercent = 0;
  let isDrivenByFrames = false;
  let fallbackStartTime = null;

  // Warp speed boost on exit
  let exitSpeedMultiplier = 1;

  // Timers
  let slowTimer = null;
  let safetyTimer = null;

  /**
   * Helper: Initialize / Mount Preloader DOM
   */
  function setupDOM() {
    preloaderEl = document.getElementById('warp-preloader');

    // If preloader markup isn't already present, inject it dynamically
    if (!preloaderEl) {
      preloaderEl = document.createElement('div');
      preloaderEl.id = 'warp-preloader';
      preloaderEl.className = 'warp-preloader';
      preloaderEl.setAttribute('aria-live', 'polite');
      preloaderEl.setAttribute('aria-label', 'Loading site experience');

      preloaderEl.innerHTML = `
        <canvas id="warp-canvas" class="warp-canvas"></canvas>
        <div class="warp-flash-overlay" id="warp-flash"></div>
        <div class="warp-center-ui">
          <div class="warp-logo">ORBYX<span class="warp-logo-dot">.</span></div>
          <div class="warp-core-dot" aria-hidden="true"></div>
          <div class="warp-progress-wrap">
            <div class="warp-counter" id="warp-counter">0%</div>
            <div class="warp-bar-track">
              <div class="warp-bar-fill" id="warp-bar-fill"></div>
            </div>
            <div class="warp-status" id="warp-status" aria-live="polite"></div>
          </div>
        </div>
      `;

      // Insert at the very top of body
      if (document.body) {
        document.body.insertBefore(preloaderEl, document.body.firstChild);
      } else {
        document.addEventListener('DOMContentLoaded', () => {
          document.body.insertBefore(preloaderEl, document.body.firstChild);
        });
      }
    }

    canvas = document.getElementById('warp-canvas');
    counterEl = document.getElementById('warp-counter');
    barFillEl = document.getElementById('warp-bar-fill');
    statusEl = document.getElementById('warp-status');
    flashEl = document.getElementById('warp-flash');

    if (canvas) {
      ctx = canvas.getContext('2d', { alpha: false });
    }
  }

  /**
   * Helper: Check Session & URL Override
   */
  function shouldSkip() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('hidePreloader') || urlParams.has('skipPreloader')) {
      return true;
    }
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === 'true') {
        return true;
      }
    } catch (e) {
      // sessionStorage restricted (e.g. private mode)
    }
    return false;
  }

  /**
   * Particle Generator
   */
  function initParticles() {
    particles = [];
    isMobile = window.innerWidth < 768;
    particleCount = isMobile ? 120 : 200;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        dist: Math.random() * maxRadius,
        speedFactor: 0.6 + Math.random() * 1.4,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        widthFactor: 0.8 + Math.random() * 0.8
      });
    }
  }

  /**
   * Handle Canvas Resize
   */
  function resizeCanvas() {
    if (!canvas || !ctx) return;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);

    cx = canvas.width / 2;
    cy = canvas.height / 2;
    maxRadius = Math.sqrt(cx * cx + cy * cy);
  }

  /**
   * Draw Radial Purple Glow at Center
   */
  function drawCenterGlow(progress) {
    if (!ctx) return;
    const baseRadius = Math.min(width, height) * 0.18 * dpr;
    const glowRadius = baseRadius + (Math.min(width, height) * 0.32 * dpr * progress);

    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowRadius);
    const alphaMagenta = 0.18 + (progress * 0.42);
    const alphaViolet = 0.08 + (progress * 0.28);

    grad.addColorStop(0, `rgba(217, 70, 239, ${alphaMagenta})`);
    grad.addColorStop(0.45, `rgba(139, 92, 246, ${alphaViolet})`);
    grad.addColorStop(1, 'rgba(10, 6, 18, 0)');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cx, cy, glowRadius, 0, Math.PI * 2);
    ctx.fill();
  }

  /**
   * Starfield Warp Canvas Render Loop
   */
  function renderWarpLoop(timestamp) {
    if (isPaused) return;

    // Fallback progress simulation if real frame loader has not reported
    if (!isDrivenByFrames && !isFinished) {
      if (!fallbackStartTime) fallbackStartTime = timestamp;
      const elapsed = timestamp - fallbackStartTime;
      const simulated = Math.min(0.98, elapsed / FALLBACK_DURATION_MS);
      if (simulated > targetProgress) {
        targetProgress = simulated;
      }
    }

    // Smooth progress interpolation
    if (targetProgress >= 1.0 && (1.0 - smoothProgress) < 0.02) {
      smoothProgress = 1.0;
    } else {
      smoothProgress += (targetProgress - smoothProgress) * 0.14;
    }

    // Strict non-decreasing percentage display
    const calculatedPercent = Math.min(100, Math.round(smoothProgress * 100));
    if (calculatedPercent > currentShownPercent) {
      currentShownPercent = calculatedPercent;
      if (counterEl) counterEl.textContent = `${currentShownPercent}%`;
      if (barFillEl) barFillEl.style.width = `${currentShownPercent}%`;
    }

    // Check for 100% completion trigger
    if (currentShownPercent >= 100 && targetProgress >= 1.0 && !isExiting) {
      isExiting = true;
      executeExitSequence();
    }

    // Render Canvas Frame
    if (ctx && canvas && !prefersReducedMotion) {
      // Clear with dark void
      ctx.fillStyle = '#0A0612';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Growing center glow
      drawCenterGlow(smoothProgress);

      // Eased speed and streak multiplier
      // At progress 0: stars drift gently (speed ~ 1.2 * dpr)
      // At progress 1: hyper-drive streaks (speed ~ 30 * dpr)
      const easeFactor = Math.pow(smoothProgress, 2.2);
      const baseSpeed = ((1.2 + (easeFactor * 28)) * dpr) * exitSpeedMultiplier;
      const streakMultiplier = (1.2 + (easeFactor * 4.8)) * exitSpeedMultiplier;

      // Draw all starfield particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Step distance outward
        const speed = baseSpeed * p.speedFactor;
        const prevDist = Math.max(0, p.dist - (speed * streakMultiplier));
        p.dist += speed;

        // Reset if particle escaped screen boundary
        if (p.dist > maxRadius) {
          p.dist = Math.random() * 25 + 2;
          p.angle = Math.random() * Math.PI * 2;
          p.color = COLORS[Math.floor(Math.random() * COLORS.length)];
          p.speedFactor = 0.6 + Math.random() * 1.4;
          continue;
        }

        // Coordinates
        const cosA = Math.cos(p.angle);
        const sinA = Math.sin(p.angle);
        const currX = cx + cosA * p.dist;
        const currY = cy + sinA * p.dist;
        const prevX = cx + cosA * prevDist;
        const prevY = cy + sinA * prevDist;

        // Opacity increases as particle moves further from center
        const distanceRatio = Math.min(1, p.dist / (maxRadius * 0.85));
        const alpha = Math.min(1, Math.max(0.12, distanceRatio * 0.95));

        ctx.strokeStyle = p.color;
        ctx.lineWidth = Math.max(1, p.widthFactor * dpr);
        ctx.globalAlpha = alpha;

        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(currX, currY);
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
    }

    if (!isFinished) {
      rafId = requestAnimationFrame(renderWarpLoop);
    }
  }

  /**
   * Exit Sequence: Hold 150ms -> Hyper Stretch -> Flash 300ms -> Fade 500ms
   */
  function executeExitSequence() {
    isFinished = true;

    // Clear timeout guards
    if (slowTimer) clearTimeout(slowTimer);
    if (safetyTimer) clearTimeout(safetyTimer);

    // 1. Hold for 150ms at 100%
    setTimeout(() => {
      // 2. Streaks stretch to maximum warp jump
      exitSpeedMultiplier = 3.5;

      // 3. Flash radial white-purple gradient across screen for 300ms
      if (flashEl && !prefersReducedMotion) {
        flashEl.classList.add('active');
      }

      setTimeout(() => {
        // 4. Fade out overlay over 500ms
        if (preloaderEl) {
          preloaderEl.classList.add('fade-out');
        }

        // 5. Trigger Hero entrance animation simultaneously with fade out
        triggerHeroEntrance();

        // 6. Re-enable page scrolling
        document.body.style.overflow = '';

        // 7. Remove from DOM and cancel RAF
        setTimeout(() => {
          if (preloaderEl && preloaderEl.parentNode) {
            preloaderEl.parentNode.removeChild(preloaderEl);
          }
          if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
          }
          window.dispatchEvent(new CustomEvent('orbyx:preloader-complete'));
        }, 550);
      }, 300);
    }, 150);
  }

  /**
   * Hero Entrance Animation Trigger
   */
  function triggerHeroEntrance() {
    const heroBeat = document.getElementById('beat-hero');
    if (heroBeat) {
      heroBeat.classList.add('hero-entering');
    }
    window.dispatchEvent(new CustomEvent('orbyx:hero-entrance'));
  }

  /**
   * Fast Exit for Return Visits / Skip
   */
  function fastSkip() {
    if (preloaderEl) {
      preloaderEl.classList.add('fade-out');
      setTimeout(() => {
        if (preloaderEl && preloaderEl.parentNode) {
          preloaderEl.parentNode.removeChild(preloaderEl);
        }
      }, 300);
    }
    document.body.style.overflow = '';
    triggerHeroEntrance();
  }

  /**
   * Public API: setPreloaderProgress(value)
   * Called by frame sequence loader with ratio (0 to 1) or percentage (0 to 100).
   */
  window.setPreloaderProgress = function (value) {
    isDrivenByFrames = true;
    let norm = typeof value === 'number' ? value : parseFloat(value);
    if (isNaN(norm)) return;

    if (norm > 1.0) norm = norm / 100.0;
    norm = Math.max(0, Math.min(1.0, norm));

    if (norm > targetProgress) {
      targetProgress = norm;
    }
  };

  /**
   * Public API: skipPreloader()
   */
  window.skipPreloader = function () {
    fastSkip();
  };

  /**
   * Tab Visibility Handling
   */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      isPaused = true;
    } else {
      isPaused = false;
      if (!isFinished && !rafId) {
        rafId = requestAnimationFrame(renderWarpLoop);
      }
    }
  });

  /**
   * Initialization
   */
  function init() {
    setupDOM();

    // Check if user already saw the preloader in this session
    if (shouldSkip()) {
      fastSkip();
      return;
    }

    // Mark session as seen
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch (e) {}

    // Lock page scrolling while preloader is active
    document.body.style.overflow = 'hidden';

    // Canvas geometry
    resizeCanvas();
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    // Populate particles
    initParticles();

    // 8-Second Slow Loading Notice
    slowTimer = setTimeout(() => {
      if (!isFinished && statusEl) {
        statusEl.textContent = 'Still loading...';
        statusEl.classList.add('visible');
      }
    }, SLOW_TIMEOUT_MS);

    // 10-Second Safety Timeout (Guaranteed unblock)
    safetyTimer = setTimeout(() => {
      if (!isFinished) {
        window.setPreloaderProgress(1.0);
      }
    }, SAFETY_TIMEOUT_MS);

    // Start Animation Loop
    rafId = requestAnimationFrame(renderWarpLoop);
  }

  // Execute on DOM ready or immediate if already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
