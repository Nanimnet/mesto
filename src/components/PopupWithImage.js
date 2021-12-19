import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  static popupWithImageConfig = {
    figureImageClassSelector: ".popup-image__img",
    figureCaptionClassSelector: ".popup-image__description",
  };

  constructor(popupSelector) {
    super(popupSelector);

    this._figureImage = this._popup.querySelector(
      PopupWithImage.popupWithImageConfig.figureImageClassSelector
    );
    this._figureCaption = this._popup.querySelector(
      PopupWithImage.popupWithImageConfig.figureCaptionClassSelector
    );
  }

  open(name, link) {
    this._figureImage.src = link;
    this._figureImage.alt = name;

    this._figureCaption.textContent = name;

    super.open();
  }
}