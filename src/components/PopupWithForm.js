import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  static popupWithFormConfig = {
    formClassSelector: ".popup__form",
    formInputClassSelector: ".popup__input",
    formSubmitButtonClassSelector: ".popup__button",
  };

  constructor({ popupSelector, submitFormCb }) {
    super(popupSelector);
    this._submitFormCb = submitFormCb;
    this.form = this._popup.querySelector(
      PopupWithForm.popupWithFormConfig.formClassSelector
    );
    this.buttonSubmit = this.form.querySelector(
      PopupWithForm.popupWithFormConfig.formSubmitButtonClassSelector
    );
  }

  _getInputValues() {
    this._inputs = this.form.querySelectorAll(
      PopupWithForm.popupWithFormConfig.formInputClassSelector
    );

    this._formValues = {};

    this._inputs.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._submitFormCb(this._getInputValues());
    });
  }

  close() {
    this.form.reset();
    super.close();
  }
}