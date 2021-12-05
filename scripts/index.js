import FormValidator from './FormValidator.js';
import Card from './Card.js';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },

  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 
const modalWindowProfile = document.querySelector('.popup-profile'); 
const modalWindowCloseBtnProfile = document.querySelector('.popup-profile__close'); 
const editBtn = document.querySelector('.profile__edit-button'); 
const submitBtn = document.querySelector('.popup-profile__btn-submit'); 
const nameСhange = document.querySelector('.profile__title'); 
const jobСhange = document.querySelector('.profile__description'); 
const formElementProfile = document.querySelector('.popup-profile__form'); 
const nameInput = formElementProfile.querySelector('.popup-profile__form-item_el_heading'); 
const jobInput = formElementProfile.querySelector('.popup-profile__form-item_el_subheading'); 


export default function openPopup(modal) { 
  modal.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeEsc);
};

function closePopup(modal) { 
  modal.classList.remove('popup_is-opened'); 
  document.removeEventListener('keydown', closeEsc);
};

editBtn.addEventListener('click', (e) => {
  openPopup(modalWindowProfile);
  
  nameInput.value = nameСhange.textContent; 
  jobInput.value = jobСhange.textContent; 
}); 

modalWindowCloseBtnProfile.addEventListener('click', () => {
  closePopup(modalWindowProfile);
}); 


// функция редактирования имени и описания профиля
function submitProfileForm (evt) { 
    evt.preventDefault(); 
    nameСhange.textContent = nameInput.value; 
    jobСhange.textContent = jobInput.value; 
    closePopup(modalWindowProfile);
} 

// Прикрепляем обработчик к форме
formElementProfile.addEventListener('submit', submitProfileForm); 

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, '#cards-template');
  const cardElement = card.generateCard();
  const container = document.querySelector('.cards');

  container.append(cardElement);
});

// создание карточки
 function renderCard(card) {
  document.querySelector('.cards').prepend(card);
};



//переменные для второго попапа - добавление карточек
const modalWindowAdd = document.querySelector('.popup-add');
const modalWindowCloseBtnAdd = document.querySelector('.popup-add__close');
const btnAdd = document.querySelector('.profile__add-button');
const submitBtnAdd = document.querySelector('.popup-add__btn-submit');


// Открываем и закрываем попап add
btnAdd.addEventListener('click', function() {
  openPopup(modalWindowAdd);
});

modalWindowCloseBtnAdd.addEventListener('click', function() {
  closePopup(modalWindowAdd);
});


const cardForm = document.querySelector('.popup-add__form');

// добавление карточки через форму
const addCard = (event) => {
  event.preventDefault();

  const cardInputName = event.target.querySelector('.popup-add__form-item_el_heading');
  const cardName = cardInputName.value;
  const cardInputLink = event.target.querySelector('.popup-add__form-item_el_subheading');
  const cardLink = cardInputLink.value;
  const newCard = {name:cardName, link:cardLink};
  const cardElement = new Card(newCard.name, newCard.link, '#cards-template').generateCard();
  renderCard(cardElement);

  cardInputName.value = '';
  cardInputLink.value = '';
  closePopup(modalWindowAdd);
  submitBtnAdd.classList.add('popup__button_is-valid');
  submitBtnAdd.disabled = true
};

//Вешаем на форму добавления карточек обработчик событий
cardForm.addEventListener('submit', addCard);

//переменные для открытия и закрытия попапа картинки
const popupImg = document.querySelector('.popup-image');
const popupPhoto = document.querySelector('.popup-image__img');
const popupDescription = document.querySelector('.popup-image__description');
const popupCloseBtn = document.querySelector('.popup-image__close');

popupCloseBtn.addEventListener('click', function () {
  closePopup(popupImg)
});

//закрытие попапов на оверлей
function clickOnOverlay(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.currentTarget);
  }
}

modalWindowProfile.addEventListener('click', clickOnOverlay);
modalWindowAdd.addEventListener('click', clickOnOverlay);
popupImg.addEventListener('click', clickOnOverlay);

//закрытие попапа клавишей
function closeEsc(event) {
  if (event.key === 'Escape') { 
    const openedPopup = document.querySelector('.popup_is-opened') 
   closePopup(openedPopup);
  };
};


//валидация формы добавления новой карточки
const formsAdd = [...document.querySelectorAll('.popup-add__form')];
const formConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_is-valid',
  errorPrefix: '-error',
  errorClass: 'popup__input_is-valid'
};

const formAdd = new FormValidator(formConfig, formsAdd);

formAdd.publicEnableValidation()



// валидация редактирования 
const formsEdit = [...document.querySelectorAll('.popup-profile__form')];

const formEdit = new FormValidator(formConfig, formsEdit);

formEdit.publicEnableValidation()