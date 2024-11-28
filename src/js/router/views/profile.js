import { profileData } from '../../ui/dom/profile/profileUserData';
import { buildListingCardsProfile } from '../../ui/dom/profile/profileAuctions';

async function loadProfile() {
  await profileData();

  await buildListingCardsProfile();
}

loadProfile();
