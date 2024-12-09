import { getLocalStorage } from '../../utilities/localStorage';
import { PROFILE_PAGE } from '../../utilities/pagePaths';
import { API_LISTINGS } from '../endpoints';
import { headers } from '../headers';

export async function deleteListing(id) {
  const userName = getLocalStorage().name;
  const pathLink = PROFILE_PAGE;
  const goToProfile = `${pathLink}?name=${userName}`;

  try {
    const response = await fetch(`${API_LISTINGS}/${id}`, {
      method: 'DELETE',
      headers: headers(),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      console.error('Failed to delete listing:', errorMessage);
      return false;
    } else {
      alert('Listing successfully deleted! Redirecting you to profile');
      window.location.href = goToProfile;
    }
  } catch (error) {
    console.error('Error deleting listing:', error);
    return false;
  }
}
