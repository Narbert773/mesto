function showInputError(formInput, formElement, config) {
    const errorElement = formElement.querySelector(`.${formInput.id}-error`);

    errorElement.classList.add(config.errorClass);
    errorElement.textContent = formInput.validationMessage;
    formInput.classList.add(config.inputErrorClass);
}

function hideInputError(formInput, formElement, config) {
    const errorElement = formElement.querySelector(`.${formInput.id}-error`);

    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
    formInput.classList.remove(config.inputErrorClass);
}

function checkInputValidity(formInput, formElement, config) {
    if (!formInput.validity.valid) {
        showInputError(formInput, formElement, config);
    } else {
        hideInputError(formInput, formElement, config);
    }
}

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => !inputElement.validity.valid);
}

function toggleButtonState(inputList, buttonElement, config) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(config.inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(config.inactiveButtonClass);
        buttonElement.disabled = false;
    }
}

function setEventListeners(formElement, config) {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);

    toggleButtonState(inputList, buttonElement, config);

    inputList.forEach((formInput) => {
        formInput.addEventListener('input', () => {
            checkInputValidity(formInput, formElement, config);
            toggleButtonState(inputList, buttonElement, config);
        });
    });
}

function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement, config);
    });
}

function resetFormError(formElement, config) {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);

    toggleButtonState(inputList, buttonElement, config);

    inputList.forEach((formInput) => {
        hideInputError(formElement, formInput, config);
    });
};