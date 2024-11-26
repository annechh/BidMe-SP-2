import { setLocalStorage } from '../../utilities/localStorage';
import { HOME_PAGE } from '../../utilities/pagePaths';
import { showSuccessMessage } from '../../utilities/validation';
import { API_LOGIN } from '../endpoints';
import { headers } from '../headers';

export async function login({ email, password }) {
  try {
    const response = await fetch(API_LOGIN, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      alert('Failed to login, wrong email or password');
    } else {
      const data = await response.json();
      setLocalStorage({
        accessToken: data.data.accessToken,
        userData: JSON.stringify(data.data),
      });

      showSuccessMessage();

      setTimeout(() => {
        window.location.href = HOME_PAGE;
      }, 2500);
      return data;
    }
  } catch (error) {
    alert('Could not log in to user account');
    console.error(error);
  }
}
