/* Here goes your JS code */

const form = document.querySelector('form');
const popupLogin = document.querySelector('#popup-login');
const showPopupForm = document.querySelector('#show-popup-form');
const closePopupLogin = document.querySelector('#close-popup-login');
const inputEmail = document.querySelector('#input-email');

const handleShowPopupForm = () => {
	console.log('ss');
	popupLogin.classList.add('show');
};

const handleClosePopupLogin = () => {
	popupLogin.classList.remove('show');
};

const handleFormSubmit = e => {
	e.preventDefault();

	console.log('hello');
};

const handleInputEmail = e => {
	console.log(validateEmail(e.target.value));
};

// Event listeners
showPopupForm.addEventListener('click', handleShowPopupForm);
closePopupLogin.addEventListener('click', handleClosePopupLogin);

form.addEventListener('submit', handleFormSubmit);
