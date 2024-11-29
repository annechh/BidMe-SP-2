import { profileData } from '../../ui/dom/profile/profileUserData';
import { buildListingCardsProfile } from '../../ui/dom/profile/profileAuctions';
import { buildListingsWins } from '../../ui/dom/profile/profileWins';
import { formStyle } from '../../ui/styles/styleForms';

async function loadProfile() {
  await profileData();
  await buildListingCardsProfile();
  await buildListingsWins();

  formStyle();
}

loadProfile();
