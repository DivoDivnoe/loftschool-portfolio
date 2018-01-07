const flip = userWrapper => {
  const authButton = document.querySelector('.welcome-header__auth');
  const user = userWrapper.querySelector('.welcome__user');
  const form = userWrapper.querySelector('.welcome__form');
  const mainPageButton = form.querySelector('.form__menu-item');
  const maxHeight = Math.max(user.offsetHeight, form.offsetHeight);

  userWrapper.style.height = maxHeight + 'px';

  const authClickHandler = evt => {
    evt.preventDefault();

    userWrapper.classList.add('welcome__user-box--rotated');
    authButton.classList.add('welcome-header__auth--hidden');

    authButton.removeEventListener('click', authClickHandler);
    mainPageButton.addEventListener('click', mainPageButtonClickHandler);
  };

  const mainPageButtonClickHandler = evt => {
    evt.preventDefault();

    userWrapper.classList.remove('welcome__user-box--rotated');
    authButton.classList.remove('welcome-header__auth--hidden');

    mainPageButton.removeEventListener('click', mainPageButtonClickHandler);
    authButton.addEventListener('click', authClickHandler);
  };

  authButton.addEventListener('click', authClickHandler);
  mainPageButton.addEventListener('click', mainPageButtonClickHandler);
};

export default flip;
