const buttonsClosePopup = document.querySelectorAll('.popup__close');
const buttonOpenEditProfileForm = document.querySelector('.profile-info__edit-button');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const nameValue = document.querySelector('.profile-info__title');
const jobValue = document.querySelector('.profile-info__subtitle');
const formEditProfile = document.querySelector('.popup__form');
const nameInput = formEditProfile.querySelector('.popup__input_value_name');
const jobInput = formEditProfile.querySelector('.popup__input_value_job');
const buttonOpenAddCardForm = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_adding-card');
const cardsContainer = document.querySelector('.elements');
const imgPopup = document.querySelector('.popup_large-image');
const imgPopupTitle = document.querySelector('.popup__title');
const imgPopupLarge = document.querySelector('.popup__large-photo');
const formAddCard = document.querySelector('.popup__form_adding-card');
const placeInput = formAddCard.querySelector('.popup__input_value_place');
const linkInput = formAddCard.querySelector('.popup__input_value_link');

const cardTemplate = document.querySelector('#card-template').content.querySelector('.element');

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

initialCards.forEach((dataCard) => {
    renderInitialCards(dataCard);
});

function openPopup(popup) {
    popup.classList.add('popup_opened');
};

buttonOpenAddCardForm.addEventListener('click', function (e) {
    e.preventDefault();
    openPopup(popupAddCard);
});

buttonOpenEditProfileForm.addEventListener('click', function (e) {
    e.preventDefault();
    openPopup(popupEditProfile);
    nameInput.value = nameValue.textContent;
    jobInput.value = jobValue.textContent;
});

function closePopup(popup) {
    popup.classList.remove('popup_opened');
};

buttonsClosePopup.forEach((button) => {
    console.log(button);
    const popup = button.parentElement.parentElement;
    button.addEventListener('click', (e) => {
        e.preventDefault();
        closePopup(popup);
    });
});

function submitEditProfileForm(e) {
    e.preventDefault();
    nameValue.textContent = nameInput.value;
    jobValue.textContent = jobInput.value;
    closePopup(popupEditProfile);
}

formEditProfile.addEventListener('submit', submitEditProfileForm);

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

formAddCard.addEventListener('submit', submitAddingForm);