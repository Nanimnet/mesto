(()=>{"use strict";function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function t(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?e(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function n(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"selectors",null),i(this,"formElementList",null),i(this,"form",null),this.selectors=t,this.formElementList=r,this.form=n(this.formElementList)[0]}var r,a;return r=e,(a=[{key:"publicEnableValidation",value:function(){this._enableValidation(this.selectors)}},{key:"_enableValidation",value:function(){this._addListenersToForms()}},{key:"_addListenersToForms",value:function(){var e=this,t=this.selectors;Array.from(this.form.querySelectorAll(t.inputSelector)).forEach((function(n){e._addListenersToInput(n,t)})),this.form.addEventListener("submit",(function(n){e._handleSubmit(n,t)})),this.form.addEventListener("input",(function(n){e._handleFormInput(n,t)})),this._setSubmitButtonState(this.form,t)}},{key:"_handleFormInput",value:function(e,t){e.currentTarget,this._setSubmitButtonState(this.form,t)}},{key:"submitButtonState",value:function(){var e=this;form.forEach((function(){e._setSubmitButtonState(e.form,e.selectors)}))}},{key:"_setSubmitButtonState",value:function(e,t){var n=e.querySelector(t.submitButtonSelector);n.disabled=!e.checkValidity(),n.classList.toggle(t.inactiveButtonClass,!e.checkValidity())}},{key:"_handleSubmit",value:function(e,r){e.preventDefault(),n(e.target.querySelectorAll(r.inputSelector)).reduce((function(e,n){return t(t({},e),{},i({},n.name,n.value))}),{})}},{key:"_addListenersToInput",value:function(e,t){var n=this;e.addEventListener("input",(function(e){n._handleFieldValidation(e,t)}))}},{key:"_handleFieldValidation",value:function(e,t){var n=e.target;document.querySelector("#".concat(n.id).concat(t.errorPrefix)).textContent=n.validationMessage,n.classList.toggle(t.errorClass,!n.validity.valid)}}])&&o(r.prototype,a),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.link=n,this.selectorTemlate=r,this.clickHandler=o}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this.selectorTemlate).content.querySelector(".card").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".card__delete").addEventListener("click",(function(e){e.target.closest(".card").remove()})),this._element.querySelector(".card__like").addEventListener("click",(function(t){e._handleClickLike()})),this._element.querySelector(".card__photo").addEventListener("click",(function(t){e._openImage()}))}},{key:"_handleClickLike",value:function(){this._element.querySelector(".card__like").classList.toggle("card__like_active")}},{key:"_openImage",value:function(){this.clickHandler()}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._element.querySelector(".card__photo").setAttribute("src",this.link),this._element.querySelector(".card__photo").setAttribute("alt",this.name),this._element.querySelector(".card__title").textContent=this.name,this._element}}])&&c(t.prototype,n),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n){var r=t.renderer,o=t.items;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=o,this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"setInitialArray",value:function(e){this._initialArray=e}},{key:"renderItems",value:function(){var e=this;this._initialArray.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&l(t.prototype,n),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selector=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._selector.classList.add("popup_is-opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._selector.classList.remove("popup_is-opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._selector.querySelector(".popup__close").addEventListener("click",(function(){return e.close()})),this._selector.addEventListener("click",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&f(t.prototype,n),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=h(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function b(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"open",value:function(e,t){var n=document.querySelector(".popup-image"),r=document.querySelector(".popup-image__img"),o=document.querySelector(".popup-image__description");r.setAttribute("src",e),r.setAttribute("alt",t),o.textContent=t,m(_(a.prototype),"open",this).call(this,n)}}])&&d(t.prototype,n),a}(p);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}function j(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._callBack=t,n._formElement=n._selector.querySelector(".popup__form"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return Array.from(this._formElement.querySelectorAll(".popup__input")).map((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;E(L(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){e._callBack(t,e._getInputValues())}))}},{key:"close",value:function(){E(L(a.prototype),"close",this).call(this),this._formElement.reset()}}])&&S(t.prototype,n),a}(p);function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(t),this._jobElement=document.querySelector(n)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,job:this._jobElement.textContent}}},{key:"setUserInfo",value:function(e,t){this._nameElement.textContent=e,this._jobElement.textContent=t}}])&&A(t.prototype,n),e}();function C(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var T=document.querySelector(".profile__edit-button"),x=new q(".profile__title",".profile__description"),R=document.querySelector(".profile__add-button"),B=new g(".popup-image");function D(e){return new u(e.name,e.link,"#cards-template",(function(){B.open(e.link,e.name)})).generateCard()}B.setEventListeners();var V=new s({renderer:function(e){var t=D(e);V.addItem(t)},items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}]},".cards");V.renderItems();var F=new P(".popup-profile",(function(e,t){e.preventDefault(),x.setUserInfo(t["heading-profile"],t["subheading-profile"]),F.close()}));F.setEventListeners();var U={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_is-valid",errorPrefix:"-error",errorClass:"popup__input_is-valid"},M=new a(U,C(document.querySelectorAll(".popup-add__form")));M.publicEnableValidation(),T.addEventListener("click",(function(e){var t=x.getUserInfo(),n=[{name:"heading-profile",value:t.name},{name:"subheading-profile",value:t.job}];Array.from(n||[]).forEach((function(e){var t=document.querySelector(".popup-profile").querySelector('input[name="'.concat(e.name,'"]'));t&&(t.value=e.value)})),F.open(n)}));var H=new P(".popup-add",(function(e,t){e.preventDefault();var n=t;V.addItem(D({name:n["heading-place"],link:n["link-place"]})),H.close()}));H.setEventListeners(),R.addEventListener("click",(function(e){H.open(),M.submitButtonState()})),new a(U,C(document.querySelectorAll(".popup-profile__form"))).publicEnableValidation()})();