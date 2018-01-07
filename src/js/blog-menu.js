const blogMenu = blog => {
  const menu = blog.querySelector('.blog__menu');
  const button = menu.querySelector('.blog__menu-button');

  const scrollDownHandler = () => {
    const coords = blog.getBoundingClientRect();

    if (coords.top > 0) return false;

    if (!menu.classList.contains('blog__menu--fixed')) {
      menu.classList.add('blog__menu--fixed');
      document.onscroll = scrollUpHandler;
    }
  };

  const scrollUpHandler = () => {
    const coords = blog.getBoundingClientRect();

    if (coords.top < 0) return false;

    if (menu.classList.contains('blog__menu--fixed')) {
      menu.classList.remove('blog__menu--fixed');
      document.onscroll = scrollDownHandler;
    }
  };

  document.onscroll = scrollDownHandler;

  button.addEventListener('click', () => {
    menu.classList.toggle('blog__menu--closed');
  });
};

export default blogMenu;
