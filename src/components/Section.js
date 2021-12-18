export default class Section {
  constructor({ renderer, items }, containerSelector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  setInitialArray(items) {
    this._initialArray = items;
  }

  renderItems() {
    this._initialArray.forEach((cardElement) => {
      this._renderer(cardElement);
    });
  }

  //создание карточки
  addItem(element) {
    this._container.prepend(element);
  }
}
