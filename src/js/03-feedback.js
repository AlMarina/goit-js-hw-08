import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";
const dataInput = {};

window.addEventListener("load", hahdlerLoad);
formEl.addEventListener('input',throttle(handlerInput, 500));
formEl.addEventListener('submit', handlerSubmit);


function hahdlerLoad() { 
    const save = localStorage.getItem(LOCALSTORAGE_KEY)
    if (save)
    {
        const saveData = JSON.parse(save);
        const {
    elements: { email, message }
  } = formEl;
    email.value = saveData.email;
    message.value = saveData.message;
     }

}

function handlerSubmit(evt) { 

    evt.preventDefault();
     if (!dataInput.email || !dataInput.message) {
        alert('УВАГА! Заповніть усі поля!');
        return;
      }
    console.log(dataInput);
    evt.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

function handlerInput(evt) { 

    dataInput[evt.target.name]= evt.target.value.trim();
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataInput));
  
}