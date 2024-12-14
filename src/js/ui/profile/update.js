import { updateProfile } from '../../api/profile/update';
import { checkIfEmptyField } from '../../utilities/validation/checkEmptyFields';

export async function onUpdateProfile(event) {
  event.preventDefault();

  const form = new FormData(event.target);

  const fields = document.querySelectorAll('.input-field');
  let isValid = true;

  fields.forEach((field) => {
    const errorMessage = field.nextElementSibling.nextElementSibling;
    if (checkIfEmptyField(field.value, errorMessage)) {
      isValid = false;
    }
  });

  const banner = form.get('banner');
  const avatar = form.get('avatar');
  const bio = form.get('bio');

  const getForms = {
    banner: banner ? { url: banner } : null,
    avatar: avatar ? { url: avatar } : null,
    bio: bio,
  };

  if (!isValid) {
    return;
  }

  await updateProfile(getForms);
}
