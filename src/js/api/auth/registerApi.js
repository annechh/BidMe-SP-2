import { LOGIN_PAGE } from '../../utilities/pagePaths';
import { showSuccessMessage } from '../../utilities/validation/displaySuccessMessage';
import { displayMessage } from '../../utilities/validation/displayMessage';
import { API_REGISTER } from '../endpoints';
import { headers } from '../headers';

export async function register({ name, email, password }) {
  try {
    const response = await fetch(API_REGISTER, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.errors?.[0]?.message || 'Registration failed');
    } else {
      displayMessage('#message', 'success', 'Success');

      setTimeout(() => {
        showSuccessMessage();
      }, 1000);

      setTimeout(() => {
        window.location.href = LOGIN_PAGE;
      }, 3500);
      return data;
    }
  } catch (error) {
    displayMessage('#message', 'warning', error.message);
  }
}
