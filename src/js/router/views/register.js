import { onRegister } from '../../ui/auth/register';

async function handleRegister() {
  const form = document.forms.register;
  form.addEventListener('submit', onRegister);
}

handleRegister();
