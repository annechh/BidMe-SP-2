import { register } from '../../api/auth/registerApi';
import {
  validateEmail,
  validateName,
  validatePassword,
} from '../../utilities/validation/validateUser';

export async function onRegister(event) {
  event.preventDefault();

  const registerForm = new FormData(event.target);

  const name = registerForm.get('name');
  const email = registerForm.get('email');
  const password = registerForm.get('password');

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (!isNameValid || !isEmailValid || !isPasswordValid) {
    console.log('Validation failed');
    return;
  }

  await register({ name, email, password });
}
