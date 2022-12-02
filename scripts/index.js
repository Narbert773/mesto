const editPopupOpen = document.querySelector('.profile-info__edit-button');
const popupClose = document.querySelectorAll('.popup__close');
const editPopup = document.querySelector('.popup_edit-profile');
const nameValue = document.querySelector('.profile-info__title');
const jobValue = document.querySelector('.profile-info__subtitle');
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_value_name');
const jobInput = formElement.querySelector('.popup__input_value_job');
const addingPopupOpen = document.querySelector('.profile__add-button');
const addingPopup = document.querySelector('.popup_adding-card');
const cardsContainer = document.querySelector('.elements');
const imgPopup = document.querySelector('.popup_large-image');
const imgPopupTitle = document.querySelector('.popup__title');
const imgPopupLarge = document.querySelector('.popup__large-photo');
const addingformElement = document.querySelector('.popup__form_adding-card');
const placeInput = addingformElement.querySelector('.popup__input_value_place');
const linkInput = addingformElement.querySelector('.popup__input_value_link');

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

    const arrayImg = newCard.querySelectorAll('.element__image');
    const arrayTitle = newCard.querySelectorAll('.element__title');

    function openPopupLarge() {
        arrayImg.forEach((element, index) => {
            element.addEventListener('click', (e) => {
                openPopup(imgPopup);
                imgPopupTitle.textContent = arrayTitle[index].textContent;
                increasedImg(e);
            });
        });

        function increasedImg(event) {
            imgPopupLarge.src = event.target.closest('.element__image').src;
        };
    };

    openPopupLarge();

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

addingPopupOpen.addEventListener('click', function (e) {
    e.preventDefault();
    openPopup(addingPopup);
});

editPopupOpen.addEventListener('click', function (e) {
    e.preventDefault();
    openPopup(editPopup);
    nameInput.value = nameValue.textContent;
    jobInput.value = jobValue.textContent;
});

function closePopup(popup) {
    popup.classList.remove('popup_opened');
};

popupClose.forEach((popup) => {
    popup.addEventListener('click', (e) => {
        e.preventDefault();
        closePopup(editPopup);
        closePopup(addingPopup);
        closePopup(imgPopup);
    });
});

function submitEditProfileForm(e) {
    e.preventDefault();
    nameValue.textContent = nameInput.value;
    jobValue.textContent = jobInput.value;
    editPopup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', submitEditProfileForm);

function submitAddingForm(e) {
    e.preventDefault();
    const newCard = {
        name: placeInput.value,
        link: linkInput.value
    };
    renderInitialCards(newCard);
    addingformElement.reset();
    addingPopup.classList.remove('popup_opened');
}

addingformElement.addEventListener('submit', submitAddingForm);