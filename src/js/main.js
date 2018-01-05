import addMenuHandlers from './main-menu';
import flip from './flip';
import parallax from './parallax';
import blur from './blur';

document.addEventListener('DOMContentLoaded', () => {
  addMenuHandlers();
  flip();
  parallax.mouseMove();
  parallax.scroll();
  blur();
});
