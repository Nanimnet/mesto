import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callBack) {
    super(popupSelector);
    this._callBack = callBack;
    this._formElement = this._selector.querySelector(".popup__form");
  }

  _getInputValues() {
    const formValues = {};
    Array.from(this._formElement.querySelectorAll(".popup__input")).map(
      function (input) {
        formValues[input.name] = input.value;
      }
    );

    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._formElement.addEventListener("submit", (e) => {
      this._callBack(e, this._getInputValues());
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }
}
