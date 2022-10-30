const openPopUp = document.querySelector('.profile-info__link');
const closePopUp = document.querySelector('.popup__close');
const popUp = document.querySelector('.popup');
const popupInput = document.querySelectorAll('.popup__input');
const nameValue = document.querySelector('.profile-info__title');
const jobValue = document.querySelector('.profile-info__subtitle');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const popUpSave = document.querySelector('.popup__save');

openPopUp.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.classList.add('popup_opened');
    popupInput[0].value = nameValue.textContent;
    popupInput[1].value = jobValue.textContent;
});

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('popup_opened');
});

popUpSave.addEventListener('click', function (e) {
    e.preventDefault();
    let a = document.querySelector('.popup__input_name').value;
    let b = document.querySelector('.popup__input_job').value;
    document.querySelector('.profile-info__title').innerHTML = a;
    document.querySelector('.profile-info__subtitle').innerHTML = b;
    popUp.classList.remove('popup_opened');
});

