const openPopUp = document.getElementById('popup__open');
const closePopUp = document.getElementById('popup__close');
const popUp = document.getElementById('popup');

openPopUp.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})