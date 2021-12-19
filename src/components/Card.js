export default class Card {
  static CardSelectors = {
    cardImageClassSelector: ".card__photo",
    cardHeartClassSelector: ".card__like",
    cardDeleteIconClassSelector: ".card__delete",
    cardDescriptionClassSelector: ".card__title",
    cardClassSelector: ".card",
    cardActiveHeartClass: "card__like_active",
    cardHeartVoicesClassSelector: ".card__like-count",
    hiddenButtonClass: "card__delete_hidden",
  };

  constructor({
    cardData,
    handleCardClick,
    cardTemplateClassSelector,
    handleDeleteIconClick,
    currentOwner,
    handlerLikeAdd,
    handlerLikeRemove,
  }) {
    this._cardData = cardData;
    this._handleCardClick = handleCardClick;
    this._cardTemplateClassSelector = cardTemplateClassSelector;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._cardOwner = cardData.owner;
    this._currentOwner = currentOwner;
    this._handlerLikeAdd = handlerLikeAdd;
    this._handlerLikeRemove = handlerLikeRemove;
  }

  createCard = () => {
    this._cardItem = this._getTemplate();

    this._likeIcon = this._cardItem.querySelector(
      Card.CardSelectors.cardHeartClassSelector
    );

    this._deleteIcon = this._cardItem.querySelector(
      Card.CardSelectors.cardDeleteIconClassSelector
    );

    this._cardImage = this._cardItem.querySelector(
      Card.CardSelectors.cardImageClassSelector
    );
    this._cardImage.src = this._cardData.link;
    this._cardImage.alt = this._cardData.name;

    this._cardDescription = this._cardItem.querySelector(
      Card.CardSelectors.cardDescriptionClassSelector
    );

    this._cardHeartVoices = this._cardItem.querySelector(
      Card.CardSelectors.cardHeartVoicesClassSelector
    );

    this._setCardData();
    this._setCardEventListeners();

    this.countHeartVoices(this._cardData.likes.length);

    return this._cardItem;
  };

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._cardTemplateClassSelector)
      .content.querySelector(Card.CardSelectors.cardClassSelector);

    return cardTemplate.cloneNode(true);
  }

  getCardId = () => this._cardData._id;

  _setCardData() {
    this._cardDescription.textContent = this._cardData.name;
  }

  _setCardImageEventListeners = () => {
    this._cardImage.addEventListener("click", () =>
      this._handleOpenPicture(this._cardData.name, this._cardData.link)
    );
  };

  countHeartVoices = (count) => {
    this._cardHeartVoices.textContent = count;
  };

  _handleOpenPicture = (name, link) => this._handleCardClick(name, link);

  _setCardEventListeners() {
    this._setCardImageEventListeners();
    this._setLikeIconEventListeners();
    this._setDeleteIconEventListeners();
    this._setOwnerLikes();
  }

  _setOwnerLikes() {
    if (
      this._cardData.likes.some(
        (liker) => JSON.stringify(liker) === JSON.stringify(this._currentOwner)
      )
    ) {
      this.addLike();
    }
  }

  _setLikeIconEventListeners = () => {
    this._likeIcon.addEventListener("click", () => {
      if (
        this._likeIcon.classList.contains(
          Card.CardSelectors.cardActiveHeartClass
        )
      ) {
        this._handlerLikeRemove();
      } else {
        this._handlerLikeAdd();
      }
    });
  };

  addLike() {
    this._likeIcon.classList.add(Card.CardSelectors.cardActiveHeartClass);
  }

  removeLike() {
    this._likeIcon.classList.remove(Card.CardSelectors.cardActiveHeartClass);
  }

  _setDeleteIconEventListeners = () => {
    if (
      JSON.stringify(this._cardOwner) === JSON.stringify(this._currentOwner)
    ) {
      this._deleteIcon.classList.remove(Card.CardSelectors.hiddenButtonClass);
    }

    this._deleteIcon.addEventListener("click", () =>
      this._handleDeleteIconClick(this._cardItem)
    );
  };

  remove = () => {
    this._cardItem.remove();
    this._cardItem = null;
  };
}
