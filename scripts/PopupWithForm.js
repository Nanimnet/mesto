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

  open(obj){
      super.open();
      Array.from(obj || []).forEach((v) => {
        const input = this._formElement.querySelector(`input[name="${v.name}"]`);
        if (input) {
            input.value = v.value;
        }
      })
      
  }

  close() {
    super.close();
    const cardInputName = this._formElement.querySelector('.popup-add__form-item_el_heading');
    const cardInputLink = this._formElement.querySelector('.popup-add__form-item_el_subheading')
    if(cardInputName) {
        cardInputName.value = '';
        cardInputLink.value = '';
    };
  }
}