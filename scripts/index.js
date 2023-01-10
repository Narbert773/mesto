// Переменные

const nameValue = document.querySelector('.profile-info__title');
const jobValue = document.querySelector('.profile-info__subtitle');
const cardsContainer = document.querySelector('.elements');
const imgPopupTitle = document.querySelector('.popup__title');
const imgPopupLarge = document.querySelector('.popup__large-photo');

const overlay = document.querySelectorAll('.popup');
const popupContainer = document.querySelectorAll('.popup__container');
const popupContainerLargePhoto = document.querySelector('.popup__photo-container');
const formElement = document.querySelector('.popup__form');
const formInput = formElement.querySelector('.popup__input');

const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddCard = document.querySelector('.popup_adding-card');
const imgPopup = document.querySelector('.popup_large-image');

const buttonOpenEditProfileForm = document.querySelector('.profile-info__edit-button');
const buttonOpenAddCardForm = document.querySelector('.profile__add-button');
const buttonsClosePopup = document.querySelectorAll('.popup__close');

const formEditProfile = document.querySelector('.popup__form_edit-profile');
const nameInput = formEditProfile.querySelector('.popup__input_value_name');
const jobInput = formEditProfile.querySelector('.popup__input_value_job');

const formAddCard = document.querySelector('.popup__form_adding-card');
const placeInput = formAddCard.querySelector('.popup__input_value_place');
const linkInput = formAddCard.querySelector('.popup__input_value_link');

const KEY_ESC = 27;

const cardTemplate = document.querySelector('#card-template').content.querySelector('.element');

// Функции

const handleDeleteCard = (event) => {
    event.target.closest('.element').remove();
};

const handleLikeCard = (event) => {
    event.target.classList.toggle('element__like-button_active');
};

const generateCard = (dataCard) => {
    const newCard = cardTemplate.cloneNode('true');
    const title = newCard.querySelector('.element__title');
    title.textContent = dataCard.name;
    const link = newCard.querySelector('.element__image');
    link.src = dataCard.link;
    link.alt = title.textContent;

    link.addEventListener('click', () => {
        openPopup(imgPopup);
        imgPopupTitle.textContent = title.textContent;
        imgPopupLarge.src = dataCard.link;
        link.alt = title.textContent;
    });

    const trashBtn = newCard.querySelector('.element__trash-button');
    trashBtn.addEventListener('click', handleDeleteCard);

    const likeBtn = newCard.querySelector('.element__like-button');
    likeBtn.addEventListener('click', handleLikeCard);

    return newCard;
};

const renderInitialCards = (dataCard) => {
    cardsContainer.prepend(generateCard(dataCard));
};

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', handleEscClose);
    popup.addEventListener('click', handleOverlayClick);
};

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscClose);
    popup.removeEventListener('click', handleOverlayClick);
};

function submitEditProfileForm(e) {
    e.preventDefault();
    nameValue.textContent = nameInput.value;
    jobValue.textContent = jobInput.value;
    closePopup(popupEditProfile);
}

function submitAddingForm(e) {
    e.preventDefault();
    const newCard = {
        name: placeInput.value,
        link: linkInput.value
    };
    renderInitialCards(newCard);
    formAddCard.reset();
    closePopup(popupAddCard);
}

function handleEscClose(e) {
    if (e.keyCode === KEY_ESC) {
        const popup = document.querySelector('.popup_opened');
        closePopup(popup);
    }
}

function handleOverlayClick(e) {
    const popup = e.currentTarget;
    if (popup === e.target) {
        closePopup(popup);
    }
}

// Обработчики и методы

initialCards.forEach((dataCard) => {
    renderInitialCards(dataCard);
});

buttonOpenAddCardForm.addEventListener('click', function (e) {
    e.preventDefault();
    openPopup(popupAddCard);
    resetFormError(formAddCard, validationConfig);
});


buttonOpenEditProfileForm.addEventListener('click', function (e) {
    e.preventDefault();
    openPopup(popupEditProfile);
    nameInput.value = nameValue.textContent;
    jobInput.value = jobValue.textContent;
    resetFormError(formEditProfile, validationConfig);
    enableValidation(validationConfig);
});

buttonsClosePopup.forEach((button) => {
    const popup = button.parentElement.parentElement;
    button.addEventListener('click', (e) => {
        e.preventDefault();
        closePopup(popup);
        formAddCard.reset();
    });
});

formEditProfile.addEventListener('submit', submitEditProfileForm);

formAddCard.addEventListener('submit', submitAddingForm);

enableValidation(validationConfig);