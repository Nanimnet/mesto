import Card from './Card.js';

export default class Section {
    constructor({renderer, items}, containerSelector) {
     this._initialArray = items;
     this._renderer = renderer;
     this._container = document.querySelector(containerSelector);
    }
  
    renderItems() {
      this._initialArray.forEach(cardElement => {
            this._renderer(cardElement);
        });
    }
  
    //создание карточки
    addItem(element) {
        this._container.prepend(element);
    }
  }