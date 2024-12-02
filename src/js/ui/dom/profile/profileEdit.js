import { updateProfile } from '../../../api/profile/update';
export async function onUpdateProfile(event) {
  event.preventDefault();

  const form = new FormData(event.target);

  const banner = form.get('banner');
  const avatar = form.get('avatar');

  const getForms = {
    banner: banner ? { url: banner } : null,
    avatar: avatar ? { url: avatar } : null,
    bio: form.get('bio'),
  };

  await updateProfile(getForms);
}
