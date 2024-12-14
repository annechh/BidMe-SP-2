import { setLocalStorage } from '../../utilities/localStorage';
import { HOME_PAGE } from '../../utilities/pagePaths';
import { showSuccessMessage } from '../../utilities/validation/displaySuccessMessage';
import { displayMessage } from '../../utilities/validation/displayMessage';
import { API_LOGIN } from '../endpoints';
import { headers } from '../headers';

export async function login({ email, password }) {
  try {
    const response = await fetch(API_LOGIN, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.errors?.[0]?.message || 'Login failed');
    } else {
      setLocalStorage({
        accessToken: data.data.accessToken,
        userData: JSON.stringify(data.data),
      });

      displayMessage('#message', 'success', 'Success');

      setTimeout(() => {
        showSuccessMessage();
      }, 1000);

      setTimeout(() => {
        window.location.href = HOME_PAGE;
      }, 3500);
      return data;
    }
  } catch (error) {
    displayMessage('#message', 'warning', error.message);
  }
}
