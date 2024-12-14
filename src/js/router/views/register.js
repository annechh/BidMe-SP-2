import { onRegister } from '../../ui/auth/register';
import { formStyle } from '../../ui/styles/styleForms';

async function handleRegister() {
  formStyle();

  const form = document.forms.register;
  form.addEventListener('submit', onRegister);
}

handleRegister();
