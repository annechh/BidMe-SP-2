import { LOGIN_PAGE } from '../../utilities/pagePaths';
import { showSuccessMessage } from '../../utilities/validation';
import { API_REGISTER } from '../endpoints';
import { headers } from '../headers';

export async function register({ name, email, password }) {
  try {
    const response = await fetch(API_REGISTER, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      alert('The account name and/or email already exists. Please try again');
      return;
    } else {
      const data = await response.json();
      console.log('register data', data);

      showSuccessMessage();

      setTimeout(() => {
        window.location.href = LOGIN_PAGE;
      }, 2500);
      return data;
    }
  } catch (error) {
    alert('Could not register new user account');
    console.error(error);
  }
}
