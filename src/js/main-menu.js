const addMenuHandlers = () => {
  const toggle = document.querySelector('.toggle');
  const menu = document.querySelector('.main-nav__menu');

  if (!toggle) return false;

  const menuList = menu.querySelector('.main-nav__list');

  const appearMenuHandler = evt => {
    if (evt.propertyName !== 'width') return false;

    menuList.style.visibility = 'visible';
    toggle.onclick = menuCloseHandler;
    menu.removeEventListener('transitionend', appearMenuHandler);
  };

  const menuOpenHandler = () => {
    toggle.classList.add('toggle--close');
    menu.classList.add('main-nav__menu--opened');
    toggle.onclick = null;

    menu.addEventListener('transitionend', appearMenuHandler);
  };

  const menuCloseHandler = () => {
    menuList.style.visibility = 'hidden';
    toggle.classList.remove('toggle--close');
    menu.classList.remove('main-nav__menu--opened');

    toggle.onclick = menuOpenHandler;
  };

  toggle.onclick = menuOpenHandler;
};

export default addMenuHandlers;
