const blogMenu = blog => {
  const OFFSET_INDEX = 0.6;

  const menu = blog.querySelector('.blog__menu');
  const menuItems = menu.querySelectorAll('.blog__menu-link');
  const button = menu.querySelector('.blog__menu-button');
  const articles = blog.querySelectorAll('.blog__item');

  const getActiveArticle = () => {
    const screenHeight = document.body.clientHeight;
    return [...articles].findIndex(item => {
      const coords = item.getBoundingClientRect();

      return (
        coords.top < screenHeight * OFFSET_INDEX &&
        coords.top > -item.offsetWidth
      );
    });
  };

  const scrollHandler = () => {
    const index = getActiveArticle();

    const active = [...menuItems].find(item =>
      item.classList.contains('blog__menu-link--active')
    );
    if (active) active.classList.remove('blog__menu-link--active');

    if (index < 0) return false;

    menuItems[index].classList.add('blog__menu-link--active');
  };

  const scrollDownHandler = () => {
    const coords = blog.getBoundingClientRect();

    if (coords.top > 0) return false;

    if (!menu.classList.contains('blog__menu--fixed')) {
      menu.classList.add('blog__menu--fixed');
      document.removeEventListener('scroll', scrollDownHandler);
      document.addEventListener('scroll', scrollUpHandler);
    }
  };

  const scrollUpHandler = () => {
    const coords = blog.getBoundingClientRect();

    if (coords.top < 0) return false;

    if (menu.classList.contains('blog__menu--fixed')) {
      menu.classList.remove('blog__menu--fixed');
      document.removeEventListener('scroll', scrollUpHandler);
      document.addEventListener('scroll', scrollDownHandler);
    }
  };

  const clickMenuItemHandler = evt => {
    const active = [...menuItems].find(item =>
      item.classList.contains('blog__menu-link--active')
    );
    if (active) active.classList.remove('blog__menu-link--active');

    evt.target.classList.add('blog__menu-link--active');
  };

  [...menuItems].forEach(item => {
    item.addEventListener('click', clickMenuItemHandler);
  });

  document.addEventListener('scroll', scrollDownHandler);
  document.addEventListener('scroll', scrollHandler);

  button.addEventListener('click', () => {
    menu.classList.toggle('blog__menu--closed');
  });
};

export default blogMenu;
