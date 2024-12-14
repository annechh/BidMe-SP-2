import { HOME_PAGE } from '../../utilities/pagePaths';
import { showSuccessMessage } from '../../utilities/validation/displaySuccessMessage';
import { displayMessage } from '../../utilities/validation/displayMessage';
import { API_LISTINGS } from '../endpoints';
import { headers } from '../headers';

export async function createListing({
  title,
  description,
  tags,
  endsAt,
  media,
}) {
  try {
    const response = await fetch(API_LISTINGS, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({ title, description, tags, endsAt, media }),
    });

    const data = await response.json();
    console.log(response.body);

    if (!response.ok) {
      console.log('hey', !response.ok);

      throw new Error(data.errors?.[0]?.message || 'Create New listing failed');
    } else {
      console.log('Response data: ', data.data);

      displayMessage('#message', 'success', 'Success');

      setTimeout(() => {
        showSuccessMessage();
      }, 1000);

      setTimeout(() => {
        window.location.href = HOME_PAGE;
      }, 3500);
      return data.data;
    }
  } catch (error) {
    displayMessage('#imageError', 'warning', error.message);
  }
}
