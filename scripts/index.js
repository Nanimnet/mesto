const modalWindow = document.querySelector('.popup'); 
const modalWindowCloseBtn = document.querySelector('.popup__close'); 
const editBtn = document.querySelector('.profile__edit-button'); 
const submitBtn = document.querySelector('.popup__btn-submit'); 
const nameСhange = document.querySelector('.profile__title'); 
const jobСhange = document.querySelector('.profile__description'); 
const formElement = document.querySelector('.popup__form'); 
const nameInput = formElement.querySelector('.popup__form-item_el_heading'); // Воспользуйтесь инструментом .querySelector() 
const jobInput = formElement.querySelector('.popup__form-item_el_subheading'); 

function openPopup() { 
    modalWindow.classList.add('popup_is-opened'); 
    nameInput.value = nameСhange.textContent; 
    jobInput.value = jobСhange.textContent; 
} 

function closePopup() { 

    modalWindow.classList.remove('popup_is-opened'); 

} 

editBtn.addEventListener('click', openPopup); 
modalWindowCloseBtn.addEventListener('click', closePopup); 

// Обработчик «отправки» формы, хотя пока 
// она никуда отправляться не будет 
function formSubmitHandler (evt) { 

    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. 

                                                // Так мы можем определить свою логику отправки. 

                                                // О том, как это делать, расскажем позже. 
    // Вставьте новые значения с помощью textContent 
    nameСhange.textContent = nameInput.value; 
    jobСhange.textContent = jobInput.value; 
    closePopup();
} 

// Прикрепляем обработчик к форме: 
// он будет следить за событием “submit” - «отправка» 
formElement.addEventListener('submit', formSubmitHandler); 

//переменные для второго попапа - добавление карточек
const modalWindowAdd = document.querySelector('.popup-add');
const modalWindowCloseBtnAdd = document.querySelector('.popup-add__close');
const BtnAdd = document.querySelector('.profile__add-button');
const submitBtnAdd = document.querySelector('.popup-add__btn-submit');

//открываем второй попап add
function openPopupAdd() {
  modalWindowAdd.classList.add('popup-add_is-opened');
}

// Закрываем попап Add
function closePopupAdd() {
  modalWindowAdd.classList.remove('popup-add_is-opened');
}

// Открываем и закрываем попап add
BtnAdd.addEventListener('click', openPopupAdd);
modalWindowCloseBtnAdd.addEventListener('click', closePopupAdd);

//Добавляем карточки из коробки
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

const cardContainer = document.querySelector('.cards');
const cardForm = document.querySelector('.popup-add__form');
const cardsTemplate = document.querySelector('#cards-template').content;
const deleteBtn = document.querySelector('.card__delete');

const renderCards = (card) => {
  const cardStr = cardsTemplate.cloneNode(true);
  const placeName = cardStr.querySelector('.card__title');
  const placeLink = cardStr.querySelector('.card__photo');
  placeName.textContent = card.name;
  placeLink.setAttribute('src', card.link);

  //удалить
  const cardDeleteBtn = cardStr.querySelector('.card__delete');
  cardDeleteBtn.addEventListener('click', (event) => {
    event.target.closest('.card').remove();
  });

  //Лайк
  cardStr.querySelector('.card__like').addEventListener('click', (event) => {
    event.target.classList.toggle('card__like_active');
  }); 
  
  //Открываем картинку
  placeLink.addEventListener('click', function(){
    popupPhoto.setAttribute('src', card.link);
    popupDescription.textContent = card.name;
    togglePopupImg();
  });


  cardContainer.append(cardStr);
}

initialCards.forEach(renderCards);


//Добавляем карточки через форму
const renderNewCard = (cardName, cardLink) => {
  const cardStr = cardsTemplate.cloneNode(true);
  const placeName = cardStr.querySelector('.card__title');
  const placeLink = cardStr.querySelector('.card__photo');
  placeName.textContent = cardName;
  placeLink.setAttribute('src', cardLink);

  //удалить
  const cardDeleteBtn = cardStr.querySelector('.card__delete');
  cardDeleteBtn.addEventListener('click', (event) => {
    event.target.closest('.card').remove();
  });

  //лайк
  cardStr.querySelector('.card__like').addEventListener('click', (event) => {
    event.target.classList.toggle('card__like_active');
  }); 

  //Открываем картинку
  placeLink.addEventListener('click', function(){
    popupPhoto.setAttribute('src', cardLink);
    popupDescription.textContent = cardName;
    togglePopupImg();
  });
  

  cardContainer.prepend(cardStr);
}

const addCard = (event) => {
  event.preventDefault();

  const cardInputName = event.target.querySelector('.popup-add__form-item_el_heading');
  const cardName = cardInputName.value;
  const cardInputLink = event.target.querySelector('.popup-add__form-item_el_subheading');
  const cardLink = cardInputLink.value;

  renderNewCard(cardName, cardLink);

  cardInputName.value = ' ';
  cardInputLink.value = ' ';
  closePopupAdd();
}

//Вешаем на форму добавления карточек обработчик событий
cardForm.addEventListener('submit', addCard);

const popupImg = document.querySelector('.popup-image');
const popupPhoto = document.querySelector('.popup-image__img');
const popupDescription = document.querySelector('.popup-image__description');
const popupCloseBtn = document.querySelector('.popup-image__close');

function togglePopupImg () {
  popupImg.classList.toggle('popup-image_is-opened');
};

popupCloseBtn.addEventListener('click', togglePopupImg);












