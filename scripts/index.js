const popupOpen = document.querySelector('.profile-info__edit-button');
const popupClose = document.querySelector('.popup__close');
const popUp = document.querySelector('.popup');
const nameValue = document.querySelector('.profile-info__title');
const jobValue = document.querySelector('.profile-info__subtitle');
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_value_name');
const jobInput = formElement.querySelector('.popup__input_value_job');
const AddingPopupOpen = document.querySelector('.profile__add-button');
const AddingPopupClose = document.querySelector('.popup-adding__close');
const addingPopup = document.querySelector('.popup-adding');
const CardsContainer = document.querySelector('.elements');
const AddingformElement = document.querySelector('.popup-adding__form');
const placeInput = AddingformElement.querySelector('.popup-adding__input_value_place');
const linkInput = AddingformElement.querySelector('.popup-adding__input_value_link');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const cardTemplate = document.querySelector('#card-template').content.querySelector('.element');

const handleDeleteCard = (event) => {
    event.target.closest('.element').remove();
};

const handleLikeCard = (event) => {
    event.target.classList.toggle('element__like-button_active');
};

const generateCard = (dataCard) => {
    const newCard = cardTemplate.cloneNode(true);
    const title = newCard.querySelector('.element__title');
    title.textContent = dataCard.name;
    const link = newCard.querySelector('.element__image');
    link.src = dataCard.link;

    const trashBtn = newCard.querySelector('.element__trash-button');
    trashBtn.addEventListener('click', handleDeleteCard);

    const likeBtn = newCard.querySelector('.element__like-button');
    likeBtn.addEventListener('click', handleLikeCard);

    return newCard;
};

const renderCard = (dataCard) => {
    CardsContainer.prepend(generateCard(dataCard));
};

initialCards.forEach((dataCard) => {
    renderCard(dataCard);
});

AddingPopupOpen.addEventListener('click', function (e) {
    e.preventDefault();
    addingPopup.classList.add('popup-adding_opened');
});

AddingPopupClose.addEventListener('click', () => {
    addingPopup.classList.remove('popup-adding_opened');
});

function AddingformSubmitHandler(e) {
    e.preventDefault();
    const newCard = {
        name: placeInput.value,
        link: linkInput.value
    };
    renderCard(newCard);
    openPopupLarge();
    addingPopup.classList.remove('popup-adding_opened');
}

AddingformElement.addEventListener('submit', AddingformSubmitHandler);

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

function openPopupLarge() {
    const popupImg = document.querySelector('.popup-image');
    const arrayImg = document.querySelectorAll('.element__image');
    const popupImgClose = document.querySelector('.popup-image__close');
    const popupImgLarge = document.querySelector('.popup-image__large-photo');
    const arrayTitle = document.querySelectorAll('.element__title');
    const popupImgTitle = document.querySelector('.popup-image__title');


    arrayImg.forEach((element, index) => {
        element.addEventListener('click', (e) => {
            popupImg.classList.add('popup-image_opened');
            popupImgTitle.textContent = arrayTitle[index].textContent;
            increasedImg(e);
        });
    });

    popupImgClose.addEventListener('click', () => {
        popupImg.classList.remove('popup-image_opened');
    });

    function increasedImg(event) {
        popupImgLarge.src = event.target.closest('.element__image').src;
    }
}

openPopupLarge();



















































































