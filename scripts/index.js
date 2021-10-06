const modalWindow = document.querySelector('.popup');
const modalWindowCloseBtn = document.querySelector('.popup__close');
const editBtn = document.querySelector('.profile__edit-button');
const submitBtn = document.querySelector('.popup__btn-submit');
let nameСhange = document.querySelector('.profile__title');
let jobСhange = document.querySelector('.profile__description');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__form-item_el_heading'); // Воспользуйтесь инструментом .querySelector()
let jobInput = formElement.querySelector('.popup__form-item_el_subheading');

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

    // Выберите элементы, куда должны быть вставлены значения полей
    let nameСhange = document.querySelector('.profile__title');
    let jobСhange = document.querySelector('.profile__description');
    // Вставьте новые значения с помощью textContent
    nameСhange.textContent = nameInput.value;
    jobСhange.textContent = jobInput.value;
    closePopup()
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 