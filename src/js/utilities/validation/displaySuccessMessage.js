export function showSuccessMessage() {
  const hideTitleBox = document.getElementById('hideTitleBox');

  const loginForm = document.forms.login;
  const loginSuccess = document.getElementById('loginSuccess');

  const registerForm = document.forms.register;
  const registerSuccess = document.getElementById('registerSuccess');

  const createListingForm = document.forms.create;
  const createSuccess = document.getElementById('createSuccess');

  if (loginSuccess) {
    loginSuccess.style.display = 'block';
  }
  if (registerSuccess) {
    registerSuccess.style.display = 'block';
  }
  if (createSuccess) {
    createSuccess.style.display = 'block';
  }

  if (loginForm) {
    loginForm.style.display = 'none';
    hideTitleBox.style.display = 'none';
  }
  if (registerForm) {
    registerForm.style.display = 'none';
    hideTitleBox.style.display = 'none';
  }
  if (createListingForm) {
    createListingForm.style.display = 'none';
    hideTitleBox.style.display = 'none';
  }
}
