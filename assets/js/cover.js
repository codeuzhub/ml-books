function showCover(img) {
  var overlay = document.querySelector('.overlay');
  document.getElementById('cover-preview').src = img.src;
  overlay.classList.add('active');
}

function closeCover(overlay) {
  overlay.classList.remove('active');
}

(function() {
  var theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  function apply(t) {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('theme', t);
    var btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = t === 'dark' ? '[ light ]' : '[ dark ]';
  }

  apply(theme);

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('theme-toggle').addEventListener('click', function() {
      apply(localStorage.getItem('theme') === 'dark' ? 'light' : 'dark');
    });
  });
})();
