import { login } from '../../api/auth/loginApi';
import {
  validateEmail,
  validatePassword,
} from '../../utilities/validation/validateUser';

export async function onLogin(event) {
  event.preventDefault();

  const loginForm = new FormData(event.target);

  const email = loginForm.get('email');
  const password = loginForm.get('password');

  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (!isEmailValid || !isPasswordValid) {
    return;
  }

  await login({ email, password });
}
