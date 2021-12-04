export default class FormValidator {
    selectors = null;
    formElementList = null;

    constructor(obj, formElementList){
      this.selectors = obj;
      this.formElementList = formElementList;
    }
    
    publicEnableValidation() {
      this._enableValidation(this.selectors);
    }
     
    _enableValidation(obj) {
    //   const forms = [...document.querySelectorAll(obj.formSelector)];
      const forms = [...this.formElementList];
      forms.forEach((value) => {
       this._addListenersToForms(value, obj);
      })
    }
    
    _addListenersToForms(form, obj) {
      const inputs = Array.from(form.querySelectorAll(obj.inputSelector));
    
      inputs.forEach((value) => {
        this._addListenersToInput(value, obj);
      })
    
      form.addEventListener('submit', (e) =>{
        this._handleSubmit(e, obj);
      });
      form.addEventListener('input', (e) =>{
        this._handleFormInput(e, obj);
      });
    
      this._setSubmitButtonState(form, obj)
    };
    
    _handleFormInput(event, obj) {
      const {currentTarget: form} = event;
    
      this._setSubmitButtonState(form, obj)
    };
    
    _setSubmitButtonState(form, obj) {
      const button = form.querySelector(obj.submitButtonSelector);
    
      button.disabled = !form.checkValidity();
      button.classList.toggle(obj.inactiveButtonClass, !form.checkValidity())
    }
    
    _handleSubmit(event, obj) {
      event.preventDefault();
    
      const form = event.target;
      const data = [...form.querySelectorAll(obj.inputSelector)].reduce(
        (sum, input) => ({
          ...sum,
          [input.name]: input.value,
        }),
        {},
      );
      
    }
    
    _addListenersToInput(input, obj) {
      input.addEventListener('input', (e) =>{
        this._handleFieldValidation(e, obj);
      })
    };
    
    _handleFieldValidation(event, obj) {
    
      const element = event.target;
      const errorContainer = document.querySelector(`#${element.id}${obj.errorPrefix}`);
    
      errorContainer.textContent = element.validationMessage; 
    
      element.classList.toggle (
        obj.errorClass,
        !element.validity.valid,
      );
    }
  
  }