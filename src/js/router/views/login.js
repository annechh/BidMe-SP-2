import { onLogin } from '../../ui/auth/login';

async function handleLogin() {
  const form = document.forms.login;
  form.addEventListener('submit', onLogin);
}

handleLogin();
