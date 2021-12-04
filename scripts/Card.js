export default class Card {
    constructor(name, link){
      this.name = name;
      this.link = link;
    }
  
    _getTemplate() {
      const cardElement = document
      .querySelector('#cards-template')
      .content
      .querySelector('.card')
      .cloneNode(true);
  
      return cardElement;
    };
  
    _setEventListeners(){
      //delete
      this._element.querySelector('.card__delete').addEventListener('click', (event) =>{
        event.target.closest('.card').remove();
      });
  
      //like
      this._element.querySelector('.card__like').addEventListener('click', (event) => {
        this._handleClick();
      });
  
      //open image
      this._element.querySelector('.card__photo').addEventListener('click', (event) => {
        this._openImage();
      });
    };
  
    _handleClick() {
      this._element.querySelector('.card__like').classList.toggle('card__like_active')
    };
  
    _openImage() {
      const src = this._element.querySelector('.card__photo').getAttribute('src');
      const title = this._element.querySelector('.card__title').innerText;
      const popupImg = document.querySelector('.popup-image');
      const popupPhoto = document.querySelector('.popup-image__img');
      const popupDescription = document.querySelector('.popup-image__description');
      this._element.addEventListener('click', (event) => {
        if(`${event.target.classList}`.indexOf('card__like') != -1 || `${event.target.classList}`.indexOf('card__delete') != -1 ) {
          return;
        } 
        popupPhoto.setAttribute('src', src);
        popupPhoto.setAttribute('alt', title);
        popupDescription.textContent = title;
        this._openPopup(popupImg);
      });
    }

    _openPopup(modal) { 
        modal.classList.add('popup_is-opened');
        const root = document.querySelector('.root');
        root.addEventListener('keydown', this._closeEsc);
      };

      _closeEsc(event) {
        if (event.key === 'Escape') { 
            const openedPopup = document.querySelector('.popup_is-opened') 
           closePopup(openedPopup);
          };
      }
  
    generateCard(){
      this._element = this._getTemplate();
      this._setEventListeners();
  
      this._element.querySelector('.card__photo').setAttribute('src', this.link);
      this._element.querySelector('.card__title').textContent = this.name;
  
      return this._element;
    }
  };

  