import { onLogin } from '../../ui/auth/login';
import { formStyle } from '../../ui/styles/styleForms';

async function handleLogin() {
  formStyle();

  const form = document.forms.login;
  form.addEventListener('submit', onLogin);
}

handleLogin();
