export default class Card {
  constructor(name, link, selectorTemlate, clickHandler) {
    this.name = name;
    this.link = link;
    this.selectorTemlate = selectorTemlate;
    this.clickHandler = clickHandler;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this.selectorTemlate)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    //delete
    this._element
      .querySelector(".card__delete")
      .addEventListener("click", (event) => {
        event.target.closest(".card").remove();
      });

    //like
    this._element
      .querySelector(".card__like")
      .addEventListener("click", (event) => {
        this._handleClickLike();
      });

    //open image
    this._element
      .querySelector(".card__photo")
      .addEventListener("click", (event) => {
        this._openImage();
      });
  }

  _handleClickLike() {
    this._element
      .querySelector(".card__like")
      .classList.toggle("card__like_active");
  }

  _openImage() {
    this.clickHandler();
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".card__photo").setAttribute("src", this.link);
    this._element.querySelector(".card__photo").setAttribute("alt", this.name);
    this._element.querySelector(".card__title").textContent = this.name;

    return this._element;
  }
}
