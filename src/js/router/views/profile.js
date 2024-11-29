import { profileData } from '../../ui/dom/profile/profileUserData';
import { buildListingCardsProfile } from '../../ui/dom/profile/profileAuctions';
import { buildListingsWins } from '../../ui/dom/profile/profileWins';

async function loadProfile() {
  await profileData();

  await buildListingCardsProfile();
  await buildListingsWins();
}

loadProfile();
