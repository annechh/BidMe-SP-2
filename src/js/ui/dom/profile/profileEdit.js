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

    clearBannerButton.classList.toggle('hidden', !bannerInput.value);
    clearBannerButton.classList.toggle('flex', !!bannerInput.value);

    clearAvatarButton.classList.toggle('hidden', !avatarInput.value);
    clearAvatarButton.classList.toggle('flex', !!avatarInput.value);

    clearBioButton.classList.toggle('hidden', !bioInput.value);
    clearBioButton.classList.toggle('flex', !!bioInput.value);
  }
}

bannerInput.addEventListener('input', () => {
  clearBannerButton.classList.toggle('flex', bannerInput.value);
  clearBannerButton.classList.toggle('hidden', !bannerInput.value);
  previewBanner.src = bannerInput.value;
});
avatarInput.addEventListener('input', () => {
  clearAvatarButton.classList.toggle('flex', avatarInput.value);
  clearAvatarButton.classList.toggle('hidden', !avatarInput.value);
  previewAvatar.src = avatarInput.value;
});
bioInput.addEventListener('input', () => {
  clearBioButton.classList.toggle('flex', bioInput.value);
  clearBioButton.classList.toggle('hidden', !bioInput.value);
});

function addClearButtonDisplay(inputElement, clearButtonElement) {
  inputElement.value = '';
  clearButtonElement.classList.remove('flex');
  clearButtonElement.classList.add('hidden');
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
  clearBannerButton.classList.toggle('flex', initialBannerValue);
  clearBannerButton.classList.toggle('none', !initialBannerValue);

  clearAvatarButton.classList.toggle('flex', initialAvatarValue);
  clearAvatarButton.classList.toggle('none', !initialAvatarValue);

  clearBioButton.classList.toggle('flex', initialBioValue);
  clearBioButton.classList.toggle('none', !initialBioValue);
}

function initialValue() {
  bannerInput.value = initialBannerValue;
  avatarInput.value = initialAvatarValue;
  bioInput.value = initialBioValue;
}
