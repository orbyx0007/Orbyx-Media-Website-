/**
 * ============================================================================
 * ORBYX MEDIA - TUNNEL WARP PRELOADER (preloader.js)
 * Ultra-smooth, GPU-optimized canvas starfield warp jump.
 * ============================================================================
 */

(function () {
  'use strict';

  // 1. CONFIGURATION & CONSTANTS
  const STORAGE_KEY = 'orbyx_warp_preloader_seen';
  const COLORS = ['#8B5CF6', '#D946EF', '#F0ABFC'];
  const MAX_PRELOADER_DURATION_MS = 1800; // Snappy 1.8s maximum duration

  // Reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // DOM elements
  let preloaderEl = null;
  let canvas = null;
  let ctx = null;
  let counterEl = null;
  let barFillEl = null;
  let statusEl = null;
  let flashEl = null;

  // Animation state
  let isMobile = window.innerWidth < 768;
  let particleCount = isMobile ? 60 : 100;
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

  // Progress state
  let targetProgress = 0;
  let smoothProgress = 0;
  let currentShownPercent = 0;
  let startTime = null;

  // Warp speed boost on exit
  let exitSpeedMultiplier = 1;

  /**
   * Helper: Initialize / Mount Preloader DOM
   */
  function setupDOM() {
    preloaderEl = document.getElementById('warp-preloader');

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
   * Helper: Check Session, Direct Hash Anchor & URL Override
   */
  function shouldSkip() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('hidePreloader') || urlParams.has('skipPreloader')) {
      return true;
    }

    // Direct deep-link with hash (e.g. #faq, #services, #creators, #contact)
    // Instantly skip preloader so visitor immediately lands on target section without lag
    if (window.location.hash && window.location.hash.length > 1) {
      return true;
    }

    try {
      if (sessionStorage.getItem(STORAGE_KEY) === 'true') {
        return true;
      }
    } catch (e) {
      // sessionStorage restricted
    }
    return false;
  }

  /**
   * Particle Generator
   */
  function initParticles() {
    particles = [];
    isMobile = window.innerWidth < 768;
    particleCount = isMobile ? 60 : 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        dist: Math.random() * maxRadius,
        speedFactor: 0.7 + Math.random() * 1.3,
        color: COLORS[i % COLORS.length],
        widthFactor: 1.0 + Math.random() * 0.8
      });
    }
  }

  /**
   * Handle Canvas Resize
   */
  function resizeCanvas() {
    if (!canvas || !ctx) return;
    dpr = Math.min(window.devicePixelRatio || 1, 1.5); // Cap DPR at 1.5 for ultra-smooth rendering
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);

    cx = canvas.width / 2;
    cy = canvas.height / 2;
    maxRadius = Math.sqrt(cx * cx + cy * cy);
  }

  /**
   * Draw Center Glow (Optimized)
   */
  function drawCenterGlow(progress) {
    if (!ctx) return;
    const baseRadius = Math.min(width, height) * 0.16 * dpr;
    const glowRadius = baseRadius + (Math.min(width, height) * 0.28 * dpr * progress);

    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowRadius);
    const alphaMagenta = 0.15 + (progress * 0.35);

    grad.addColorStop(0, `rgba(217, 70, 239, ${alphaMagenta})`);
    grad.addColorStop(0.5, `rgba(139, 92, 246, ${alphaMagenta * 0.5})`);
    grad.addColorStop(1, 'rgba(10, 6, 18, 0)');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cx, cy, glowRadius, 0, Math.PI * 2);
    ctx.fill();
  }

  /**
   * Starfield Warp Canvas Render Loop (Batched for 60fps)
   */
  function renderWarpLoop(timestamp) {
    if (isPaused) return;

    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;

    // Smooth baseline progress progression (reaches ~95% within MAX_PRELOADER_DURATION_MS)
    const timeProgress = Math.min(0.96, Math.pow(elapsed / MAX_PRELOADER_DURATION_MS, 0.85));
    if (timeProgress > targetProgress && targetProgress < 0.98) {
      targetProgress = Math.max(targetProgress, timeProgress);
    }

    // Smooth progress interpolation
    if (targetProgress >= 1.0 && (1.0 - smoothProgress) < 0.03) {
      smoothProgress = 1.0;
    } else {
      smoothProgress += (targetProgress - smoothProgress) * 0.15;
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

      // Center ambient glow
      drawCenterGlow(smoothProgress);

      const easeFactor = Math.pow(smoothProgress, 2.2);
      const baseSpeed = ((1.4 + (easeFactor * 26)) * dpr) * exitSpeedMultiplier;
      const streakMultiplier = (1.2 + (easeFactor * 4.2)) * exitSpeedMultiplier;

      // Group particle strokes into 3 color buckets to minimize draw calls
      const linesByColor = {
        '#8B5CF6': [],
        '#D946EF': [],
        '#F0ABFC': []
      };

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const speed = baseSpeed * p.speedFactor;
        const prevDist = Math.max(0, p.dist - (speed * streakMultiplier));
        p.dist += speed;

        if (p.dist > maxRadius) {
          p.dist = Math.random() * 20 + 2;
          p.angle = Math.random() * Math.PI * 2;
          p.speedFactor = 0.7 + Math.random() * 1.3;
          continue;
        }

        const cosA = Math.cos(p.angle);
        const sinA = Math.sin(p.angle);
        const currX = cx + cosA * p.dist;
        const currY = cy + sinA * p.dist;
        const prevX = cx + cosA * prevDist;
        const prevY = cy + sinA * prevDist;

        if (linesByColor[p.color]) {
          linesByColor[p.color].push(prevX, prevY, currX, currY);
        }
      }

      // Batch draw per color
      ctx.lineWidth = Math.max(1, 1.2 * dpr);
      for (let c = 0; c < COLORS.length; c++) {
        const col = COLORS[c];
        const coords = linesByColor[col];
        if (!coords || coords.length === 0) continue;

        ctx.strokeStyle = col;
        ctx.beginPath();
        for (let j = 0; j < coords.length; j += 4) {
          ctx.moveTo(coords[j], coords[j + 1]);
          ctx.lineTo(coords[j + 2], coords[j + 3]);
        }
        ctx.stroke();
      }
    }

    if (!isFinished) {
      rafId = requestAnimationFrame(renderWarpLoop);
    }
  }

  /**
   * Exit Sequence: Snappy 120ms Hold -> Flash 250ms -> Fade 400ms
   */
  function executeExitSequence() {
    isFinished = true;

    setTimeout(() => {
      exitSpeedMultiplier = 3.5;

      if (flashEl && !prefersReducedMotion) {
        flashEl.classList.add('active');
      }

      setTimeout(() => {
        if (preloaderEl) {
          preloaderEl.classList.add('fade-out');
        }

        triggerHeroEntrance();
        document.body.style.overflow = '';

        setTimeout(() => {
          if (preloaderEl && preloaderEl.parentNode) {
            preloaderEl.parentNode.removeChild(preloaderEl);
          }
          if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
          }
          window.dispatchEvent(new CustomEvent('orbyx:preloader-complete'));
        }, 450);
      }, 250);
    }, 120);
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
   * Fast Exit for Return Visits & Hash Deep-Links
   */
  function fastSkip() {
    if (preloaderEl) {
      preloaderEl.classList.add('fade-out');
      preloaderEl.style.display = 'none';
      if (preloaderEl.parentNode) {
        preloaderEl.parentNode.removeChild(preloaderEl);
      }
    }
    document.body.style.overflow = '';
    triggerHeroEntrance();

    // If loaded with a hash (e.g. #faq), smoothly navigate to the target element
    if (window.location.hash) {
      const hash = window.location.hash;
      const smoothScrollToTarget = () => {
        try {
          const target = document.querySelector(hash);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        } catch (e) {}
      };
      if (document.readyState === 'complete') {
        setTimeout(smoothScrollToTarget, 50);
      } else {
        window.addEventListener('load', () => setTimeout(smoothScrollToTarget, 50), { once: true });
      }
    }
  }

  /**
   * Public API: setPreloaderProgress(value)
   */
  window.setPreloaderProgress = function (value) {
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

    if (shouldSkip()) {
      fastSkip();
      return;
    }

    try {
      sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch (e) {}

    document.body.style.overflow = 'hidden';

    resizeCanvas();
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    initParticles();

    // Absolute fallback: unblock in 2.2 seconds maximum
    setTimeout(() => {
      if (!isFinished) {
        window.setPreloaderProgress(1.0);
      }
    }, 2200);

    rafId = requestAnimationFrame(renderWarpLoop);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
