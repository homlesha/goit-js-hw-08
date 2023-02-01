import throttle from 'lodash.throttle';

const input = document.querySelector('.feedback-form');
const keyStorage = 'feedback-form-state';

input.addEventListener(
  'input',
  throttle(event => {
    const objValue = JSON.parse(localStorage.getItem(keyStorage)) || {};
    objValue[event.target.name] = event.target.value;
    localStorage.setItem(keyStorage, JSON.stringify(objValue));
  }, 500)
);

input.addEventListener('submit', event => {
  event.preventDefault();
  const email = event.currentTarget.email.value;
  const message = event.currentTarget.message.value;
  if((email || message) === '') return
  console.log({ email, message });
  input.reset();
  localStorage.removeItem(keyStorage);
});

(function dataFromLocalStorage() {
  const objValue = JSON.parse(localStorage.getItem(keyStorage));
    for (let key in objValue) {
      input.elements[key].value = objValue[key];
    }
})();