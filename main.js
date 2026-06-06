(function () {
  var page = window.location.pathname.split('/').pop() || 'index.html';
  var navPage = /^news-.+\.html$/.test(page) ? 'news.html' : page;
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    if (a.getAttribute('href') === navPage) {
      a.style.color = 'var(--accent)';
    }
  });
})();
