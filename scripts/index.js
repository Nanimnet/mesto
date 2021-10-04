const modalWindow = document.querySelector('.popup');
const modalWindowCloseBtn = document.querySelector('.popup__close');
const editBtn = document.querySelector('.profile__edit-button');
const submitBtn = document.querySelector('.popup__btn-submit');

function toggleModalWindow() {
    modalWindow.classList.toggle('popup_is-opened');
}

editBtn.addEventListener('click', toggleModalWindow);
modalWindowCloseBtn.addEventListener('click', toggleModalWindow);


// Находим форму в DOM
let formElement = document.querySelector('.popup__form'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__form-item_el_heading'); // Воспользуйтесь инструментом .querySelector()
let jobInput = formElement.querySelector('.popup__form-item_el_subheading');// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    nameInput.getAttribute('value');
    jobInput.getAttribute('value');
    // Выберите элементы, куда должны быть вставлены значения полей
    let nameСhange = document.querySelector('.profile__title');
    let jobСhange = document.querySelector('.profile__description');
    // Вставьте новые значения с помощью textContent
    nameСhange.textContent = nameInput.value;
    jobСhange.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 
submitBtn.addEventListener('click', toggleModalWindow);