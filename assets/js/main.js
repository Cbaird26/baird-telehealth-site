(function(){
  const root = document.documentElement;
  const btn = document.querySelector('[data-theme-toggle]');
  const year = document.querySelector('[data-year]');

  const saved = localStorage.getItem('theme');
  if(saved === 'light' || saved === 'dark'){
    root.dataset.theme = saved;
  } else {
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    root.dataset.theme = prefersLight ? 'light' : 'dark';
  }

  function icon(){
    const isLight = root.dataset.theme === 'light';
    btn?.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    btn?.setAttribute('title', isLight ? 'Dark mode' : 'Light mode');
    btn && (btn.textContent = isLight ? '☾' : '☀');
  }
  icon();

  btn?.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    localStorage.setItem('theme', next);
    icon();
  });

  if(year){
    year.textContent = new Date().getFullYear();
  }
})();
