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
    nameInput.value;
    jobInput.value;
    nameValue.textContent = nameInput.value;
    jobValue.textContent = jobInput.value;
    popUp.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);


















/*const openPopUp = document.querySelector('.profile-info__edit-button');
const closePopUp = document.querySelector('.popup__close');
const popUp = document.querySelector('.popup');
const popupInput = document.querySelectorAll('.popup__input');
const nameValue = document.querySelector('.profile-info__title');
const jobValue = document.querySelector('.profile-info__subtitle');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_value_name');
const jobInput = document.querySelector('.popup__input_value_job');

openPopUp.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.classList.add('popup_opened');
    popupInput[0].value = nameValue.textContent;
    popupInput[1].value = jobValue.textContent;
});

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('popup_opened');
});

popUpSave.addEventListener('submit', function (e) {
    e.preventDefault();
    let a = document.querySelector('.popup__input_value_name').value;
    let b = document.querySelector('.popup__input_value_job').value;
    document.querySelector('.profile-info__title').innerHTML = a;
    document.querySelector('.profile-info__subtitle').innerHTML = b;
    popUp.classList.remove('popup_opened');
});*/

