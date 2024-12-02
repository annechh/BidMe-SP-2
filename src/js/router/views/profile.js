import { profileData } from '../../ui/dom/profile/profileUserData';
import { buildListingCardsProfile } from '../../ui/dom/profile/profileAuctions';
import { buildListingsWins } from '../../ui/dom/profile/profileWins';
import { formStyle } from '../../ui/styles/styleForms';
import {
  onUpdateProfile,
  viewProfileData,
} from '../../ui/dom/profile/profileEdit';

async function loadProfile() {
  await profileData();
  await buildListingCardsProfile();
  await buildListingsWins();
  await viewProfileData();

  formStyle();

  const form = document.forms.editProfile;
  form.addEventListener('submit', onUpdateProfile);
}

loadProfile();
