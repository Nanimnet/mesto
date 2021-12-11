export default class Popup {
    constructor(popupSelector) {
        this._selector = document.querySelector(popupSelector)
    }
  
    open() {
      this._selector.classList.add('popup_is-opened');
      document.addEventListener('keydown', (e) => this._handleEscClose(e));
    };
  
    close() {
      this._selector.classList.remove('popup_is-opened');
      document.removeEventListener('keydown', (e) => this._handleEscClose(e));
    };
  
    _handleEscClose(event) {
        if (event.key === 'Escape') {
         this.close();
        };
      };

  
    setEventListeners() {
      //закрытие на крестик
      this._selector.querySelector('.popup__close').removeEventListener('click', () => this.close());
      this._selector.querySelector('.popup__close').addEventListener('click', () => this.close());

      //закрытие на оверлей
      this._selector.removeEventListener('click', (event) => {
        if (event.target === event.currentTarget) {
              this.close();
            }
      });
      this._selector.addEventListener('click', (event) => {
        if (event.target === event.currentTarget) {
              this.close();
            }
      });
    }
  }

