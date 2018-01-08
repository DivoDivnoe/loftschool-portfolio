const arrows = arrow => {
  const hero = document.querySelector('.hero');

  const offset = hero.offsetHeight;
  const clickArrowHandler = () => {
    window.scrollTo(0, offset);
  };

  arrow.addEventListener('click', clickArrowHandler);
};

export default arrows;
