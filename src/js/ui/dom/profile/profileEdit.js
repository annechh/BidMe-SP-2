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

const bannerInput = document.getElementById('banner');
const avatarInput = document.getElementById('avatar');
const bioInput = document.getElementById('bio');

const clearBannerButton = document.getElementById('clearBannerField');
const clearAvatarButton = document.getElementById('clearAvatarField');
const clearBioButton = document.getElementById('clearBioField');

export async function viewProfileData() {
  const userData = getLocalStorage();
  let profileData;

  if (userData) {
    profileData = await readProfileName(userData.name);
    console.log('profileData', profileData);
  }

  if (profileData) {
    bannerInput.value = profileData.profile.banner?.url || '';
    avatarInput.value = profileData.profile.banner?.url || '';
    bioInput.value = profileData.profile.bio || '';

    clearBannerButton.style.display = bannerInput.value ? 'block' : 'none';
    clearAvatarButton.style.display = bannerInput.value ? 'block' : 'none';
    clearBioButton.style.display = bannerInput.value ? 'block' : 'none';
  }
}

bannerInput.addEventListener('input', () => {
  clearBannerButton.style.display = bannerInput.value ? 'block' : 'none';
});
avatarInput.addEventListener('input', () => {
  clearAvatarButton.style.display = avatarInput.value ? 'block' : 'none';
});
bioInput.addEventListener('input', () => {
  clearBioButton.style.display = bioInput.value ? 'block' : 'none';
});

clearBannerButton.addEventListener('click', () => {
  bannerInput.value = '';
  clearBannerButton.style.display = 'none';
});
clearAvatarButton.addEventListener('click', () => {
  avatarInput.value = '';
  clearAvatarButton.style.display = 'none';
});
clearBioButton.addEventListener('click', () => {
  bioInput.value = '';
  clearBioButton.style.display = 'none';
});

const getForm = document.getElementById('formDivWrapper');
const editProfile = document.getElementById('profileEdit');

editProfile.addEventListener('click', () => {
  if (getForm.classList.contains('hidden')) {
    getForm.classList.remove('hidden');
    getForm.classList.add('flex');
  } else {
    getForm.classList.remove('flex');
    getForm.classList.add('hidden');
  }
});
