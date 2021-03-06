const addMenuHandlers = menu => {
  const menuList = menu.querySelector('.main-nav__list');
  const toggle = document.querySelector('.toggle');

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

    [...menu.children].forEach(item =>
      item.addEventListener('transitionend', appearMenuHandler)
    );
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
