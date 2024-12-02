import { readProfileName } from '../../../api/profile/read';
import { getLocalStorage } from '../../../utilities/localStorage';
import { createHtmlElement } from '../createElement';

export async function profileData() {
  const profileName = new URLSearchParams(window.location.search).get('name');
  const loggedInName = getLocalStorage().name;

  const targetProfileName =
    !profileName || profileName === loggedInName ? loggedInName : profileName;

  const userData = await readProfileName(targetProfileName);

  const IS_OWN_PROFILE = targetProfileName === loggedInName;

  const banner = document.getElementById('profileBanner');
  banner.src = userData.profile.banner.url;
  banner.alt = userData.profile.banner.alt;

  const avatar = document.getElementById('profileAvatar');
  avatar.src = userData.profile.avatar.url;
  avatar.alt = userData.profile.avatar.alt;

  const credits = document.getElementById('profileCredits');
  credits.textContent = userData.profile.credits;

  const creditsIcon = createHtmlElement({
    element: 'i',
    className: ['fa-solid', 'fa-coins'],
  });
  credits.appendChild(creditsIcon);

  const editProfile = document.getElementById('profileEdit');

  const name = document.getElementById('profileName');
  name.textContent = IS_OWN_PROFILE
    ? 'Hello ' + userData.profile.name
    : '' + userData.profile.name;

  const bio = document.getElementById('profileBio');
  bio.textContent = userData.profile.bio;

  credits.style.display = IS_OWN_PROFILE ? 'flex' : 'none';
  editProfile.style.display = IS_OWN_PROFILE ? 'flex' : 'none';
}
