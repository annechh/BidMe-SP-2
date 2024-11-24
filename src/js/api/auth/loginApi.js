import { validateEmail, validatePassword } from '../../utilities/validation';
import { API_LOGIN } from '../endpoints';
import { headers } from '../headers';

export async function login({ email, password }) {
  validateEmail();
  validatePassword();
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
      const accessToken = data.data.accessToken;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('userData', JSON.stringify(data.data));

      showLoginSuccess();

      setTimeout(() => {
        hideLoginSuccess();
        window.location.href = '/';
      }, 2500);
      return data;
    }
  } catch (error) {
    alert('Could not log in to user account');
    console.error(error);
  }
}

function showLoginSuccess() {
  const loginForm = document.forms.login;
  const loginSuccess = document.getElementById('loginSuccess');
  if (loginSuccess) {
    loginSuccess.style.display = 'block';
  }
  if (loginForm) {
    loginForm.style.display = 'none';
  }
}

function hideLoginSuccess() {
  const loginSuccess = document.getElementById('loginSuccess');
  if (loginSuccess) {
    loginSuccess.style.display = 'none';
  }
}

hideLoginSuccess();
