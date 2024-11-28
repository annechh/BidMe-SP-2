import { readProfileName } from '../../../api/profile/read';
import { getLocalStorage } from '../../../utilities/localStorage';
import { createHtmlElement } from '../createElement';

export async function profileData() {
  const userData = await readProfileName(getLocalStorage().name);
  // console.log('profileData: ', userData);

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
  editProfile.addEventListener('click', () => {
    console.log('edit profile icon clicked');
  });

  const name = document.getElementById('profileName');
  name.textContent = 'Hello ' + userData.profile.name;

  const bio = document.getElementById('profileBio');
  bio.textContent = 'Bio text' + userData.profile.bio;
}
