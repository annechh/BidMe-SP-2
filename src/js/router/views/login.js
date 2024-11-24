import { onLogin } from '../../ui/auth/login';
import {
  styleForm,
  styleFormDivWrapper,
  styleInput,
  styleLabel,
  styleLabelInputWrapper,
} from '../../ui/styles/styleForms';

async function handleLogin() {
  styleForm();
  styleLabelInputWrapper();
  styleLabel();
  styleInput();
  styleFormDivWrapper();

  const form = document.forms.login;
  form.addEventListener('submit', onLogin);
}

handleLogin();
