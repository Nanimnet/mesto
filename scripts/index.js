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
const nameInput = formElementProfile.querySelector('.popup-profile__form-item_el_heading'); // Воспользуйтесь инструментом .querySelector() 
const jobInput = formElementProfile.querySelector('.popup-profile__form-item_el_subheading'); 
const root = document.querySelector('.root');

function openPopup(modal) { 
  modal.classList.add('popup_is-opened');
  root.addEventListener('keydown', closeEsc);
};

function closePopup(modal) { 
  modal.classList.remove('popup_is-opened'); 
  root.removeEventListener('keydown', closeEsc);
};

editBtn.addEventListener('click', function() {
  openPopup(modalWindowProfile);
  
  nameInput.value = nameСhange.textContent; 
  jobInput.value = jobСhange.textContent; 
}); 

modalWindowCloseBtnProfile.addEventListener('click', function() {
  closePopup(modalWindowProfile);
}); 



// Обработчик «отправки» формы, хотя пока 
// она никуда отправляться не будет 
function submitProfileForm (evt) { 

    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. 

                                                // Так мы можем определить свою логику отправки. 

                                                // О том, как это делать, расскажем позже. 
    // Вставьте новые значения с помощью textContent 
    nameСhange.textContent = nameInput.value; 
    jobСhange.textContent = jobInput.value; 
    closePopup(modalWindowProfile);
} 

// Прикрепляем обработчик к форме: 
// он будет следить за событием “submit” - «отправка» 
formElementProfile.addEventListener('submit', submitProfileForm); 

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

const cardContainer = document.querySelector('.cards');
const cardForm = document.querySelector('.popup-add__form');
const cardsTemplate = document.querySelector('#cards-template').content;


const createCard = (card) => {

  const cardElement = cardsTemplate.cloneNode(true);
  const placeName = cardElement.querySelector('.card__title');
  const placeLink = cardElement.querySelector('.card__photo');
  placeName.textContent = card.name;
  placeLink.setAttribute('src', card.link);
  placeLink.setAttribute('alt', card.name);

  addLogic(cardElement);
  
  return cardElement;
};

function renderCard(card) {
  cardContainer.prepend(card);
};

function addLogic(cardElement) {

  //удалить
  const cardDeleteBtn = cardElement.querySelector('.card__delete');
  cardDeleteBtn.addEventListener('click', (event) => {
    event.target.closest('.card').remove();
  });

  //Лайк
  cardElement.querySelector('.card__like').addEventListener('click', (event) => {
    event.target.classList.toggle('card__like_active');
  });

  //Открываем картинку
  const placeLink = cardElement.querySelector('.card__photo');
  const src = placeLink.getAttribute('src');
  const name = placeLink.getAttribute('alt');
  placeLink.addEventListener('click', function () {
    popupPhoto.setAttribute('src', src);
    popupPhoto.setAttribute('alt', name);
    popupDescription.textContent = name;
    openPopup(popupImg);
  });
};

initialCards.forEach(function (v, i, a) {
 const newCard = createCard(v);
 renderCard(newCard);
});

const addCard = (event) => {
  event.preventDefault();

  const cardInputName = event.target.querySelector('.popup-add__form-item_el_heading');
  const cardName = cardInputName.value;
  const cardInputLink = event.target.querySelector('.popup-add__form-item_el_subheading');
  const cardLink = cardInputLink.value;
  const newCard = {name:cardName, link:cardLink};
  const cardElement = createCard(newCard);
  renderCard(cardElement);

  cardInputName.value = '';
  cardInputLink.value = '';
  closePopup(modalWindowAdd);
  submitBtnAdd.classList.add('popup__button_is-valid');
  submitBtnAdd.disabled = true
};

//Вешаем на форму добавления карточек обработчик событий
cardForm.addEventListener('submit', addCard);

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
  if (event.keyCode === 'Escape') { 
    const openedPopup = document.querySelector('.popup_is-opened') 
   closePopup(openedPopup);
  };
};