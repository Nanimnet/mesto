import { apiUserData } from "../utils/apiUserData.js";

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

import "../pages/index.css";

const profileAvatar = document.querySelector(".profile__avatar");

const editProfileInputName = document.querySelector(
  'input[name="heading-profile"]'
);
const editProfileInputDescription = document.querySelector(
  'input[name="subheading-profile'
);

let currentUser = null;

const userInfo = new UserInfo({
  profileNameSelector: ".profile__title",
  profileDescriptionSelector: ".profile__description",
});

const section = new Section(
  {
    renderer: (data) => section.addItem(returnCard(data)),
  },
  ".cards"
);

const api = new Api({
  baseUrl: `${apiUserData.ariBaseUrl}/${apiUserData.userGroupNumber}`,
  headers: {
    authorization: apiUserData.userAuthorizationToken,
    "Content-Type": apiUserData.apiContentType,
  },
});

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_is-valid",
  inputErrorClass: "popup__input_is-valid",
  errorClass: "error",
};

const addCardFormValidator = new FormValidator(
  validationConfig,
  document.forms.editMesto
);

const editProfileFormValidator = new FormValidator(
  validationConfig,
  document.forms.editForm
);

const changeAvatarFormValidator = new FormValidator(
  validationConfig,
  document.forms.updateAvatar
);


const addNewCardButton = document.querySelector(".profile__add-button");

const popupEditProfileEditButton = document.querySelector(
  ".profile__edit-button"
);

const buttonChangeAvatarProfile = document.querySelector(
  ".profile__avatar"
);



const popupAddCart = new PopupWithForm({
  popupSelector: ".popup-add",
  submitFormCb: (formData) => {
    changeButtonTextWhenDoing(popupAddCart.buttonSubmit);
    api
      .addNewCard({
        cardName: formData["heading-place"],
        cardLink: formData["link-place"],
      })
      .then((newCardData) => {
        section.addItem(returnCard(newCardData));
        popupAddCart.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupAddCart.buttonSubmit.textContent = "Создать";
      });
  },
});

const popupEditForm = new PopupWithForm({
  popupSelector: ".popup-profile",

  submitFormCb: (formData) => {
    changeButtonTextWhenDoing(popupEditForm.buttonSubmit);

    api
      .editUserInfo({
        newName: formData["heading-profile"],
        newAbout: formData["subheading-profile"],
      })
      .then((user) => {
        userInfo.setUserInfo(user["name"], user["about"]);
        popupEditForm.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupEditForm.buttonSubmit.textContent = "Сохранить";
      });
  },
});

const popupZoom = new PopupWithImage(".popup-image");

const popupChangeAvatar = new PopupWithForm({
  popupSelector: ".popup-avatar",

  submitFormCb: (formData) => {
    changeButtonTextWhenDoing(popupChangeAvatar.buttonSubmit);

    api
      .changeAvatar({ newAvatarLink: formData["avatar-profile"] })
      .then((data) => {
        profileAvatar.src = data.avatar;
        popupChangeAvatar.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupChangeAvatar.buttonSubmit.textContent = "Сохранить";
      });
  },
});

let popupAskDeleteCard = null;



// function makeButtonChangeAvatarProfileVisible() {
//   buttonChangeAvatarProfile.style.visibility = "visible";
//   buttonChangeAvatarProfile.style.opacity = "1";
//   buttonChangeAvatarProfile.addEventListener(
//     "mouseout"
//     makeButtonChangeAvatarProfileUnvisible
//   );
// }

// function makeButtonChangeAvatarProfileUnvisible() {
//   buttonChangeAvatarProfile.style.visibility = "hidden";
//   buttonChangeAvatarProfile.style.opacity = "0";
//   buttonChangeAvatarProfile.removeEventListener(
//     "mouseout",
//     makeButtonChangeAvatarProfileUnvisible
//   );
// }

function changeButtonTextWhenDoing(button) {
  button.textContent = "Сохранение...";
}

function returnCard(data) {
  const cardItem = new Card({
    cardData: data,
    handleCardClick: handleCardClick,
    cardTemplateClassSelector: "#cards-template",
    handleDeleteIconClick: () => handleDeleteIconClick(cardItem),
    currentOwner: currentUser,

    handlerLikeAdd: () => {
      api
        .addLike({ cardId: data._id })
        .then((res) => {
          cardItem.addLike();
          cardItem.countHeartVoices(res.likes.length);
        })
        .catch((err) => console.log(err));
    },

    handlerLikeRemove: () => {
      api
        .removeLike({ cardId: data._id })
        .then((res) => {
          cardItem.removeLike();
          cardItem.countHeartVoices(res.likes.length);
        })
        .catch((err) => console.log(err));
    },
  });

  return cardItem.createCard();
}

function handleDeleteIconClick(cardItem) {
  popupAskDeleteCard = new PopupWithForm({
    popupSelector: ".popup-delete",
    submitFormCb: () => {
      api
        .deleteCard({ cardId: cardItem.getCardId() })
        .then(() => {
          cardItem.remove();
          popupAskDeleteCard.close();
        })
        .catch((err) => console.log(err));
    },
  });

  popupAskDeleteCard.setEventListeners();
  popupAskDeleteCard.open();
}

function handleAddNewCardButton() {
  addCardFormValidator.clearAllFormErrors();
  addCardFormValidator.makeButtonDisable();
  popupAddCart.open();
}

function getProfileData(userInfo) {
  const { profileName, profileDescription } = userInfo.getUserInfo();

  editProfileInputName.value = profileName;
  editProfileInputDescription.value = profileDescription;
}

function dispatchInputEvent(form) {
  const inputs = form.querySelectorAll(".popup__input");

  if (inputs.length > 0)
    inputs[0].dispatchEvent(
      new Event("input", { bubbles: true, cancelable: true })
    );
}

function handleCardClick(name, link) {
  popupZoom.open(name, link);
}

//функционал
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([user, cardsData]) => {
    currentUser = user;
    userInfo.setUserInfo(user["name"], user["about"]);
    profileAvatar.src = user["avatar"];

    section.renderItems(cardsData.reverse());
  })
  .catch((err) => console.log(err));


popupAddCart.setEventListeners();
popupEditForm.setEventListeners();
popupZoom.setEventListeners();
popupChangeAvatar.setEventListeners();



addCardFormValidator.enableValidation();
editProfileFormValidator.enableValidation();
changeAvatarFormValidator.enableValidation();


addNewCardButton.addEventListener("click", handleAddNewCardButton);

buttonChangeAvatarProfile.addEventListener("click", () => {
  changeAvatarFormValidator.clearAllFormErrors();
  changeAvatarFormValidator.makeButtonDisable();
  popupChangeAvatar.open();
});

popupEditProfileEditButton.addEventListener("click", () => {
  editProfileFormValidator.clearAllFormErrors();
  editProfileFormValidator.makeButtonDisable();

  getProfileData(userInfo);

  popupEditForm.open();

  dispatchInputEvent(popupEditForm.form);
});

// profileAvatar.addEventListener(
//   "mouseover",
//   makeButtonChangeAvatarProfileVisible
// );
