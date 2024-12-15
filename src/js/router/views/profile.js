import { profileData } from '../../ui/dom/profile/profileUserData';
import { buildListingCardsProfile } from '../../ui/dom/profile/profileAuctions';
import { buildListingsWins } from '../../ui/dom/profile/profileWins';
import { viewProfileData } from '../../ui/dom/profile/profileEdit';
import { onUpdateProfile } from '../../ui/profile/update';
import { authGuard } from '../../utilities/authGuard';

async function loadProfile() {
  authGuard();
  await profileData();
  await buildListingCardsProfile();
  await buildListingsWins();
  await viewProfileData();

  const form = document.forms.editProfile;
  form.addEventListener('submit', onUpdateProfile);

  const skeletonLoaders = document.querySelectorAll('.skeletonLoaders');
  skeletonLoaders.forEach((loader) => loader.classList.add('hidden'));

  const profileInfo = document.getElementById('profileInfo');
  if (profileInfo) {
    profileInfo.classList.remove('hidden');
    profileInfo.classList.add('flex');
  }

  const listingCards = document.getElementById('profileAuctions');
  if (listingCards) {
    listingCards.classList.remove('hidden');
    listingCards.classList.add('grid');
  }
}

loadProfile();
