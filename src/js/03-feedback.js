import throttle from 'lodash.throttle';

// const input = document.querySelector('feedback-form')
const input = document.querySelector('label')
const storageKey = 'feedback-form-state'
input.addEventListener(
    'input',
    throttle(event => {
        const objValue = JSON.parse(localStorage.getItem(storageKey));
        objValue[event.target.name] = event.target.value;
        localStorage.setItem(storageKey, JSON.stringify(storageKey));
      }
    ), 500 
    );




