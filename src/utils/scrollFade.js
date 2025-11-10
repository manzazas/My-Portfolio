// Simple scroll fade-in using IntersectionObserver
// Elements to animate should have the class `fade-in`.
// When they enter the viewport the class `appeared` will be added.

function initScrollFade() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const els = () => Array.from(document.querySelectorAll('.fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appeared');
        // Optionally unobserve to avoid repeated triggers
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -8% 0px'
  });

  const run = () => {
    els().forEach(el => {
      // if not already appeared
      if (!el.classList.contains('appeared')) observer.observe(el);
    });
  };

  // Run on load and DOMContentLoaded
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    run();
  } else {
    document.addEventListener('DOMContentLoaded', run);
    window.addEventListener('load', run);
  }

  // If new nodes are added dynamically, observe them too
  const mo = new MutationObserver(() => run());
  mo.observe(document.documentElement, { childList: true, subtree: true });
}

// initialize immediately when module is imported
try {
  initScrollFade();
} catch {
  // fail silently
}

export default initScrollFade;
