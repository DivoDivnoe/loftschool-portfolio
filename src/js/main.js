import addMenuHandlers from './main-menu';
import flip from './flip';
import parallax from './parallax';
import blogMenu from './blog-menu';

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.main-nav__menu');
  const userWrapper = document.querySelector('.welcome__user-box');
  const parallaxContainer = document.querySelector('.parallax');
  const hero = document.querySelector('.hero');
  const blog = document.querySelector('.blog__content');

  if (menu) {
    addMenuHandlers(menu);
  }

  if (userWrapper) {
    flip(userWrapper);
  }

  if (parallaxContainer) {
    parallax.mouseMove(parallaxContainer);
  }

  if (hero) {
    parallax.scroll(hero);
  }

  if (blog) {
    blogMenu(blog);
  }
});
