import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callBack) {
    super(popupSelector);
    this._callBack = callBack;
    this._formElement = this._selector.querySelector('.popup__form');
  }

  _getInputValues() {
    const formValues = {};
    Array.from(this._formElement.querySelectorAll('.popup__input')).map(function (input) {
      formValues[input.name] = input.value;
    });

    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._formElement.addEventListener('submit', (e) => {
      this._callBack(e);
    });
  }

  close() {
    super.close();
    const cardInputName = this._formElement.querySelector('.popup-add__form-item_el_heading') || this._formElement.querySelector('.popup-profile__form-item_el_heading');
    const cardInputLink = this._formElement.querySelector('.popup-add__form-item_el_subheading') || this._formElement.querySelector('.popup-profile__form-item_el_subheading');
    cardInputName.value = '';
    cardInputLink.value = '';
  }
}