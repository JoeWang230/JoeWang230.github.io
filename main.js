(function () {
  var page = window.location.pathname.split('/').pop() || 'index.html';
  var navPage = /^news-.+\.html$/.test(page) ? 'news.html' : page;
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href').split('/').pop();
    if (href === navPage) {
      a.classList.add('active');
    }
  });
})();

(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (localStorage.getItem('theme')) return;
    root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
  });
})();
