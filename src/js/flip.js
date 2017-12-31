const box = document.querySelector('.welcome__user-box');
const auth = document.querySelector('.welcome-header__auth');

const flip = () => {
  if (!auth) {
    return false;
  }

  const user = box.querySelector('.welcome__user');
  const form = box.querySelector('.welcome__form');
  const mainPageButton = form.querySelector('.form__menu-item');
  const maxHeight = Math.max(user.offsetHeight, form.offsetHeight);

  box.style.height = maxHeight + 'px';

  const authClickHandler = evt => {
    console.log(333);
    evt.preventDefault();

    box.classList.add('welcome__user-box--rotated');
    auth.classList.add('welcome-header__auth--hidden');

    auth.removeEventListener('click', authClickHandler);
    mainPageButton.addEventListener('click', mainPageButtonClickHandler);
  };

  const mainPageButtonClickHandler = evt => {
    evt.preventDefault();

    box.classList.remove('welcome__user-box--rotated');
    auth.classList.remove('welcome-header__auth--hidden');

    mainPageButton.removeEventListener('click', mainPageButtonClickHandler);
    auth.addEventListener('click', authClickHandler);
  };

  auth.addEventListener('click', authClickHandler);
  mainPageButton.addEventListener('click', mainPageButtonClickHandler);
};

export default flip;
