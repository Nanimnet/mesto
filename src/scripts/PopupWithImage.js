import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
    }

    open(link, name) {
     const popupImg = document.querySelector('.popup-image');
     const popupPhoto = document.querySelector('.popup-image__img');
     const popupDescription = document.querySelector('.popup-image__description');
     popupPhoto.setAttribute('src', link);
     popupPhoto.setAttribute('alt', name);
     popupDescription.textContent = name;
     super.open(popupImg);
   };
 }