/**
 * Basics of Data Science - Interactive Client Script
 * Theme toggle, landscape calendar scroll, lecture anchor highlight, nav spy.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initCalendarScroll();
  initLectureHighlight();
  initScrollSpy();
  initMobileNav();
  initBackToTop();
  initMathRendering();
});

/* ==========================================================================
   Theme Management (Light / Dark)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  const currentTheme = localStorage.getItem('bds-theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  applyTheme(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('bds-theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('bds-theme', theme);

  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    if (theme === 'dark') {
      // Show sun icon to switch to light
      themeIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      `;
    } else {
      // Show moon icon to switch to dark
      themeIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
    }
  }
}

/* ==========================================================================
   Landscape Calendar Controls & Drag-To-Scroll
   ========================================================================== */
function initCalendarScroll() {
  const track = document.getElementById('calendar-track');
  const btnPrev = document.getElementById('cal-scroll-left');
  const btnNext = document.getElementById('cal-scroll-right');

  if (!track) return;

  const scrollAmount = 300;

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }

  // Fluid Mouse Drag-to-scroll
  let isDown = false;
  let startX;
  let scrollLeft;

  track.addEventListener('mousedown', (e) => {
    // Only drag when not clicking on links/buttons
    if (e.target.closest('a') || e.target.closest('button')) return;
    isDown = true;
    track.style.cursor = 'grabbing';
    track.style.userSelect = 'none';
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener('mouseleave', () => {
    isDown = false;
    track.style.cursor = '';
  });

  track.addEventListener('mouseup', () => {
    isDown = false;
    track.style.cursor = '';
    track.style.removeProperty('user-select');
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
  });
}

/* ==========================================================================
   Lecture Card Highlight on Anchor Navigation
   ========================================================================== */
function initLectureHighlight() {
  function highlightTarget(id) {
    if (!id) return;
    const target = document.getElementById(id.replace(/^#/, ''));
    if (target && target.classList.contains('lecture-card')) {
      target.classList.remove('highlight');
      // Trigger reflow to restart animation
      void target.offsetWidth;
      target.classList.add('highlight');
    }
  }

  // Listen to hash changes or click on links that target a lecture
  window.addEventListener('hashchange', () => {
    highlightTarget(window.location.hash);
  });

  document.querySelectorAll('a[href^="#lec-"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      highlightTarget(href);
    });
  });

  if (window.location.hash) {
    highlightTarget(window.location.hash);
  }
}

/* ==========================================================================
   Navigation ScrollSpy
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/* ==========================================================================
   Mobile Navigation
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });

  // Close when clicking a nav link
  navLinks.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ==========================================================================
   Back To Top
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   LaTeX Math Rendering & Fallback Engine
   ========================================================================== */
function initMathRendering() {
  function applyKatex() {
    if (window.renderMathInElement) {
      try {
        renderMathInElement(document.body, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '\\[', right: '\\]', display: true },
            { left: '\\(', right: '\\)', display: false }
          ],
          throwOnError: false
        });
        return true;
      } catch (err) {
        console.warn('KaTeX render error:', err);
      }
    }
    return false;
  }

  function applyFallback() {
    const targets = document.querySelectorAll('.lec-synopsis-text, .minimal-note, .editorial-text, .timeline-desc');
    targets.forEach(el => {
      if (el.innerHTML.includes('\\(')) {
        el.innerHTML = el.innerHTML
          .replace(/\\\(\\text\{Final HW Grade\}\s*=\s*\\text\{Assignment Score\}\s*\\times\s*\\text\{Quiz Coefficient\}\\\)/g, 
            '<span class="math-rendered"><em>Final HW Grade</em> = <em>Assignment Score</em> &times; <em>Quiz Coefficient</em></span>')
          .replace(/\\\(\\text\{MSE\}\s*=\s*\\text\{Var\}\s*\+\s*\\text\{Bias\}\^2\\\)/g,
            '<span class="math-rendered"><em>MSE</em> = <em>Var</em> + <em>Bias</em><sup>2</sup></span>')
          .replace(/\\\(Uniform\\\(0,\s*\\theta\\\)\\\)/g, '<span class="math-rendered">Uniform(0, &theta;)</span>')
          .replace(/\\\(I_n\s*=\s*-E\[\\partial\^2\/\\partial\\theta\^2\s*\\ln f\]\\\)/g, '<span class="math-rendered"><em>I<sub>n</sub></em> = &minus;E[&part;<sup>2</sup>/&part;&theta;<sup>2</sup> ln <em>f</em>]</span>')
          .replace(/\\\(X_n\s*\\xrightarrow\{d\}\s*X\\\)/g, '<span class="math-rendered"><em>X<sub>n</sub></em> &rarr;<sup><em>d</em></sup> <em>X</em></span>')
          .replace(/\\\(\\hat\{\\theta\}_n\s*\\xrightarrow\{P\}\s*\\theta\\\)/g, '<span class="math-rendered"><span style="text-decoration:overline">&theta;</span><sub><em>n</em></sub> &rarr;<sup><em>P</em></sup> &theta;</span>')
          .replace(/\\\(\\max\(X_i\)\\\)/g, '<span class="math-rendered">max(<em>X<sub>i</sub></em>)</span>')
          .replace(/\\\(0,\s*\\theta\\\)/g, '<span class="math-rendered">(0, &theta;)</span>');
      }
    });
  }

  // Try KaTeX immediately, or retry when window loads
  if (!applyKatex()) {
    window.addEventListener('load', () => {
      if (!applyKatex()) {
        applyFallback();
      }
    });
    // Safety timeout in case KaTeX CDN doesn't load within 500ms
    setTimeout(() => {
      if (!window.renderMathInElement) {
        applyFallback();
      } else {
        applyKatex();
      }
    }, 500);
  }
}

