import addMenuHandlers from './main-menu';
import flip from './flip';
import parallax from './parallax';
import blogMenu from './blog-menu';
import form from './form';
import preload from './preloader';
import arrows from './arrows';
import initSlider from './slider';
import svg4everybody from './svg4everybody';
import 'babel-polyfill';

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.main-nav__menu');
  const userWrapper = document.querySelector('.welcome__user-box');
  const parallaxContainer = document.querySelector('.parallax');
  const hero = document.querySelector('.hero');
  const blog = document.querySelector('.blog__content');
  const loginForm = document.querySelector('#form');
  const contactForm = document.querySelector('#review-form');
  const preloader = document.querySelector('.preloader');
  const downArrow = document.querySelector('.hero__arrow');
  const upArrow = document.querySelector('.reviews__arrow');
  const sliderElement = document.querySelector('.slider');

  svg4everybody();

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

  if (loginForm) {
    form.login(loginForm);
  }

  if (contactForm) {
    form.contact(contactForm);
  }

  if (preloader) {
    preload(preloader);
  }

  if (downArrow) {
    arrows(downArrow);
  }

  if (upArrow) {
    arrows(upArrow);
  }

  if (sliderElement) {
    initSlider(sliderElement);
  }
});
