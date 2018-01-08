const load = (success, error, data, url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.responseType = 'json';
    xhr.timeout = 10000;
    xhr.open('POST', url);
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(`Ошибка: ${xhr.status} ${xhr.statusText}`);
      }
    });
    xhr.addEventListener('error', () => {
      reject('Ошибка соединения');
    });
    xhr.addEventListener('timeout', () => {
      reject(`Время запроса превысило ${xhr.timeout} мс`);
    });

    if (data) {
      xhr.send(data);
    } else {
      xhr.send();
    }
  })
    .then(response => success(response))
    .catch(message => error(message));
};

const validate = (inputs, success, error) => {
  return new Promise((resolve, reject) => {
    const emptyField = inputs.find(item => item.value === '');

    if (emptyField) {
      reject(emptyField);
    } else {
      resolve();
    }
  }).then(success, emptyField => error(emptyField));
};

const validateError = emptyField => {
  const emptyFieldWrapper = emptyField.parentElement;

  const className = emptyFieldWrapper.className;
  const errorClassName = `${className}--error`;

  emptyFieldWrapper.classList.add(errorClassName);

  emptyField.addEventListener('focus', () => {
    emptyFieldWrapper.classList.remove(errorClassName);
  });
};

const groupFormData = elems => {
  const params = {};

  elems.forEach(element => {
    const elType = element.type;
    const elName = element.name;

    if (
      !elName ||
      ((elType == 'checkbox' || elType == 'radio') && !element.checked)
    )
      return false;

    params[elName] = element.value;
  });

  return params;
};

const validateSuccess = (elems, url) => {
  const params = groupFormData(elems);

  load(
    response => console.log(response),
    response => console.log(response),
    JSON.stringify(JSON.stringify(params)),
    url
  );
};

const login = form => {
  const elems = form.elements;
  const url = form.action;
  const inputs = form.querySelectorAll('.form__field');
  const capture = form.querySelector('.form__capture');

  form.addEventListener('submit', evt => {
    evt.preventDefault();
    console.log(elems);

    validate([...inputs], () => validateSuccess([...elems]), validateError);
  });
};

const contact = form => {
  const elems = form.elements;
  const url = form.action;
  const inputs = form.querySelectorAll('.contact-form__field');
  const textarea = form.querySelector('.contact-form__message');

  form.addEventListener('submit', evt => {
    evt.preventDefault();

    validate(
      [...inputs, textarea],
      () => validateSuccess([...elems], url),
      validateError
    );
  });
};

export default {login, contact};
