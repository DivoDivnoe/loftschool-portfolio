import addMenuHandlers from './main-menu';
import flip from './flip';
import {mouseMoveParallax, scrollParallax} from './parallax';
import blur from './blur';

document.addEventListener('DOMContentLoaded', () => {
  addMenuHandlers();
  flip();
  mouseMoveParallax();
  scrollParallax();
  blur();
});
