import './style.scss';

import { mountOrbitalScene } from './js/orbital-scene.js';
import { initWarp } from './js/warp.js';
import { initTheme } from './js/theme.js';
import { initUI } from './js/ui.js';

document.addEventListener('DOMContentLoaded', () => {
  const warp = initWarp();
  mountOrbitalScene(document.getElementById('orbital-planes'));
  initTheme(warp.redraw);
  initUI();
});
