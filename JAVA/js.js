document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('main-nav');

  if (!hamburger || !mainNav) return;

  // Toggle menu open/close
  hamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    hamburger.classList.toggle('is-open');
    mainNav.classList.toggle('active');
  });

  // Close when clicking a nav link
  mainNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('is-open');
      mainNav.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (ev) {
    if (!mainNav.contains(ev.target) && !hamburger.contains(ev.target)) {
      hamburger.classList.remove('is-open');
      mainNav.classList.remove('active');
    }
  });

  // Close on Escape
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape') {
      hamburger.classList.remove('is-open');
      mainNav.classList.remove('active');
    }
  });
});
const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('main-nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });