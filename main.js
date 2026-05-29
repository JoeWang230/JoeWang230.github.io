// Highlight active nav link based on scroll position
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 60;

  function onScroll() {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - navH - 8) current = sec.id;
    });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
