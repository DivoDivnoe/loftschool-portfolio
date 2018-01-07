const login = () => {
  const loginButton = document.querySelector('.form__menu-item--submit');

  if (!loginButton) return false;

  loginButton.addEventListener('click', evt => {
    evt.preventDefault();
  });
};
