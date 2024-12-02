import { readProfileName } from '../../../api/profile/read';
import { getLocalStorage } from '../../../utilities/localStorage';

const bannerInput = document.getElementById('banner');
const avatarInput = document.getElementById('avatar');
const bioInput = document.getElementById('bio');

const clearBannerButton = document.getElementById('clearBannerField');
const clearAvatarButton = document.getElementById('clearAvatarField');
const clearBioButton = document.getElementById('clearBioField');

const previewBanner = document.getElementById('profileBanner');
const previewAvatar = document.getElementById('profileAvatar');

export async function viewProfileData(profileData) {
  const userData = getLocalStorage();

  if (userData) {
    profileData = await readProfileName(userData.name);
    console.log('profileData', profileData);
  }

  if (profileData) {
    bannerInput.value = profileData.profile.banner?.url || '';
    avatarInput.value = profileData.profile.avatar?.url || '';
    bioInput.value = profileData.profile.bio || '';

    clearBannerButton.style.display = bannerInput.value ? 'block' : 'none';
    clearAvatarButton.style.display = avatarInput.value ? 'block' : 'none';
    clearBioButton.style.display = bioInput.value ? 'block' : 'none';

    previewBanner.src = profileData.profile.banner?.url || '';
    previewAvatar.src = profileData.profile.avatar?.url || '';
  }
}

bannerInput.addEventListener('input', () => {
  clearBannerButton.style.display = bannerInput.value ? 'block' : 'none';
  previewBanner.src = bannerInput.value;
});
avatarInput.addEventListener('input', () => {
  clearAvatarButton.style.display = avatarInput.value ? 'block' : 'none';
  previewAvatar.src = avatarInput.value;
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

// const cancelButton = document.getElementById('cancelButton');
// if (cancelButton) {
//   cancelButton.addEventListener('click', () => {
//     console.log('clicked');
//   });
// }
