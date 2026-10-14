/**
 * ============================================================================
 * ORBYX MEDIA - CORE APPLICATION ENGINE
 * Brand Pillars: Influence · Culture · Connection
 * ============================================================================
 */

/* ============================================================================
   STATIC FORM API CONFIGURATION
   ============================================================================ */
const FORM_ENDPOINTS = {
  contact: "https://api.staticforms.xyz/submit",
  creator: "https://api.staticforms.xyz/submit",
  proposal: "https://api.staticforms.xyz/submit"
};

/* ============================================================================
   1. GLOBAL EDITABLE CONFIGURATION OBJECT
   All site data, thresholds, copy, stats, and talent are configured here.
   ============================================================================ */
const ORBYX_CONFIG = {
  // Canvas Sequence Configuration
  TOTAL_FRAMES: 240,
  LERP_SMOOTHING: 0.12,
  FRAME_FOLDER: 'frames/',
  FRAME_EXT: '.webp',
  FRAME_FALLBACK_EXT: '.jpg',

  // Performance & Memory settings
  MOBILE_FRAME_STEP: 2, // Every 2nd frame on mobile/saveData
  MOBILE_CACHE_WINDOW: 60, // Sliding window of decoded frames on mobile
  DESKTOP_INITIAL_STEP: 4, // Load every 4th frame first to unblock preloader

  // Beat 5: Services Card Stack Configuration ({ title, image, description, bullets: [5 items] })
  SERVICES: [
    {
      title: "01 — Influencer Marketing",
      image: "assets/Influencer Marketing.jpeg",
      description: "Connecting your brand with creators whose audience, tone, and storytelling naturally align with your campaign goals. We turn creator partnerships into authentic community conversations rather than forced product endorsements.",
      bullets: [
        "Niche Audience Alignment",
        "Creator-Led Storytelling",
        "Platform-Native Formats",
        "Conversion & Recall Optimization",
        "Authentic Creator Integration"
      ]
    },
    {
      title: "02 — Campaign Management",
      image: "assets/Campaign Management.jpeg",
      description: "End-to-end execution that takes your marketing initiatives from raw creative concepts to final performance delivery. We handle all logistics, timelines, and communications so your team can focus on core business operations.",
      bullets: [
        "Creative Briefing & Brand Safeguards",
        "Workflow & Posting Schedule Oversight",
        "Contracting, Usage Rights & Payouts",
        "Performance & Engagement Analytics",
        "Full Multi-Channel Coordination"
      ]
    },
    {
      title: "03 — Creator Outreach & Sourcing",
      image: "assets/Creator Outreach & Sourcing.jpeg",
      description: "Data-driven discovery and direct communication with active creators who genuinely fit your brand identity. We vet real engagement, negotiate fair deliverables, and build high-affinity creator rosters that drive actual conversations.",
      bullets: [
        "Strategic Talent Discovery",
        "Audience Quality & Engagement Audits",
        "Personalized Pitching & Rate Negotiations",
        "Long-Term Brand Advocate Rosters",
        "Direct Vetted Communication"
      ]
    },
    {
      title: "04 — Social Media Management",
      image: "assets/Social Media Management.jpg",
      description: "Strategic positioning and content execution designed to keep your brand active, relatable, and culturally relevant. We turn your social channels into dynamic hubs that cultivate loyalty and spark continuous audience interaction.",
      bullets: [
        "Content Strategy & Calendar Planning",
        "Situational & Trend-Responsive Posting",
        "Active Community & DM Engagement",
        "Platform-Native Asset Production",
        "Cross-Platform Narrative Alignment"
      ]
    },
    {
      title: "05 — Digital Marketing",
      image: "assets/Digital Marketing.jpeg",
      description: "Paid campaigns engineered to turn attention into measurable action. We plan, launch, and optimize ads across platforms so every rupee works toward leads and sales.",
      bullets: [
        "Meta & Google Ad Campaigns",
        "Audience Targeting & Retargeting",
        "Creative Testing & Optimization",
        "Conversion & ROI Tracking",
        "Scalable Acquisition Pipelines"
      ]
    }
  ],

  // Beat 7: Results Key Metrics
  STATS: {
    brands: 150,
    projects: 420,
    reach: 85, // in Millions (M)
    creators: 500
  },

  // Client Testimonials
  TESTIMONIALS: [
    {
      quote: "Orbyx didn't just scale our customer acquisition—they made our brand a central conversation in our industry.",
      name: "Marcus Sterling",
      brand: "Founder & CEO, Veloce Audio"
    },
    {
      quote: "The combination of high-retention creative and authentic creators delivered our highest ROAS to date (4.8x).",
      name: "Sophia Lin",
      brand: "VP Marketing, Nova Skin Sciences"
    },
    {
      quote: "Zero disconnect, complete transparency, and true cultural relevance. Orbyx is our most trusted growth partner.",
      name: "David Vance",
      brand: "Chief Growth Officer, Kinetic Mobility"
    }
  ],

  // 14 Vetted Creators from Copy of Creators Data (Descending by Followers)
  CREATORS: [
    {
      id: 1,
      name: "Khushbu Shah",
      handle: "@khushbu.shahhh",
      niche: "travel",
      nicheLabel: "Travel",
      platform: "instagram",
      followers: "194K",
      followersCount: 194000,
      location: "India",
      bio: "Travel creator and visual storyteller documenting scenic journeys, cultural landmarks, and destination itineraries.",
      instagramUrl: "https://www.instagram.com/khushbu.shahhh?obrf=MTY0cmlvMHZ1Nndxeg==",
      photo: "assets/khushbu.shahhh.jpeg"
    },
    {
      id: 2,
      name: "Sweksha Mishra",
      handle: "@swekshamishra_",
      niche: "vlogging",
      nicheLabel: "Vlogging",
      platform: "Instagram & YouTube",
      followers: "113K",
      followersCount: 113000,
      location: "India",
      bio: "Vlogging creator and visual storyteller capturing authentic everyday journeys, travel vlogs, and relatable lifestyle moments across Instagram and YouTube.",
      instagramUrl: "https://www.instagram.com/swekshamishra_/?utm_source=ig_web_button_share_sheet",
      photo: "assets/swekshamishra_.jpeg"
    },
    {
      id: 3,
      name: "Misty Girl Riya",
      handle: "@misty_girl_riya",
      niche: "beauty",
      nicheLabel: "Beauty",
      platform: "instagram",
      followers: "60.6K",
      followersCount: 60600,
      location: "India",
      bio: "Beauty and cosmetics creator sharing everyday glam, skincare regimens, and genuine makeup product transformations.",
      instagramUrl: "https://www.instagram.com/misty_girl_riya?rpxt=Ymg5MG9nc2oyMnkz",
      photo: "assets/misty_girl_riya.jpeg"
    },
    {
      id: 4,
      name: "Himani",
      handle: "@dreamingwithhimani",
      niche: "travel",
      nicheLabel: "Travel",
      platform: "instagram",
      followers: "40.2K",
      followersCount: 40200,
      location: "India",
      bio: "Wanderlust travel enthusiast capturing mountain getaways, boutique homestays, and immersive road trip adventures.",
      instagramUrl: "https://www.instagram.com/dreamingwithhimani?exln=MWNxb2I1N2dlNDl3dg==",
      photo: "assets/dreamingwithhimani.jpeg"
    },
    {
      id: 5,
      name: "Bhagya",
      handle: "@ugc_with_bhagya",
      niche: "beauty",
      nicheLabel: "Beauty & UGC",
      platform: "instagram",
      followers: "15K",
      followersCount: 15000,
      location: "India",
      bio: "User-generated content specialist producing authentic, conversion-focused video assets and organic skincare reviews.",
      instagramUrl: "https://www.instagram.com/ugc_with_bhagya?rpxt=ZXI4NXA2emJveXl1",
      photo: "assets/ugc_with_bhagya.jpeg"
    },
    {
      id: 6,
      name: "Ankita Barman",
      handle: "@_.ankitabarman._",
      niche: "fashion",
      nicheLabel: "Fashion",
      platform: "instagram",
      followers: "14.2K",
      followersCount: 14200,
      location: "India",
      bio: "Fashion influencer crafting seasonal lookbooks, contemporary wardrobe styling, and street style aesthetics.",
      instagramUrl: "https://www.instagram.com/_.ankitabarman._?vrfl=MTZyb3BzM3hxenIzNQ==",
      photo: "assets/_.ankitabarman._.jpeg"
    },
    {
      id: 7,
      name: "Akangsha S.",
      handle: "@akangshaaa.s",
      niche: "beauty",
      nicheLabel: "Beauty",
      platform: "instagram",
      followers: "9K",
      followersCount: 9000,
      location: "India",
      bio: "Beauty creator showcasing radiant everyday skin routines, makeup tutorials, and clean beauty product curation.",
      instagramUrl: "https://www.instagram.com/akangshaaa.s?mdxt=aXpldmRzcnhrMDFl",
      photo: "assets/akangshaaa.s.jpeg"
    },
    {
      id: 8,
      name: "Sonam Paul",
      handle: "@_sonam_paul_",
      niche: "beauty, lifestyle",
      nicheLabel: "Beauty & Lifestyle",
      platform: "instagram",
      followers: "7.5K",
      followersCount: 7500,
      location: "India",
      bio: "Beauty and lifestyle creator sharing honest self-care rituals, fashion inspiration, and relatable daily lifestyle logs.",
      instagramUrl: "https://www.instagram.com/_sonam_paul_?rpxt=ajdjY2FqZ2J5cnB6",
      photo: "assets/_sonam_paul_.jpeg"
    },
    {
      id: 9,
      name: "Nefes Ipekci",
      handle: "@nefes_ipekcii",
      niche: "beauty",
      nicheLabel: "Beauty",
      platform: "instagram",
      followers: "5K",
      followersCount: 5000,
      location: "India",
      bio: "Beauty enthusiast sharing clean makeup inspiration, skincare remedies, and creative cosmetic styling.",
      instagramUrl: "https://www.instagram.com/nefes_ipekcii",
      photo: "assets/nefes_ipekcii.jpeg"
    },
    {
      id: 10,
      name: "Pari",
      handle: "@ugc.by.pari",
      niche: "beauty",
      nicheLabel: "Beauty & UGC",
      platform: "instagram",
      followers: "1.8K",
      followersCount: 1800,
      location: "India",
      bio: "UGC content creator crafting viral, high-converting product videos and genuine unboxing experiences.",
      instagramUrl: "https://www.instagram.com/ugc.by.pari?vrfl=cHFybTlrbnhpcHhu",
      photo: "assets/ugc.by.pari.jpeg"
    },
    {
      id: 11,
      name: "Prachi Chhetry",
      handle: "@prachichhetry_",
      niche: "lifestyle",
      nicheLabel: "Lifestyle",
      platform: "instagram",
      followers: "603",
      followersCount: 603,
      location: "India",
      bio: "Lifestyle creator capturing authentic everyday moments, personal vlogs, and relatable student & creative life.",
      instagramUrl: "https://www.instagram.com/prachichhetry_?xtok=MXIzZ2hwZXZsMzd2",
      photo: "assets/prachichhetry_.jpeg"
    },
    {
      id: 12,
      name: "Abhinav Patil",
      handle: "@iamabhinavpatil",
      niche: "tech",
      nicheLabel: "Tech",
      platform: "instagram",
      followers: "598",
      followersCount: 598,
      location: "India",
      bio: "Tech creator breaking down consumer gadgets, productivity tools, and modern software innovations.",
      instagramUrl: "https://www.instagram.com/iamabhinavpatil?obrf=MTEwbTJoZWN1cWk5",
      photo: "assets/iamabhinavpatil.jpeg"
    },
    {
      id: 13,
      name: "The Content Girly",
      handle: "@thecontentgirly_",
      niche: "ugc",
      nicheLabel: "UGC Creator",
      platform: "instagram",
      followers: "474",
      followersCount: 474,
      location: "India",
      bio: "UGC creator crafting high-converting, aesthetic brand content, product showcases, and creative visual storytelling.",
      instagramUrl: "https://www.instagram.com/thecontentgirly_?srtk=bGw5YWliNDVkaTQx",
      photo: "assets/thecontentgirly_.jpeg"
    }
  ]
};

/* ============================================================================
   2. STUDIO BRAVE SERVICES ANIMATION & CONTROLLER
   Expose renderServices(progress) where progress is 0 to 1 across 45% - 70%
   ============================================================================ */
let activeServiceIndex = 0;

window.renderServices = function(progress) {
  const cards = document.querySelectorAll('.brave-service-card');
  const dashes = document.querySelectorAll('.services-progress-dashes .dash-item');
  const counterEl = document.getElementById('service-active-num');
  if (!cards.length) return;

  const total = cards.length;
  // Map progress (0.0 to 1.0) into discrete active indices 0..4
  const targetIdx = Math.min(total - 1, Math.max(0, Math.floor(progress * total)));

  if (targetIdx !== activeServiceIndex) {
    activeServiceIndex = targetIdx;
    updateServiceActiveState(targetIdx, cards, dashes, counterEl);
  }
};

function updateServiceActiveState(activeIdx, cards, dashes, counterEl) {
  cards.forEach((card, idx) => {
    const isActive = (idx === activeIdx);
    card.classList.toggle('active', isActive);
    card.classList.toggle('inactive', !isActive);
    const headerBtn = card.querySelector('.brave-card-header');
    if (headerBtn) {
      headerBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    }
  });

  if (dashes && dashes.length) {
    dashes.forEach((dash, idx) => {
      dash.classList.toggle('active', idx === activeIdx);
    });
  }

  if (counterEl) {
    const numStr = (activeIdx + 1).toString().padStart(2, '0');
    if (counterEl.textContent !== numStr) {
      counterEl.textContent = numStr;
    }
  }
}

function initBraveServices() {
  const cards = document.querySelectorAll('.brave-service-card');
  const dashes = document.querySelectorAll('.services-progress-dashes .dash-item');
  const counterEl = document.getElementById('service-active-num');
  if (!cards.length) return;

  // Initialize first card as active
  updateServiceActiveState(0, cards, dashes, counterEl);

  // Allow clicking on any card header to expand it
  cards.forEach((card, idx) => {
    const header = card.querySelector('.brave-card-header');
    if (!header) return;

    header.addEventListener('click', (e) => {
      e.preventDefault();
      activeServiceIndex = idx;
      updateServiceActiveState(idx, cards, dashes, counterEl);
    });
  });

  // Allow clicking on progress dashes
  dashes.forEach((dash, idx) => {
    dash.addEventListener('click', (e) => {
      e.preventDefault();
      activeServiceIndex = idx;
      updateServiceActiveState(idx, cards, dashes, counterEl);
    });
  });
}


/* ============================================================================
   3. UTILITY FUNCTIONS & DEVICE DETECTION
   ============================================================================ */
const isMobileDevice = () => {
  return window.innerWidth < 768 || (navigator.connection && navigator.connection.saveData === true);
};

const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
const lerp = (start, end, factor) => start + (end - start) * factor;


/* ============================================================================
   4. SMART FRAME PRELOADER & CANVAS SCROLL ENGINE (index.html)
   Using 240 frames from NEW TEMPLATE (frame_0001.jpg to frame_0240.jpg)
   ============================================================================ */
class ScrollCanvasEngine {
  constructor() {
    this.canvas = document.getElementById('animation-canvas') || document.getElementById('scroll-canvas');
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d', { alpha: false });
    this.container = document.getElementById('scroll-container');

    this.totalFrames = ORBYX_CONFIG.TOTAL_FRAMES;
    this.images = new Array(this.totalFrames);
    this.loadedMap = new Array(this.totalFrames).fill(false);

    this.currentFrame = 0;
    this.targetFrame = 0;
    this.currentScrollProgress = 0;
    this.lastRenderedFrame = -1;
    this.isFirstDrawDone = false;

    this.pathCandidates = ['NEW TEMPLATE/', 'Frames/', 'Fra/', 'frames/', ''];
    this.workingCandidateIdx = 0;

    this.isMobile = isMobileDevice();

    this.init();
  }

  init() {
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());

    // Preload images starting with instant Frame 1 render
    this.preloadImages();

    // Start 60fps/120fps Animation Loop with smooth LERP inertia
    this.animationLoop = this.animationLoop.bind(this);
    requestAnimationFrame(this.animationLoop);

    // Scroll progress listener
    window.addEventListener('scroll', () => this.onScroll(), { passive: true });
    this.onScroll();

    // Check for debug scroll param
    try {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('test_scroll')) {
        const targetScroll = parseInt(urlParams.get('test_scroll'), 10);
        window.scrollTo(0, targetScroll);
        this.onScroll();
        this.currentFrame = this.targetFrame;
      }
    } catch (e) {}


  }

  getFramePath(index, candidateIdx = this.workingCandidateIdx) {
    const frameNum = String(index + 1).padStart(4, '0');
    const prefix = this.pathCandidates[candidateIdx] || '';
    return `${prefix}frame_${frameNum}.jpg`;
  }

  resizeCanvas() {
    if (!this.canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;

    this.canvas.width = Math.round(w * dpr);
    this.canvas.height = Math.round(h * dpr);

    this.ctx.imageSmoothingEnabled = true;
    this.ctx.imageSmoothingQuality = 'high';

    this.lastRenderedFrame = -1;
    this.renderFrame(Math.round(this.currentFrame));
  }

  drawImageCover(img) {
    if (!img || !img.naturalWidth) return;

    const w = this.canvas.width;
    const h = this.canvas.height;
    const imgW = img.naturalWidth;
    const imgH = img.naturalHeight;

    const imgAspect = imgW / imgH;
    const canvasAspect = w / h;

    let drawW, drawH, drawX, drawY;

    if (canvasAspect > imgAspect) {
      drawW = w;
      drawH = w / imgAspect;
      drawX = 0;
      drawY = (h - drawH) / 2;
    } else {
      drawH = h;
      drawW = h * imgAspect;
      drawX = (w - drawW) / 2;
      drawY = 0;
    }

    this.ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }

  getClosestLoadedFrame(targetIdx) {
    if (this.loadedMap[targetIdx] && this.images[targetIdx]) {
      return this.images[targetIdx];
    }

    for (let offset = 1; offset < this.totalFrames; offset++) {
      const prev = targetIdx - offset;
      if (prev >= 0 && this.loadedMap[prev] && this.images[prev]) {
        return this.images[prev];
      }

      const next = targetIdx + offset;
      if (next < this.totalFrames && this.loadedMap[next] && this.images[next]) {
        return this.images[next];
      }
    }

    return null;
  }

  renderFrame(index) {
    const clampedIndex = Math.max(0, Math.min(this.totalFrames - 1, index));
    if (clampedIndex === this.lastRenderedFrame && this.isFirstDrawDone) return;

    const imgToDraw = this.getClosestLoadedFrame(clampedIndex);
    if (imgToDraw) {
      this.drawImageCover(imgToDraw);
      this.lastRenderedFrame = clampedIndex;
      this.isFirstDrawDone = true;
    }
  }

  loadSingleImage(idx, onDone) {
    let attempt = this.workingCandidateIdx;
    const img = new Image();

    const tryLoad = () => {
      img.onload = () => {
        this.images[idx] = img;
        this.loadedMap[idx] = true;
        this.workingCandidateIdx = attempt; // lock in the working candidate
        onDone(true);
      };
      img.onerror = () => {
        attempt++;
        if (attempt < this.pathCandidates.length) {
          img.src = this.getFramePath(idx, attempt);
        } else {
          onDone(false);
        }
      };
      img.src = this.getFramePath(idx, attempt);
    };

    tryLoad();
  }

  preloadImages() {
    // 1. Immediately load Frame 0 to paint canvas instantly
    this.loadSingleImage(0, (success) => {
      if (success) {
        this.lastRenderedFrame = -1;
        this.renderFrame(0);
      }
    });

    // 2. Load initial buffer frames (0, 1, 2) to unblock the preloader smoothly in ~300ms
    const criticalBuffer = [0, 1, 2];
    let criticalLoaded = 0;

    criticalBuffer.forEach((frameIdx) => {
      this.loadSingleImage(frameIdx, (success) => {
        criticalLoaded++;
        if (typeof window.setPreloaderProgress === 'function') {
          window.setPreloaderProgress(criticalLoaded / criticalBuffer.length);
        }
        if (criticalLoaded >= criticalBuffer.length) {
          // Critical frames ready: unblock preloader immediately
          if (typeof window.setPreloaderProgress === 'function') {
            window.setPreloaderProgress(1.0);
          }
          // Start prioritized background streaming
          this.loadRemainingBackground();
        }
      });
    });
  }

  dismissPreloader() {
    if (typeof window.setPreloaderProgress === 'function') {
      window.setPreloaderProgress(1.0);
    }
  }

  loadRemainingBackground() {
    // Stream remaining frames quietly with controlled concurrency to avoid network/CPU spikes
    const MAX_CONCURRENT = 3;
    let activeDownloads = 0;

    // Stage 1: Keyframe wave (every 6th frame) for rapid full-scroll coverage
    // Stage 2: Dense in-between frames
    const queue = [];
    for (let i = 0; i < this.totalFrames; i += 6) {
      if (!this.loadedMap[i]) queue.push(i);
    }
    for (let i = 0; i < this.totalFrames; i++) {
      if (!this.loadedMap[i] && !queue.includes(i)) queue.push(i);
    }

    let queueIdx = 0;

    const pumpQueue = () => {
      while (activeDownloads < MAX_CONCURRENT && queueIdx < queue.length) {
        const frameIdx = queue[queueIdx++];
        if (this.loadedMap[frameIdx]) continue;

        activeDownloads++;
        this.loadSingleImage(frameIdx, (success) => {
          activeDownloads--;
          if (success && Math.abs(this.currentFrame - frameIdx) < 2) {
            this.lastRenderedFrame = -1;
          }
          // Yield to UI thread before pumping next frame
          setTimeout(pumpQueue, 16);
        });
      }
    };

    // Stagger start slightly to let entrance animations finish at 60fps
    setTimeout(pumpQueue, 350);
  }

  onScroll() {
    if (!this.container) return;

    const rect = this.container.getBoundingClientRect();
    const totalScrollable = this.container.offsetHeight - window.innerHeight;
    const currentScrolled = -rect.top;

    const rawProgress = totalScrollable > 0 ? currentScrolled / totalScrollable : 0;
    this.currentScrollProgress = clamp(rawProgress, 0, 1);
    this.targetFrame = this.currentScrollProgress * (this.totalFrames - 1);
  }

  animationLoop() {
    // Smooth inertia LERP damping (~0.12)
    const factor = ORBYX_CONFIG.LERP_SMOOTHING || 0.12;
    const diff = this.targetFrame - this.currentFrame;

    if (Math.abs(diff) > 0.001) {
      this.currentFrame += diff * factor;
    } else {
      this.currentFrame = this.targetFrame;
    }

    const roundedIndex = Math.round(this.currentFrame);
    this.renderFrame(roundedIndex);

    // Sync HTML Text Beats across smoothed scroll progress
    const smoothedProgress = this.totalFrames > 1
      ? clamp(this.currentFrame / (this.totalFrames - 1), 0, 1)
      : this.currentScrollProgress;
    syncScrollBeats(smoothedProgress);

    requestAnimationFrame(this.animationLoop);
  }
}


/* ============================================================================
   5. SCROLL BEATS SYNCHRONIZER (0% - 100%)
   ============================================================================ */
let statsAnimated = false;

// Helper: Animate single pillar word entering from depth (0.7 -> 1.0) and passing camera (1.0 -> 1.4)
function applyPillarDepthAnimation(card, progress, start, end) {
  if (!card) return;

  if (progress < start) {
    card.style.transform = 'translate(-50%, -50%) scale(0.7)';
    card.style.opacity = '0';
    card.style.filter = 'blur(8px)';
    card.style.visibility = 'hidden';
    card.style.pointerEvents = 'none';
    return;
  }

  if (progress >= end) {
    card.style.transform = 'translate(-50%, -50%) scale(1.4)';
    card.style.opacity = '0';
    card.style.filter = 'blur(6px)';
    card.style.visibility = 'hidden';
    card.style.pointerEvents = 'none';
    return;
  }

  const duration = end - start;
  const t = (progress - start) / duration; // 0 to 1

  let scale = 1.0;
  let opacity = 1.0;
  let blur = 0;

  if (t < 0.32) {
    // Phase 1: Enter from depth (scale 0.7 to 1, opacity 0 to 1, blur 8px to 0)
    const p = t / 0.32;
    scale = 0.7 + 0.3 * p;
    opacity = p;
    blur = 8 * (1 - p);
  } else if (t <= 0.68) {
    // Phase 2: In sharp focus, held at camera plane
    scale = 1.0;
    opacity = 1.0;
    blur = 0;
  } else {
    // Phase 3: Exit by scaling to 1.4 and fading, as if passing the camera
    const q = (t - 0.68) / 0.32;
    scale = 1.0 + 0.4 * q;
    opacity = 1.0 - q;
    blur = 6 * q;
  }

  card.style.transform = `translate(-50%, -50%) scale(${scale.toFixed(3)})`;
  card.style.opacity = opacity.toFixed(3);
  card.style.filter = blur > 0.05 ? `blur(${blur.toFixed(1)}px)` : 'none';
  card.style.visibility = opacity > 0.01 ? 'visible' : 'hidden';
  card.style.pointerEvents = opacity > 0.6 ? 'auto' : 'none';
}

// Helper: Animate all three pillars united in one row
function applyPillarsCombinedAnimation(rowCombined, progress, start, end) {
  if (!rowCombined) return;

  if (progress >= start && progress < end) {
    const t = (progress - start) / (end - start);
    let opacity = 1.0;
    let translateY = 0;
    let scale = 1.0;

    if (t < 0.20) {
      const p = t / 0.20;
      opacity = p;
      translateY = 16 * (1 - p);
      scale = 0.95 + 0.05 * p;
    } else if (t > 0.85) {
      const q = (t - 0.85) / 0.15;
      opacity = 1.0 - q;
      scale = 1.0 + 0.05 * q;
    }

    rowCombined.style.opacity = opacity.toFixed(3);
    rowCombined.style.transform = `translate(-50%, -50%) translateY(${translateY.toFixed(1)}px) scale(${scale.toFixed(3)})`;
    rowCombined.style.visibility = opacity > 0.01 ? 'visible' : 'hidden';
    rowCombined.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';
    rowCombined.classList.add('active');
  } else {
    rowCombined.style.opacity = '0';
    rowCombined.style.visibility = 'hidden';
    rowCombined.style.pointerEvents = 'none';
    rowCombined.classList.remove('active');
  }
}

function syncScrollBeats(progress) {
  // Elements
  const beatHero = document.getElementById('beat-hero');
  const beatAbout = document.getElementById('beat-about');
  const beatPillars = document.getElementById('beat-pillars');
  const beatProblem = document.getElementById('beat-problem');
  const beatServices = document.getElementById('beat-services');
  const beatHow = document.getElementById('beat-how');
  const beatResults = document.getElementById('beat-results');
  const beatCta = document.getElementById('beat-cta');

  if (!beatHero) return; // Not on home page

  // Helper to toggle active class
  const setBeatState = (el, isActive) => {
    if (!el) return;
    if (isActive) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  };

  // 1. HERO BEAT (0% - 12%)
  setBeatState(beatHero, progress >= 0 && progress < 0.12);

  // 2. ABOUT BEAT (12% - 24%)
  setBeatState(beatAbout, progress >= 0.12 && progress < 0.24);

  // 3. BRAND PILLARS BEAT (24% - 50%)
  const inPillars = progress >= 0.24 && progress < 0.50;
  setBeatState(beatPillars, inPillars);

  const cardInf = document.getElementById('pillar-influence');
  const cardCult = document.getElementById('pillar-culture');
  const cardConn = document.getElementById('pillar-connection');
  const rowCombined = document.getElementById('pillars-combined');

  // Sub-timings across 24% - 50%:
  // 0.240 - 0.300: "Influence" in #8B5CF6 (enters from depth, passes camera)
  // 0.300 - 0.360: "Culture" in #D946EF (enters from depth, passes camera)
  // 0.360 - 0.420: "Connection" in #F0ABFC (enters from depth, passes camera)
  // 0.420 - 0.500: All three in one row joined by gradient lines with summary line
  applyPillarDepthAnimation(cardInf, progress, 0.240, 0.300);
  applyPillarDepthAnimation(cardCult, progress, 0.300, 0.360);
  applyPillarDepthAnimation(cardConn, progress, 0.360, 0.420);
  applyPillarsCombinedAnimation(rowCombined, progress, 0.420, 0.500);

  // 4. THE PROBLEM BEAT (50% - 76%)
  const inProblem = progress >= 0.50 && progress < 0.76;
  setBeatState(beatProblem, inProblem);

  const p1 = document.getElementById('problem-line-1');
  const p2 = document.getElementById('problem-line-2');
  const p3 = document.getElementById('problem-line-3');
  const pSol = document.getElementById('problem-solution');

  if (inProblem) {
    // White lines appear one after another, followed by "Orbyx fixes that."
    if (p1) p1.classList.toggle('visible', progress >= 0.515);
    if (p2) p2.classList.toggle('visible', progress >= 0.565);
    if (p3) p3.classList.toggle('visible', progress >= 0.615);
    if (pSol) pSol.classList.toggle('visible', progress >= 0.670);
  } else {
    if (p1) p1.classList.remove('visible');
    if (p2) p2.classList.remove('visible');
    if (p3) p3.classList.remove('visible');
    if (pSol) pSol.classList.remove('visible');
  }

  // 5. OUR SERVICES BEAT (76% - 98%)
  const inServices = progress >= 0.76 && progress < 0.98;
  setBeatState(beatServices, inServices);

  // 98% - 100%: Sticky stage unpins naturally into Services Cards Stack directly below!
}

function initMarqueeRibbons() {
  const stage = document.querySelector('.marquee-ribbon-stage');
  if (!stage) return;

  const tracks = stage.querySelectorAll('.ribbon-track');

  // Pause on hover for enhanced user readability and interactivity
  stage.addEventListener('mouseenter', () => {
    tracks.forEach(t => t.style.animationPlayState = 'paused');
  });

  stage.addEventListener('mouseleave', () => {
    tracks.forEach(t => t.style.animationPlayState = 'running');
  });

  // Touch support for mobile devices
  stage.addEventListener('touchstart', () => {
    tracks.forEach(t => t.style.animationPlayState = 'paused');
  }, { passive: true });

  stage.addEventListener('touchend', () => {
    tracks.forEach(t => t.style.animationPlayState = 'running');
  }, { passive: true });
}


/* ============================================================================
   5B. REAK SERVICES CARD STACK ENGINE (0% - 100% Normalized Services Progress)
   Handles scroll-driven stacking, alternating tilts, 6px overshoot entrance,
   depth scale & brightness/blur dimming, parallax, and deck exit tilt.
   ============================================================================ */
window.renderServices = function(progress) {
  const deck = document.getElementById('services-cards-deck');
  if (!deck) return;

  const cards = deck.querySelectorAll('.service-stack-card');
  const totalCards = cards.length;
  if (totalCards === 0) return;

  const p = Math.min(Math.max(progress, 0), 1);
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (isReduced) {
    cards.forEach((card, idx) => {
      card.style.transform = '';
      card.style.opacity = '1';
      card.style.filter = '';
      card.classList.toggle('active', idx === 0);
      card.classList.remove('behind');
    });
    deck.style.transform = '';
    deck.style.opacity = '1';
    return;
  }

  const isMobile = window.innerWidth <= 768;
  const tilts = isMobile ? [-1, 1, -0.8, 0.6] : [-2, 1.5, -1.0, 0.75];

  // 1. Deck Exit Phase (last 10%: p from 0.90 to 1.0)
  // "After the last card: the whole deck tilts back (rotateX 6deg), lifts and fades out as the page continues."
  const EXIT_THRESHOLD = 0.90;
  if (p > EXIT_THRESHOLD) {
    const exitFraction = (p - EXIT_THRESHOLD) / (1 - EXIT_THRESHOLD);
    const rotX = (exitFraction * 6).toFixed(2);
    const liftY = (-exitFraction * 40).toFixed(1);
    const opacity = Math.max(0, 1 - exitFraction).toFixed(3);

    deck.style.transform = `perspective(1200px) rotateX(${rotX}deg) translateY(${liftY}px)`;
    deck.style.opacity = opacity;
  } else {
    deck.style.transform = 'perspective(1200px) rotateX(0deg) translateY(0px)';
    deck.style.opacity = '1';
  }

  // 2. Stacking Phase (p from 0.0 to 0.90 mapped to 0 -> 4 transitions)
  const stackProgress = Math.min(1, p / EXIT_THRESHOLD);
  const totalTransitions = totalCards - 1; // 4 transitions for 5 cards
  const continuousStep = stackProgress * totalTransitions; // 0.0 to 4.0

  const activeBaseIdx = Math.min(Math.floor(continuousStep), totalTransitions);

  cards.forEach((card, idx) => {
    const img = card.querySelector('.card-parallax-img');
    card.style.opacity = '1'; // ALWAYS visible, never hidden

    // Case 1: Cards that have already been covered (idx < activeBaseIdx)
    if (idx < activeBaseIdx) {
      const depth = continuousStep - idx; // depth >= 1
      const depthLevel = Math.min(Math.floor(depth), tilts.length);
      const depthFrac = depth - Math.floor(depth);

      // Scale: from 1 to 0.94 - (0.015 * depth)
      const scale = Math.max(0.85, (0.94 - 0.015 * (depth - 1))).toFixed(4);

      // Alternating tilts: -2deg for depth 1, +1.5deg for depth 2, -1.0deg for depth 3, etc.
      const prevTilt = depthLevel > 0 ? tilts[Math.min(depthLevel - 1, tilts.length - 1)] : 0;
      const nextTilt = tilts[Math.min(depthLevel, tilts.length - 1)];
      const currentTilt = (prevTilt + (nextTilt - prevTilt) * depthFrac).toFixed(2);

      // translateY: -12px per level of depth
      const translateY = (-12 * depth).toFixed(1);

      // Brightness: dim with brightness 0.75 and drop glow
      const brightness = Math.max(0.65, (0.75 - 0.03 * (depth - 1))).toFixed(3);
      const blurPx = isMobile ? 0 : Math.min(1.5, (depth * 0.45)).toFixed(2);

      card.style.transform = `translateY(${translateY}px) scale(${scale}) rotate(${currentTilt}deg)`;
      card.style.filter = isMobile ? `brightness(${brightness})` : `brightness(${brightness}) blur(${blurPx}px)`;

      card.classList.remove('active');
      card.classList.add('behind');

      if (img) {
        img.style.transform = 'translateY(20px)';
      }
    }
    // Case 2: The current base card that is being covered (idx === activeBaseIdx)
    else if (idx === activeBaseIdx) {
      if (activeBaseIdx === totalTransitions) {
        // Last card fully reached and settled
        card.style.transform = 'translateY(0px) scale(1) rotate(0deg)';
        card.style.filter = 'brightness(1) blur(0px)';
        card.classList.add('active');
        card.classList.remove('behind');
        if (img) img.style.transform = 'translateY(0px)';
      } else {
        const localTransitionP = continuousStep - idx; // 0.0 to 1.0 of next card sliding over it
        const depth = localTransitionP;

        // Scale: smoothly transitions from 1 down to 0.94
        const scale = (1 - (1 - 0.94) * depth).toFixed(4);

        // Tilt: smoothly transitions from 0deg to first tilt (-2deg)
        const tilt = (tilts[0] * depth).toFixed(2);

        // translateY: -12px per level of depth
        const translateY = (-12 * depth).toFixed(1);

        // Brightness & blur
        const brightness = (1 - (1 - 0.75) * depth).toFixed(3);
        const blurPx = isMobile ? 0 : (depth * 1.0).toFixed(2);

        card.style.transform = `translateY(${translateY}px) scale(${scale}) rotate(${tilt}deg)`;
        card.style.filter = isMobile ? `brightness(${brightness})` : `brightness(${brightness}) blur(${blurPx}px)`;

        if (depth < 0.65) {
          card.classList.add('active');
          card.classList.remove('behind');
        } else {
          card.classList.remove('active');
          card.classList.add('behind');
        }

        // Parallax image: moves 20px opposite to scroll inside frame
        if (img) {
          const imgY = (depth * 20).toFixed(1);
          img.style.transform = `translateY(${imgY}px)`;
        }
      }
    }
    // Case 3: The incoming card sliding up (idx === activeBaseIdx + 1)
    else if (idx === activeBaseIdx + 1) {
      const incomingP = continuousStep - activeBaseIdx; // 0.0 to 1.0

      // "The incoming card enters flat (no tilt), slightly overshoots upward by 6px, then settles."
      let overshootY = 0;
      if (incomingP <= 0.8) {
        const t = incomingP / 0.8;
        overshootY = -6 * Math.sin((t * Math.PI) / 2);
      } else {
        const t = (incomingP - 0.8) / 0.2;
        overshootY = -6 * (1 - t);
      }

      card.style.transform = `translateY(${overshootY.toFixed(1)}px) scale(1) rotate(0deg)`;
      card.style.filter = 'brightness(1) blur(0px)';

      if (incomingP >= 0.65) {
        card.classList.add('active');
        card.classList.remove('behind');
      } else {
        card.classList.remove('active', 'behind');
      }

      // Parallax on image: moves 20px opposite to scroll direction inside frame
      if (img) {
        const pImg = ((1 - incomingP) * 20).toFixed(1);
        img.style.transform = `translateY(${pImg}px)`;
      }
    }
    // Case 4: Future cards waiting in normal sticky flow
    else {
      card.style.transform = 'translateY(0px) scale(1) rotate(0deg)';
      card.style.filter = 'brightness(1) blur(0px)';
      card.classList.remove('active', 'behind');
      if (img) img.style.transform = 'translateY(0px)';
    }
  });
};

function initServicesStack() {
  const section = document.getElementById('services');
  const deck = document.getElementById('services-cards-deck');
  if (!section || !deck) return;

  const header = document.getElementById('services-pinned-header');
  const updateHeaderHeight = () => {
    if (header) {
      const h = header.offsetHeight;
      document.documentElement.style.setProperty('--heading-height', `${h}px`);
    }
  };
  updateHeaderHeight();
  window.addEventListener('resize', updateHeaderHeight);

  // Sparkle pulse on hover
  const cards = deck.querySelectorAll('.service-stack-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const sparkles = card.querySelectorAll('.bullet-sparkle');
      sparkles.forEach(s => {
        s.style.animation = 'none';
        void s.offsetWidth;
        s.style.animation = 'sparklePulse 0.45s ease-out';
      });
    });
  });

  // Calculate scroll progress for the Services Card Stack
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const rect = section.getBoundingClientRect();
      const totalScrollable = section.offsetHeight - window.innerHeight;
      if (totalScrollable > 0) {
        const scrolled = -rect.top;
        const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
        if (typeof window.renderServices === 'function') {
          window.renderServices(progress);
        }
      }
      ticking = false;
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // initial evaluation
}


/* ============================================================================
   6. SHARED NAVBAR (HIDE ON SCROLL DOWN, SHOW ON SCROLL UP)
   ============================================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggleBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!navbar) return;

  const isHomePage = !!document.getElementById('scroll-container');
  let lastScrollY = window.scrollY;

  // Function to scroll to the About beat on Home page
  const scrollToAbout = (smooth = true) => {
    const container = document.getElementById('scroll-container');
    if (container) {
      const totalScrollable = container.offsetHeight - window.innerHeight;
      // About beat is active between 12% and 24% scroll progress. 17% centers it nicely.
      const targetY = container.offsetTop + Math.round(totalScrollable * 0.17);
      window.scrollTo({ top: targetY, behavior: smooth ? 'smooth' : 'instant' });
      return true;
    }
    return false;
  };

  // Function to scroll to Home (top)
  const scrollToHome = (smooth = true) => {
    window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'instant' });
  };

  // Function to scroll to any element
  const scrollToElement = (el, smooth = true) => {
    if (!el) return;
    const navHeight = navbar.offsetHeight || 80;
    const targetY = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top: Math.max(0, targetY), behavior: smooth ? 'smooth' : 'instant' });
  };

  // Helper to get true absolute document Y position
  const getAbsoluteTop = (el) => {
    if (!el) return Infinity;
    return el.getBoundingClientRect().top + window.pageYOffset;
  };

  // Scroll spy to update active link
  const updateActiveNav = () => {
    if (!isHomePage) return;
    const currentY = window.scrollY;
    const navHeight = navbar.offsetHeight || 80;
    const offsetThreshold = navHeight + 120;

    const container = document.getElementById('scroll-container');
    const servicesEl = document.getElementById('services');
    const faqEl = document.getElementById('faq');
    const contactEl = document.getElementById('contact');

    const contactTop = getAbsoluteTop(contactEl);
    const faqTop = getAbsoluteTop(faqEl);
    const servicesTop = getAbsoluteTop(servicesEl);

    let currentSection = 'home';

    if (currentY >= contactTop - offsetThreshold) {
      currentSection = 'contact';
    } else if (currentY >= faqTop - offsetThreshold) {
      currentSection = 'faq';
    } else if (currentY >= servicesTop - offsetThreshold) {
      currentSection = 'services';
    } else if (container) {
      const containerTop = getAbsoluteTop(container);
      const totalScrollable = container.offsetHeight - window.innerHeight;
      const progress = totalScrollable > 0 ? (currentY - containerTop) / totalScrollable : 0;
      if (progress >= 0.12 && progress < 0.28) {
        currentSection = 'about';
      } else {
        currentSection = 'home';
      }
    }

    const allNavLinks = document.querySelectorAll('.navbar-nav .nav-link, .mobile-nav-list .mobile-nav-link');
    allNavLinks.forEach(link => {
      const href = link.getAttribute('href') || '';
      const isTarget = href === `#${currentSection}` || href === `index.html#${currentSection}`;
      link.classList.toggle('active', isTarget);
    });
  };

  // Click handler for links (Desktop & Mobile)
  const handleNavClick = (link, e) => {
    const rawHref = link.getAttribute('href') || '';
    if (!rawHref) return;

    // Normalize href
    const href = rawHref.split('?')[0];

    if (isHomePage) {
      if (href === '#home' || href === 'index.html#home' || href === 'index.html') {
        e.preventDefault();
        scrollToHome(true);
        try { history.replaceState(null, '', '#home'); } catch (err) {}
        updateActiveNav();
      } else if (href === '#about' || href === 'index.html#about') {
        e.preventDefault();
        scrollToAbout(true);
        try { history.replaceState(null, '', '#about'); } catch (err) {}
        updateActiveNav();
      } else if (href === '#services' || href === 'index.html#services') {
        e.preventDefault();
        scrollToElement(document.getElementById('services'), true);
        try { history.replaceState(null, '', '#services'); } catch (err) {}
        updateActiveNav();
      } else if (href === '#faq' || href === 'index.html#faq') {
        e.preventDefault();
        scrollToElement(document.getElementById('faq'), true);
        try { history.replaceState(null, '', '#faq'); } catch (err) {}
        updateActiveNav();
      } else if (href === '#contact' || href === 'index.html#contact') {
        e.preventDefault();
        scrollToElement(document.getElementById('contact'), true);
        try { history.replaceState(null, '', '#contact'); } catch (err) {}
        updateActiveNav();
      }
    }
  };

  // Attach click listener to logo on home page
  const logo = navbar.querySelector('.navbar-logo');
  if (logo && isHomePage) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToHome(true);
      try { history.replaceState(null, '', '#home'); } catch (err) {}
      updateActiveNav();
    });
  }

  // Attach click listeners to all desktop nav links
  navbar.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', (e) => handleNavClick(link, e));
  });

  window.addEventListener('scroll', () => {
    const currentY = window.scrollY;

    // Background blur style
    if (currentY > 40) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }

    // Hide on scroll down, show on scroll up (beyond 200px)
    if (currentY > 200 && currentY > lastScrollY && !mobileMenu?.classList.contains('active')) {
      navbar.classList.add('navbar-hidden');
    } else {
      navbar.classList.remove('navbar-hidden');
    }

    lastScrollY = currentY;
    updateActiveNav();
  }, { passive: true });

  // Mobile Drawer Toggle
  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('active');
      toggleBtn.classList.toggle('active');
      toggleBtn.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close and handle click when clicking mobile link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        handleNavClick(link, e);
        mobileMenu.classList.remove('active');
        toggleBtn.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }

  // Handle URL hash on load
  const checkInitialHash = () => {
    if (!isHomePage) return;
    const hash = window.location.hash;
    if (hash === '#about') {
      setTimeout(() => scrollToAbout(true), 400);
    } else if (hash === '#home') {
      setTimeout(() => scrollToHome(false), 100);
    } else if (hash === '#services') {
      setTimeout(() => scrollToElement(document.getElementById('services'), true), 400);
    } else if (hash === '#faq') {
      setTimeout(() => scrollToElement(document.getElementById('faq'), true), 400);
    } else if (hash === '#contact') {
      setTimeout(() => scrollToElement(document.getElementById('contact'), true), 400);
    }
  };

  if (document.readyState === 'complete') {
    checkInitialHash();
  } else {
    window.addEventListener('load', checkInitialHash);
  }

  window.addEventListener('hashchange', () => {
    if (!isHomePage) return;
    const hash = window.location.hash;
    if (hash === '#about') scrollToAbout(true);
    if (hash === '#home') scrollToHome(true);
    if (hash === '#services') scrollToElement(document.getElementById('services'), true);
    if (hash === '#faq') scrollToElement(document.getElementById('faq'), true);
    if (hash === '#contact') scrollToElement(document.getElementById('contact'), true);
  });
}


/* ============================================================================
   7. INTERACTIVE EFFECTS (CURSOR GLOW & MAGNETIC BUTTONS)
   ============================================================================ */
function initInteractiveEffects() {
  const cursorGlow = document.getElementById('cursor-glow');

  // Desktop cursor follower
  if (cursorGlow && window.innerWidth >= 1024) {
    window.addEventListener('mousemove', (e) => {
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    });
  }

  // Magnetic Button Effect on .magnetic-btn
  const magneticButtons = document.querySelectorAll('.magnetic-btn');
  magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}


/* ============================================================================
   8. CREATOR NETWORK TEASER MARQUEE (index.html)
   ============================================================================ */
function initCreatorTeaserRows() {
  const row1 = document.getElementById('teaser-row-1');
  const row2 = document.getElementById('teaser-row-2');
  if (!row1 || !row2) return;

  const creators = ORBYX_CONFIG.CREATORS;
  const splitIndex = Math.ceil(creators.length / 2);
  const list1 = creators.slice(0, splitIndex);
  const list2 = creators.slice(splitIndex);

  const createCardHTML = (creator) => `
    <div class="teaser-creator-card" data-creator-id="${creator.id}">
      <img src="${creator.photo}" alt="${creator.name} - ${creator.nicheLabel}" class="teaser-card-img" loading="lazy">
      <div class="teaser-card-info">
        <div class="teaser-card-name">${creator.name}</div>
        <div class="teaser-card-handle">${creator.handle}</div>
      </div>
    </div>
  `;

  // Duplicate arrays for seamless marquee infinite scrolling
  const renderMarqueeContent = (container, list) => {
    const doubleList = [...list, ...list, ...list];
    container.innerHTML = doubleList.map(createCardHTML).join('');
  };

  renderMarqueeContent(row1, list1);
  renderMarqueeContent(row2, list2);
}


/* ============================================================================
   9. WHY ORBYX SECTION INTERACTION & TILT ENGINE (index.html)
   ============================================================================ */
function initWhyCardsInteraction() {
  const section = document.getElementById('why-orbyx');
  const grid = document.getElementById('why-cards-grid');
  const cards = document.querySelectorAll('.why-card[data-tilt]');
  const particlesField = document.getElementById('why-particles-field');

  if (!section || !grid) return;

  // 1. Generate faint particle field behind the cards
  if (particlesField && !particlesField.hasChildNodes()) {
    const particleCount = 18;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < particleCount; i++) {
      const dot = document.createElement('span');
      dot.className = 'why-particle-dot';
      const top = (Math.random() * 85 + 5).toFixed(1);
      const left = (Math.random() * 90 + 5).toFixed(1);
      const size = (Math.random() * 3 + 2.5).toFixed(1);
      const duration = (Math.random() * 8 + 7).toFixed(1);
      const delay = (Math.random() * 6).toFixed(1);
      const color = i % 2 === 0 ? 'rgba(217, 70, 239, 0.45)' : 'rgba(240, 171, 252, 0.45)';

      dot.style.top = `${top}%`;
      dot.style.left = `${left}%`;
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.background = color;
      dot.style.boxShadow = `0 0 ${size * 2}px ${color}`;
      dot.style.animationDuration = `${duration}s`;
      dot.style.animationDelay = `-${delay}s`;

      frag.appendChild(dot);
    }
    particlesField.appendChild(frag);
  }

  // 2. Intersection Observer: fade up with 100ms stagger and scale 0.95 -> 1
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          grid.classList.add('why-in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    observer.observe(section);
  } else {
    grid.classList.add('why-in-view');
  }

  // 3. 3D Tilt Interaction: lift 10px, tilt up to 5deg toward cursor
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  cards.forEach(card => {
    let bounds = null;

    card.addEventListener('mouseenter', () => {
      bounds = card.getBoundingClientRect();
      card.style.transition = 'transform 0.12s ease-out, box-shadow 0.35s ease, border-color 0.35s ease';
    });

    card.addEventListener('mousemove', (e) => {
      if (!bounds) bounds = card.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;
      const centerX = bounds.width / 2;
      const centerY = bounds.height / 2;

      // Normalization (-1 to 1)
      const normX = (x - centerX) / centerX;
      const normY = (y - centerY) / centerY;

      // Tilt up to 5deg towards the cursor
      const rotX = Math.min(Math.max(-normY * 5, -5), 5);
      const rotY = Math.min(Math.max(normX * 5, -5), 5);

      card.style.transform = `perspective(1000px) translateY(-10px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      bounds = null;
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease';
      card.style.transform = 'translateY(0) scale(1) rotateX(0deg) rotateY(0deg)';
    });
  });
}


/* ============================================================================
   10. FAQ ACCORDION (ACCESSIBLE ARIA)
   ============================================================================ */
function initFaqAccordion() {
  const faqList = document.getElementById('faq-list');
  if (!faqList) return;

  // Initialize open items (if any are marked open)
  const initOpenItems = () => {
    faqList.querySelectorAll('.faq-item').forEach(item => {
      const trigger = item.querySelector('.faq-trigger');
      const content = item.querySelector('.faq-content');
      if (item.classList.contains('open') && trigger && content) {
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = `${content.scrollHeight}px`;
      }
    });
  };

  initOpenItems();
  // Ensure heights are calculated after fonts / stylesheets load
  window.addEventListener('load', initOpenItems);

  faqList.querySelectorAll('.faq-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.faq-item');
      const content = item.querySelector('.faq-content');
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      // Close all other items
      faqList.querySelectorAll('.faq-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('open');
          const otherTrigger = otherItem.querySelector('.faq-trigger');
          const otherContent = otherItem.querySelector('.faq-content');
          otherTrigger?.setAttribute('aria-expanded', 'false');
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      if (isExpanded) {
        item.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
      } else {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = `${content.scrollHeight}px`;
      }
    });
  });

  // Re-evaluate maxHeight of open item on window resize
  window.addEventListener('resize', () => {
    const openItem = faqList.querySelector('.faq-item.open');
    if (openItem) {
      const content = openItem.querySelector('.faq-content');
      if (content) {
        content.style.maxHeight = `${content.scrollHeight}px`;
      }
    }
  }, { passive: true });
}


/* ============================================================================
   11. FORMS INTERACTION & STATIC FORM API INTEGRATION
   ============================================================================ */
function initForms() {
  // Mobile form switcher tabs (Join as a Creator / I'm a Brand Looking to Scale)
  const btnCreator = document.getElementById('btn-toggle-creator');
  const btnBrand = document.getElementById('btn-toggle-brand');
  const panelCreator = document.getElementById('join-network');
  const panelBrand = document.getElementById('brand-contact');

  if (btnCreator && btnBrand && panelCreator && panelBrand) {
    const switchMobileForm = (type) => {
      if (type === 'creator') {
        btnCreator.classList.add('active');
        btnCreator.setAttribute('aria-selected', 'true');
        btnBrand.classList.remove('active');
        btnBrand.setAttribute('aria-selected', 'false');

        panelCreator.classList.add('mobile-active');
        panelBrand.classList.remove('mobile-active');
      } else {
        btnBrand.classList.add('active');
        btnBrand.setAttribute('aria-selected', 'true');
        btnCreator.classList.remove('active');
        btnCreator.setAttribute('aria-selected', 'false');

        panelBrand.classList.add('mobile-active');
        panelCreator.classList.remove('mobile-active');
      }
    };

    btnCreator.addEventListener('click', () => switchMobileForm('creator'));
    btnBrand.addEventListener('click', () => switchMobileForm('brand'));
  }

  // Budget custom amount handler
  const budgetSelect = document.getElementById('b-budget');
  const budgetCustomWrap = document.getElementById('b-budget-custom-wrap');
  const budgetCustomInput = document.getElementById('b-budget-custom');

  if (budgetSelect && budgetCustomWrap) {
    budgetSelect.addEventListener('change', () => {
      if (budgetSelect.value === 'custom') {
        budgetCustomWrap.style.display = 'block';
        budgetCustomInput?.focus();
      } else {
        budgetCustomWrap.style.display = 'none';
      }
    });
  }

  // Connect any form element to its API endpoint via FormData & fetch
  function setupFormConnection(formId, endpointKey, feedbackId) {
    const form = document.getElementById(formId);
    const feedback = document.getElementById(feedbackId);
    if (!form) return;

    // Resolve endpoint from configuration object or form action
    const endpoint = (typeof FORM_ENDPOINTS !== 'undefined' && FORM_ENDPOINTS[endpointKey])
      ? FORM_ENDPOINTS[endpointKey]
      : (form.getAttribute('action') || "MY_API_URL_HERE");

    form.setAttribute('method', 'POST');
    form.setAttribute('action', endpoint);

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      // Honeypot check: ignore submission if honeypot is filled
      const honeypot = formData.get('honeypot');
      if (honeypot) {
        return;
      }

      // Disable submit button while sending to prevent duplicate submissions
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
      }

      const activeEndpoint = (typeof FORM_ENDPOINTS !== 'undefined' && FORM_ENDPOINTS[endpointKey] && FORM_ENDPOINTS[endpointKey] !== "MY_API_URL_HERE")
        ? FORM_ENDPOINTS[endpointKey]
        : form.getAttribute('action');

      try {
        // Ensure apiKey is present for StaticForms routing
        if (!formData.get('apiKey') && formData.get('access_key')) {
          formData.append('apiKey', formData.get('access_key'));
        }

        const response = await fetch(activeEndpoint, {
          method: 'POST',
          body: formData
        });

        const data = await response.json().catch(() => ({}));

        if (response.ok && data.success !== false) {
          // Clear the form on success
          form.reset();
          if (budgetCustomWrap) budgetCustomWrap.style.display = 'none';

          if (feedback) {
            feedback.className = 'form-feedback success';
            feedback.textContent = "Thank you! We'll get back to you soon.";
          }
        } else {
          // Keep the form data on error
          if (feedback) {
            feedback.className = 'form-feedback error';
            feedback.textContent = (data && data.message) ? data.message : "Something went wrong. Please try again.";
          }
        }
      } catch (err) {
        // Keep the form data on error
        console.error('Submission error:', err);
        if (feedback) {
          feedback.className = 'form-feedback error';
          feedback.textContent = "Something went wrong. Please try again.";
        }
      } finally {
        // Re-enable the submit button afterward; keeps the button's existing style
        if (submitBtn) {
          submitBtn.disabled = false;
        }
      }
    });
  }

  // 1. Join the Network / Creator Application Form
  setupFormConnection('creator-apply-form', 'creator', 'c-feedback');

  // 2. Brand Contact / Proposal Form
  setupFormConnection('contact-form', 'contact', 'b-feedback');
}


/* ============================================================================
   12. CREATORS ROSTER PAGE ENGINE (creators.html)
   ============================================================================ */
class CreatorsPageManager {
  constructor() {
    this.grid = document.getElementById('creators-grid');
    if (!this.grid) return; // Not on creators.html

    this.searchInput = document.getElementById('creator-search-input');
    this.sortSelect = document.getElementById('creator-sort-select');
    this.countBadge = document.getElementById('creators-count-text');
    this.clearBtn = document.getElementById('clear-filters-btn');
    this.emptyState = document.getElementById('empty-state');
    this.resetBtn = document.getElementById('empty-reset-btn');

    // Mobile Bottom Sheet
    this.bottomSheetBackdrop = document.getElementById('bottom-sheet-backdrop');
    this.mobileFilterTrigger = document.getElementById('mobile-filter-trigger');
    this.bottomSheetClose = document.getElementById('bottom-sheet-close');
    this.bottomSheetApply = document.getElementById('bottom-sheet-apply-btn');

    // Detail Modal
    this.modal = document.getElementById('creator-modal');
    this.modalDialog = document.getElementById('modal-dialog');
    this.modalClose = document.getElementById('modal-close-btn');

    this.activeFilters = {
      niche: 'all',
      platform: 'all',
      tier: 'all',
      search: '',
      sort: 'followers-desc'
    };

    this.init();
  }

  init() {
    // Read URL query params on load (e.g., ?niche=fashion)
    this.readUrlParams();

    // Setup chip listeners (Desktop + Mobile)
    this.bindChipEvents();

    // Setup Search & Sort
    this.searchInput?.addEventListener('input', (e) => {
      this.activeFilters.search = e.target.value.toLowerCase().trim();
      this.render();
    });

    this.sortSelect?.addEventListener('change', (e) => {
      this.activeFilters.sort = e.target.value;
      this.render();
    });

    this.clearBtn?.addEventListener('click', () => this.resetAllFilters());
    this.resetBtn?.addEventListener('click', () => this.resetAllFilters());

    // Mobile bottom sheet toggles
    this.mobileFilterTrigger?.addEventListener('click', () => {
      this.bottomSheetBackdrop?.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    const closeSheet = () => {
      this.bottomSheetBackdrop?.classList.remove('open');
      document.body.style.overflow = '';
    };

    this.bottomSheetClose?.addEventListener('click', closeSheet);
    this.bottomSheetApply?.addEventListener('click', closeSheet);
    this.bottomSheetBackdrop?.addEventListener('click', (e) => {
      if (e.target === this.bottomSheetBackdrop) closeSheet();
    });

    // Modal interactions
    this.initModal();

    // Initial render
    this.render();
  }

  readUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const nicheParam = params.get('niche');
    if (nicheParam) {
      this.activeFilters.niche = nicheParam.toLowerCase();
      this.updateChipUI('niche', this.activeFilters.niche);
    }
    const creatorParam = params.get('creator');
    if (creatorParam) {
      setTimeout(() => this.openModal(parseInt(creatorParam, 10)), 200);
    }
  }

  syncUrlParams() {
    const url = new URL(window.location);
    if (this.activeFilters.niche !== 'all') {
      url.searchParams.set('niche', this.activeFilters.niche);
    } else {
      url.searchParams.delete('niche');
    }
    window.history.replaceState({}, '', url);
  }

  updateChipUI(filterType, value) {
    document.querySelectorAll(`.filter-chip[data-filter-type="${filterType}"]`).forEach(chip => {
      const chipVal = chip.dataset.value;
      chip.classList.toggle('active', chipVal === value);
    });
  }

  bindChipEvents() {
    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        // If it's an <a> tag link, prevent navigation so filtering is instant
        if (chip.tagName.toLowerCase() === 'a') {
          e.preventDefault();
        }

        const type = chip.dataset.filterType;
        const value = chip.dataset.value;

        this.activeFilters[type] = value;
        this.updateChipUI(type, value);
        this.syncUrlParams();
        this.render();
      });
    });
  }

  resetAllFilters() {
    this.activeFilters = {
      niche: 'all',
      platform: 'all',
      tier: 'all',
      search: '',
      sort: 'followers-desc'
    };

    if (this.searchInput) this.searchInput.value = '';
    if (this.sortSelect) this.sortSelect.value = 'followers-desc';

    ['niche', 'platform', 'tier'].forEach(type => this.updateChipUI(type, 'all'));
    this.syncUrlParams();
    this.render();
  }

  filterAndSortData() {
    let result = [...ORBYX_CONFIG.CREATORS];

    // Filter by Niche
    if (this.activeFilters.niche !== 'all') {
      result = result.filter(c => c.niche.toLowerCase().includes(this.activeFilters.niche));
    }

    // Filter by Platform
    if (this.activeFilters.platform !== 'all') {
      result = result.filter(c => c.platform.toLowerCase().includes(this.activeFilters.platform));
    }

    // Filter by Follower Tier
    if (this.activeFilters.tier !== 'all') {
      result = result.filter(c => {
        if (this.activeFilters.tier === 'nano') return c.followersCount < 10000;
        if (this.activeFilters.tier === 'micro') return c.followersCount >= 10000 && c.followersCount <= 100000;
        if (this.activeFilters.tier === 'macro') return c.followersCount > 100000;
        return true;
      });
    }

    // Filter by Search Query
    if (this.activeFilters.search) {
      const q = this.activeFilters.search;
      result = result.filter(c => 
        c.name.toLowerCase().includes(q) ||
        c.handle.toLowerCase().includes(q) ||
        c.nicheLabel.toLowerCase().includes(q) ||
        c.bio.toLowerCase().includes(q)
      );
    }

    // Sort
    if (this.activeFilters.sort === 'followers-desc') {
      result.sort((a, b) => b.followersCount - a.followersCount);
    } else if (this.activeFilters.sort === 'followers-asc') {
      result.sort((a, b) => a.followersCount - b.followersCount);
    } else if (this.activeFilters.sort === 'alpha-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }

  render() {
    const list = this.filterAndSortData();

    // Update count badge
    if (this.countBadge) {
      this.countBadge.textContent = `Showing ${list.length} creator${list.length === 1 ? '' : 's'}`;
    }

    // Show or hide empty state
    if (this.emptyState) {
      this.emptyState.classList.toggle('visible', list.length === 0);
    }

    if (list.length === 0) {
      this.grid.innerHTML = '';
      return;
    }

    // Render cards with animated reflow (60ms stagger)
    this.grid.innerHTML = list.map((creator, idx) => `
      <article class="creator-card" data-id="${creator.id}" style="opacity: 0; transform: translateY(16px); transition: opacity 0.35s ease ${idx * 60}ms, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 60}ms;">
        <div class="creator-photo-wrap">
          <img src="${creator.photo}" alt="${creator.name} portrait" class="creator-photo" loading="lazy">
          <div class="creator-card-niche-tag">${creator.nicheLabel}</div>
        </div>
        <div class="creator-card-body">
          <div class="creator-card-header">
            <div>
              <h3 class="creator-name">${creator.name}</h3>
              <div class="creator-handle">${creator.handle}</div>
            </div>
            <div class="creator-platform-icons">
              <span title="${creator.platform.toUpperCase()}">●</span>
            </div>
          </div>
          <p style="font-size: 0.875rem; color: var(--text-body); line-height: 1.5; margin-bottom: 0.5rem;">
            ${creator.bio.slice(0, 95)}...
          </p>
          <div class="creator-metrics-row">
            <div class="creator-metric-item">
              <span class="creator-metric-val">${creator.followers}</span>
              <span class="creator-metric-lbl">Followers</span>
            </div>
            <div class="creator-metric-item" style="text-align: right;">
              <span class="creator-metric-val" style="font-size: 1.05rem; text-transform: capitalize;">${creator.platform}</span>
              <span class="creator-metric-lbl">Platform</span>
            </div>
          </div>
          <button type="button" class="btn btn-primary creator-view-btn" data-creator-id="${creator.id}">
            <span>View Profile</span>
            <span class="btn-arrow" aria-hidden="true">→</span>
          </button>
        </div>
      </article>
    `).join('');

    // Trigger fade-up
    requestAnimationFrame(() => {
      this.grid.querySelectorAll('.creator-card').forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      });
    });

    // Attach click handlers to open modal
    this.grid.querySelectorAll('.creator-view-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.creatorId, 10);
        this.openModal(id);
      });
    });
  }

  initModal() {
    if (!this.modal) return;

    this.modalClose?.addEventListener('click', () => this.closeModal());
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.closeModal();
    });

    // Focus trapping & Esc listener
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('open')) {
        this.closeModal();
      }
    });
  }

  openModal(creatorId) {
    const creator = ORBYX_CONFIG.CREATORS.find(c => c.id === creatorId);
    if (!creator || !this.modal) return;

    document.getElementById('modal-img').src = creator.photo;
    document.getElementById('modal-niche-label').textContent = creator.nicheLabel.toUpperCase();
    document.getElementById('modal-creator-name').textContent = creator.name;
    document.getElementById('modal-creator-handle').textContent = creator.handle;
    document.getElementById('modal-bio').textContent = creator.bio;
    document.getElementById('modal-followers').textContent = creator.followers;
    const modalPlatform = document.getElementById('modal-platform');
    if (modalPlatform) modalPlatform.textContent = creator.platform ? creator.platform.charAt(0).toUpperCase() + creator.platform.slice(1) : 'Instagram';
    const modalCategory = document.getElementById('modal-category');
    if (modalCategory) modalCategory.textContent = creator.nicheLabel;
    const modalEng = document.getElementById('modal-engagement');
    if (modalEng && modalEng.parentElement) modalEng.parentElement.style.display = 'none';
    const modalLocation = document.getElementById('modal-location');
    if (modalLocation) modalLocation.textContent = creator.location || 'India';
    document.getElementById('modal-social-link').href = creator.instagramUrl;

    this.modal.classList.add('open');
    this.modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    this.modalClose?.focus();
  }

  closeModal() {
    if (!this.modal) return;
    this.modal.classList.remove('open');
    this.modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

/* ============================================================================
   12B. TERMS & CONDITIONS MODAL
   ============================================================================ */
function initTermsModal() {
  const modal = document.getElementById('terms-modal');
  if (!modal) return;

  const openButtons = document.querySelectorAll('#footer-terms-btn, a[href="#terms"], [data-open-terms]');
  const closeBtn = document.getElementById('terms-modal-close');
  const acceptBtn = document.getElementById('terms-modal-accept');

  function openTerms() {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  }

  function closeTerms() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openTerms();
    });
  });

  closeBtn?.addEventListener('click', closeTerms);
  acceptBtn?.addEventListener('click', closeTerms);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeTerms();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeTerms();
    }
  });
}

/* ============================================================================
   12C. GMAIL DIRECT COMPOSE HANDLER
   ============================================================================ */
function initGmailComposeHandler() {
  const gmailLinks = document.querySelectorAll('.gmail-compose-link, [data-gmail]');

  gmailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const email = link.getAttribute('data-gmail') || 'Abhay.orbyxmedia@gmail.com';
      const isAndroid = /Android/i.test(navigator.userAgent);
      const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

      if (isAndroid) {
        e.preventDefault();
        // Trigger Android Gmail app compose with recipient prefilled
        const gmailIntent = `intent://co?to=${encodeURIComponent(email)}#Intent;scheme=googlegmail;package=com.google.android.gm;end`;
        const mailtoFallback = `mailto:${email}`;

        window.location.href = gmailIntent;
        setTimeout(() => {
          window.location.href = mailtoFallback;
        }, 500);
      } else if (isIOS) {
        e.preventDefault();
        // Trigger iOS Gmail app compose with recipient prefilled
        const iosGmailApp = `googlegmail:///co?to=${encodeURIComponent(email)}`;
        const mailtoFallback = `mailto:${email}`;

        window.location.href = iosGmailApp;
        setTimeout(() => {
          window.location.href = mailtoFallback;
        }, 600);
      }
      // On desktop, default anchor target="_blank" opens Gmail web compose box directly
    });
  });
}


/* ============================================================================
   13. APPLICATION INITIALIZATION
   ============================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize shared components
  initNavbar();
  initInteractiveEffects();
  initTermsModal();
  initGmailComposeHandler();

  // Initialize Home page elements (if present)
  new ScrollCanvasEngine();
  initServicesStack();
  initMarqueeRibbons();
  initCreatorTeaserRows();
  initWhyCardsInteraction();
  initFaqAccordion();
  initForms();

  // URL scroll helper for direct testing & deep linking
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('hidePreloader') || urlParams.has('skipPreloader')) {
    if (typeof window.skipPreloader === 'function') {
      window.skipPreloader();
    }
  }
  if (urlParams.has('scrollToId')) {
    const targetId = urlParams.get('scrollToId');
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    }, 150);
  } else if (urlParams.has('scroll')) {
    const y = parseInt(urlParams.get('scroll'), 10);
    setTimeout(() => {
      window.scrollTo(0, y);
    }, 100);
  } else if (urlParams.has('scrollPct')) {
    const pct = parseFloat(urlParams.get('scrollPct'));
    setTimeout(() => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo(0, maxScroll * pct);
    }, 100);
  }

  // Initialize Creators Roster page (if present)
  new CreatorsPageManager();
});
