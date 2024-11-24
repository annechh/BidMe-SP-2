import { login } from '../../api/auth/loginApi';
import { validateEmail, validatePassword } from '../../utilities/validation';

export async function onLogin(event) {
  event.preventDefault();

  const loginForm = new FormData(event.target);

  const email = loginForm.get('email');
  const password = loginForm.get('password');

  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (!isEmailValid || !isPasswordValid) {
    console.log('Validation failed');
    return;
  }

  await login({ email, password });
}
