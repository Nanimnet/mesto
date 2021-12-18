import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

import "./index.css";

import { initialCards } from "../utils/constants.js";

const editBtn = document.querySelector(".profile__edit-button");

const userInfo = new UserInfo(".profile__title", ".profile__description");

const btnAdd = document.querySelector(".profile__add-button");

const popupWithImage = new PopupWithImage(".popup-image");
popupWithImage.setEventListeners();

function createCard(item) {
  const card = new Card(item.name, item.link, "#cards-template", function () {
    popupWithImage.open(item.link, item.name);
  });
  const cardElement = card.generateCard();
  return cardElement;
}

// класс секция
const section = new Section(
  {
    renderer: (item) => {
      const card = createCard(item);
      section.addItem(card);
    },
    items: initialCards,
  },
  ".cards"
);
section.renderItems();

// окрываем попап с редактированием профиля
const popupWithFormProfile = new PopupWithForm(
  ".popup-profile",
  (event, values) => {
    event.preventDefault();
    userInfo.setUserInfo(
      values["heading-profile"],
      values["subheading-profile"]
    );
    popupWithFormProfile.close();
  }
);

popupWithFormProfile.setEventListeners();

//валидация формы добавления новой карточки
const formsAdd = [...document.querySelectorAll(".popup-add__form")];
const formConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_is-valid",
  errorPrefix: "-error",
  errorClass: "popup__input_is-valid",
};

const formAdd = new FormValidator(formConfig, formsAdd);
formAdd.publicEnableValidation();

//открываем попап с редактированием профиля
editBtn.addEventListener("click", (e) => {
  const info = userInfo.getUserInfo();
  const defaultValues = [
    {
      name: "heading-profile",
      value: info.name,
    },
    {
      name: "subheading-profile",
      value: info.job,
    },
  ];
  Array.from(defaultValues || []).forEach((v) => {
    const input = document
      .querySelector(".popup-profile")
      .querySelector(`input[name="${v.name}"]`);
    if (input) {
      input.value = v.value;
    }
  });
  popupWithFormProfile.open(defaultValues);
});

// открытие попапа с добавлением
const popupWithFormAdd = new PopupWithForm(".popup-add", (event) => {
  event.preventDefault();

  //логика добавления новой карточки на страницу
  const cardValues = popupWithFormAdd._getInputValues();
  section.setInitialArray([
    { name: cardValues["heading-place"], link: cardValues["link-place"] },
  ]);
  section.renderItems();
  popupWithFormAdd.close();
});

popupWithFormAdd.setEventListeners();

btnAdd.addEventListener("click", (e) => {
  popupWithFormAdd.open();
  formAdd.forceSubmitButtonState();
});

// валидация редактирования
const formsEdit = [...document.querySelectorAll(".popup-profile__form")];

const formEdit = new FormValidator(formConfig, formsEdit);

formEdit.publicEnableValidation();
