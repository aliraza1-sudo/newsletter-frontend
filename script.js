const form = document.querySelector('.form');
const userEmail = document.querySelector('#user-email');
const invalidEffect = document.querySelector('.invalid');
const errorMessage = document.querySelector('.error-message');
const successMsg = document.querySelector('.success-message');
const formContainer = document.querySelector('.form-container');
const dismissBtn = document.querySelector('.dismiss-btn');

// form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  errorMessage.innerHTML = '';
  if (!userEmail.value.trim() || !isValidEmail(userEmail.value)) {
    errorMessage.innerHTML = 'Enter a valid email address';
    userEmail.style.backgroundColor = 'pink';
    userEmail.style.border = '2px solid red';
    userEmail.style.color = 'red';
  } else {
    // display success message
    successMsg.style.display = 'flex';
    formContainer.style.display = 'none';
  }
});

// check validation of email
function isValidEmail(userEmail) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userEmail);
}

// reset error effects when user makes any change
userEmail.addEventListener('input', () => {
  errorMessage.innerHTML = '';
  userEmail.style.backgroundColor = '';
  userEmail.style.border = '';
  userEmail.style.color = '';
});

// close success message
dismissBtn.addEventListener('click', () => {
  successMsg.style.display = 'none';
  formContainer.style.display = 'flex';
  userEmail.value = '';
});
