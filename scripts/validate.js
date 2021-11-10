enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_is-valid',
  errorPrefix: '-error',
  errorClass: 'popup__input_is-valid'
}); 

function enableValidation(obj) {
  const forms = [...document.querySelectorAll(obj.formSelector)];

  forms.forEach(function(v, i, a) {
    addListenersToForms(v, obj);
  })
}

function addListenersToForms(form, obj) {
  const inputs = Array.from(form.querySelectorAll(obj.inputSelector));

  inputs.forEach(function(v, i, a) {
    addListenersToInput(v, obj);
  })

  form.addEventListener('submit', function (e) {
    handleSubmit(e, obj);
  });
  form.addEventListener('input', function (e) {
    handleFormInput(e, obj);
  });

  setSubmitButtonState(form, obj)
};

function handleFormInput(event, obj) {
  const {currentTarget: form} = event;

  setSubmitButtonState(form, obj)
};

function setSubmitButtonState(form, obj) {
  const button = form.querySelector(obj.submitButtonSelector);

  button.disabled = !form.checkValidity();
  button.classList.toggle(obj.inactiveButtonClass, !form.checkValidity())
}

function handleSubmit(event, obj) {
  event.preventDefault();

  const form = event.target;
  const data = [...form.querySelectorAll(obj.inputSelector)].reduce(
    (sum, input) => ({
      ...sum,
      [input.name]: input.value,
    }),
    {},
  );
  
}

function addListenersToInput(input, obj) {
  input.addEventListener('input', function (e) {
    handleFieldValidation(e, obj);
  })
};

function handleFieldValidation(event, obj) {

  const element = event.target;
  const errorContainer = document.querySelector(`#${element.id}${obj.errorPrefix}`);

  errorContainer.textContent = element.validationMessage; 

  element.classList.toggle (
    obj.errorClass,
    !element.validity.valid,
  );
}