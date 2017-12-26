const toggle = document.querySelector('.main-nav__toggle');
const menu = document.querySelector('.main-nav__menu');
const closer = document.querySelector('.main-nav__menu-close');

const addMenuHandlers = () => {
  if (!toggle) return false;

  const menuCloseHandler = () => {
    menu.classList.remove('main-nav__menu--opened');
    closer.removeEventListener('click', menuCloseHandler);
  };

  toggle.addEventListener('click', () => {
    menu.classList.add('main-nav__menu--opened');

    closer.addEventListener('click', menuCloseHandler);
  });
};

export default addMenuHandlers;
