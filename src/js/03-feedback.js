import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";
const dataInput = {};

window.addEventListener("load", hahdlerLoad);
formEl.addEventListener('input',throttle(handlerInput, 500));
formEl.addEventListener('submit', handlerSubmit);


function hahdlerLoad() { 
   try {
  const save = localStorage.getItem(LOCALSTORAGE_KEY)
    if (save) {
      const saveData = JSON.parse(save);

      Object.entries(saveData).forEach(([key, val]) => formEl.elements[key].value = val)
    };
  } catch (error) { 
    console.log(error.name); 
    console.log(error.message);
  }
}

function handlerSubmit(evt) { 

    evt.preventDefault();
    
    console.log(dataInput);
    evt.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

function handlerInput(evt) { 

    dataInput[evt.target.name]= evt.target.value.trim();
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataInput));
  
}