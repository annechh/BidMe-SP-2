import { onRegister } from '../../ui/auth/register';
import {
  styleForm,
  styleFormDivWrapper,
  styleInput,
  styleLabel,
  styleLabelInputWrapper,
} from '../../ui/styles/styleForms';

async function handleRegister() {
  styleForm();
  styleLabelInputWrapper();
  styleLabel();
  styleInput();
  styleFormDivWrapper();

  const form = document.forms.register;
  form.addEventListener('submit', onRegister);
}

handleRegister();
