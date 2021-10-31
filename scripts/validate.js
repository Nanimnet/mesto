enableValidation();

function enableValidation() {
  const forms = [...document.querySelectorAll('.popup__form')];

  forms.forEach(addListenersToForms);
}

function addListenersToForms(form) {
  const inputs = Array.from(form.querySelectorAll('.popup__input'));

  inputs.forEach(addListenersToInput);

  form.addEventListener('submit', handleSubmit);
  form.addEventListener('input', handleFormInput);

  setSubmitButtonState(form)
};

function handleFormInput(event) {
  const {currentTarget: form} = event;

  setSubmitButtonState(form)
};

function setSubmitButtonState(form) {
  const button = form.querySelector('.popup__button');

  button.disabled = !form.checkValidity();
  button.classList.toggle('popup__button_is-valid', !form.checkValidity())
}

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const data = [...form.querySelectorAll('.popup__input')].reduce(
    (sum, input) => ({
      ...sum,
      [input.name]: input.value,
    }),
    {},
  );
  
}

function addListenersToInput(input) {
  input.addEventListener('input', handleFieldValidation);
};

function handleFieldValidation(event) {
  const element = event.target;

  const errorContainer = document.querySelector(`#${element.id}-error`);

  errorContainer.textContent = element.validationMessage; 
  
  element.classList.toggle (
    'popup__input_is-valid',
    !element.validity.valid,
  );
}