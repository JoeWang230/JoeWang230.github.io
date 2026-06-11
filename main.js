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
