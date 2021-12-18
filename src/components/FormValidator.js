export default class FormValidator {
  selectors = null;
  formElementList = null;
  form = null;
  constructor(obj, formElementList) {
    this.selectors = obj;
    this.formElementList = formElementList;
    this.form = [...this.formElementList][0];
  }

  publicEnableValidation() {
    this._enableValidation(this.selectors);
  }

  _enableValidation() {
    this._addListenersToForms();
  }

  _addListenersToForms() {
    const obj = this.selectors;
    const inputs = Array.from(this.form.querySelectorAll(obj.inputSelector));

    inputs.forEach((value) => {
      this._addListenersToInput(value, obj);
    });

    this.form.addEventListener("submit", (e) => {
      this._handleSubmit(e, obj);
    });
    this.form.addEventListener("input", (e) => {
      this._handleFormInput(e, obj);
    });

    this._setSubmitButtonState(this.form, obj);
  }

  _handleFormInput(event, obj) {
    const { currentTarget: form } = event;

    this._setSubmitButtonState(this.form, obj);
  }

  submitButtonState() {
    this.formElementList.forEach(() => {
      this._setSubmitButtonState(this.form, this.selectors);
    });
  }

  _setSubmitButtonState(form, obj) {
    const button = form.querySelector(obj.submitButtonSelector);

    button.disabled = !form.checkValidity();
    button.classList.toggle(obj.inactiveButtonClass, !form.checkValidity());
  }

  _handleSubmit(event, obj) {
    event.preventDefault();

    const form = event.target;
    const data = [...form.querySelectorAll(obj.inputSelector)].reduce(
      (sum, input) => ({
        ...sum,
        [input.name]: input.value,
      }),
      {}
    );
  }

  _addListenersToInput(input, obj) {
    input.addEventListener("input", (e) => {
      this._handleFieldValidation(e, obj);
    });
  }

  _handleFieldValidation(event, obj) {
    const element = event.target;
    const errorContainer = document.querySelector(
      `#${element.id}${obj.errorPrefix}`
    );

    errorContainer.textContent = element.validationMessage;

    element.classList.toggle(obj.errorClass, !element.validity.valid);
  }
}
