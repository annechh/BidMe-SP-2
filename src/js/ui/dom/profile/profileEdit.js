import { readProfileName } from '../../../api/profile/read';
import { getLocalStorage } from '../../../utilities/localStorage';

const bannerInput = document.getElementById('banner');
const avatarInput = document.getElementById('avatar');
const bioInput = document.getElementById('bio');

const clearBannerButton = document.getElementById('clearBannerField');
const clearAvatarButton = document.getElementById('clearAvatarField');
const clearBioButton = document.getElementById('clearBioField');
const cancelButton = document.getElementById('cancelButton');

const previewBanner = document.getElementById('profileBanner');
const previewAvatar = document.getElementById('profileAvatar');

const getForm = document.getElementById('formDivWrapper');
const editProfile = document.getElementById('profileEdit');

let initialBannerValue = '';
let initialAvatarValue = '';
let initialBioValue = '';

export async function viewProfileData(profileData) {
  const profileName = new URLSearchParams(window.location.search).get('name');
  const userData = getLocalStorage();
  const IS_OWN_PROFILE = userData && profileName === userData.name;

  if (IS_OWN_PROFILE) {
    profileData = await readProfileName(userData.name);

    const banner = profileData.profile.banner?.url || '';
    const avatar = profileData.profile.avatar?.url || '';
    const bio = profileData.profile.bio || '';

    bannerInput.value = banner;
    avatarInput.value = avatar;
    bioInput.value = bio;

    previewBanner.src = banner;
    previewAvatar.src = avatar;

    initialBannerValue = banner;
    initialAvatarValue = avatar;
    initialBioValue = bio;

    clearBannerButton.style.display = bannerInput.value ? 'block' : 'none';
    clearAvatarButton.style.display = avatarInput.value ? 'block' : 'none';
    clearBioButton.style.display = bioInput.value ? 'block' : 'none';
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

function addClearButtonDisplay(inputElement, clearButtonElement) {
  inputElement.value = '';
  clearButtonElement.style.display = 'none';
}

clearBannerButton.addEventListener('click', () => {
  addClearButtonDisplay(bannerInput, clearBannerButton);
});
clearAvatarButton.addEventListener('click', () => {
  addClearButtonDisplay(avatarInput, clearAvatarButton);
});
clearBioButton.addEventListener('click', () => {
  addClearButtonDisplay(bioInput, clearBioButton);
});

editProfile.addEventListener('click', () => {
  if (getForm.classList.contains('hidden')) {
    getForm.classList.remove('hidden');
    getForm.classList.add('flex');
  } else {
    initialValue();
    displayClearButton();

    getForm.classList.remove('flex');
    getForm.classList.add('hidden');
  }
});

if (cancelButton) {
  cancelButton.addEventListener('click', () => {
    initialValue();
    displayClearButton();

    getForm.classList.remove('flex');
    getForm.classList.add('hidden');
  });
}

function displayClearButton() {
  clearBannerButton.style.display = initialBannerValue ? 'block' : 'none';
  clearAvatarButton.style.display = initialAvatarValue ? 'block' : 'none';
  clearBioButton.style.display = initialBioValue ? 'block' : 'none';
}

function initialValue() {
  bannerInput.value = initialBannerValue;
  avatarInput.value = initialAvatarValue;
  bioInput.value = initialBioValue;
}
