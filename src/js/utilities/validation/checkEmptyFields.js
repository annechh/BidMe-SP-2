export function checkIfEmptyField(fieldValue, errorMessageElement) {
  if (!fieldValue) {
    errorMessageElement.textContent =
      'This field cannot be empty, please fill out.';
    errorMessageElement.classList.remove('hidden');
    return true;
  } else {
    errorMessageElement.textContent = '';
    errorMessageElement.classList.add('hidden');
    return false;
  }
}
