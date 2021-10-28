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

function openPopup(modal) { 
  modal.classList.add('popup_is-opened'); 


};

function closePopup(modal) { 
  modal.classList.remove('popup_is-opened'); 
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
const deleteBtn = document.querySelector('.card__delete');

const renderCards = (card) => {
  const cardStr = cardsTemplate.cloneNode(true);
  const placeName = cardStr.querySelector('.card__title');
  const placeLink = cardStr.querySelector('.card__photo');
  placeName.textContent = card.name;
  placeLink.setAttribute('src', card.link);
  placeLink.setAttribute('alt', card.name);

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
    popupPhoto.setAttribute('alt', card.name);
    popupDescription.textContent = card.name;
    openPopup(popupImg);
  });


  cardContainer.prepend(cardStr);
};

initialCards.forEach(renderCards);

const addCard = (event) => {
  event.preventDefault();

  const cardInputName = event.target.querySelector('.popup-add__form-item_el_heading');
  const cardName = cardInputName.value;
  const cardInputLink = event.target.querySelector('.popup-add__form-item_el_subheading');
  const cardLink = cardInputLink.value;
  let newCard = {name:cardName, link:cardLink};
  renderCards(newCard);

  cardInputName.value = '';
  cardInputLink.value = '';
  closePopup(modalWindowAdd);
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
