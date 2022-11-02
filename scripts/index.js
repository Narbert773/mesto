let popupOpen = document.querySelector('.profile-info__edit-button');
let popupClose = document.querySelector('.popup__close');
let popUp = document.querySelector('.popup');
let nameValue = document.querySelector('.profile-info__title');
let jobValue = document.querySelector('.profile-info__subtitle');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_value_name');
let jobInput = formElement.querySelector('.popup__input_value_job');

popupOpen.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.classList.add('popup_opened');
    nameInput.value = nameValue.textContent;
    jobInput.value = jobValue.textContent;
});

popupClose.addEventListener('click', () => {
    popUp.classList.remove('popup_opened');
});

function formSubmitHandler(e) {
    e.preventDefault();
    nameValue.textContent = nameInput.value;
    jobValue.textContent = jobInput.value;
    popUp.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);




















