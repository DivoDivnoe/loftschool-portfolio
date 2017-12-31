const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.main-nav__menu');

const addMenuHandlers = () => {
  if (!toggle) return false;

  const menuList = menu.querySelector('.main-nav__list');

  const appearMenuHandler = () => {
    menuList.style.visibility = 'visible';
  };

  const menuOpenHandler = () => {
    toggle.classList.add('toggle--close');
    menu.classList.add('main-nav__menu--opened');

    toggle.onclick = menuCloseHandler;
    menu.addEventListener('transitionend', appearMenuHandler);
  };

  const menuCloseHandler = () => {
    toggle.classList.remove('toggle--close');
    menu.classList.remove('main-nav__menu--opened');
    menuList.style.visibility = 'hidden';

    toggle.onclick = menuOpenHandler;
    menu.removeEventListener('transitionend', appearMenuHandler);
  };

  toggle.onclick = menuOpenHandler;
};

export default addMenuHandlers;
