const signUpFormCon = document.querySelector('#sign-up-form-con');
const mainForm = document.querySelector('#main__form');
const emailInput = document.querySelector('#email-input');
const submitInput = document.querySelector('#submit-input');
const emailMsg = document.querySelector('.email-message');

const acknowledgementCon = document.querySelector('#acknowledgement-con');
const emailSpan = document.querySelector('#email-span');
const dismissButton = document.querySelector('#dismiss-button');

let email;

const checkInputValidity = () => {
  if (!emailInput.checkValidity() && emailInput.value != '') emailMsg.classList.remove('hidden');
  else if (emailInput.checkValidity()) emailMsg.classList.add('hidden');
  else if (emailInput.value == '') emailMsg.classList.add('hidden');
}

submitInput.addEventListener('click', () => checkInputValidity());

emailInput.addEventListener('keydown', e => {
  if (!e.key) return;
  setTimeout(() => checkInputValidity(), 1000);
});

emailInput.addEventListener('input', () => checkInputValidity());

mainForm.addEventListener('submit', e => {
  e.preventDefault();

  email = emailInput.value;

  signUpFormCon.style.display = "none";
  acknowledgementCon.style.display = "flex";

  emailSpan.innerText = email;
});

dismissButton.addEventListener('click', () => {
  signUpFormCon.style.display = "flex";
  acknowledgementCon.style.display = "none";
  emailInput.value = '';

  checkInputValidity();
});