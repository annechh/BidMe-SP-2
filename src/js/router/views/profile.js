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

  const skeletonLoaderContainer = document.querySelector('.skeletonLoaders');
  const listingCards = document.getElementById('profileAuctions');
  if (skeletonLoaderContainer) {
    skeletonLoaderContainer.classList.add('hidden');
  }
  listingCards.classList.remove('hidden');
  listingCards.classList.add('grid');
}

loadProfile();
