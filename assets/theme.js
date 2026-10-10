// Theme switch (DS v5 §8.8): System / Light / Dark. The choice sets data-theme on <html>; with no
// choice stored the page follows the system. The inline snippet in each page's <head> applies a
// stored choice before the first paint, so a dark page never flashes light.
(() => {
  const KEY = 'strait.theme';
  const root = document.documentElement;
  const get = () => { try { return localStorage.getItem(KEY) || 'system'; } catch { return 'system'; } };
  const set = (v) => {
    try { v === 'system' ? localStorage.removeItem(KEY) : localStorage.setItem(KEY, v); } catch { /* storage blocked */ }
    if (v === 'system') delete root.dataset.theme; else root.dataset.theme = v;
    for (const b of document.querySelectorAll('[data-theme-set]')) b.setAttribute('aria-pressed', String(b.dataset.themeSet === v));
  };
  for (const b of document.querySelectorAll('[data-theme-set]')) b.addEventListener('click', () => set(b.dataset.themeSet));
  set(get());
})();
