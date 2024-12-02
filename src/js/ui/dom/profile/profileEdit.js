import { readProfileName } from '../../../api/profile/read';
import { updateProfile } from '../../../api/profile/update';
import { getLocalStorage } from '../../../utilities/localStorage';

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

export async function viewProfileData() {
  const userData = getLocalStorage();
  let profileData;

  if (userData) {
    profileData = await readProfileName(userData.name);
    console.log('profileData', profileData);
  }

  if (profileData) {
    document.getElementById('banner').value =
      profileData.profile.banner?.url || '';
    document.getElementById('avatar').value =
      profileData.profile.avatar?.url || '';
    document.getElementById('bio').value = profileData.profile.bio || '';
  }
}
