import { HOME_PAGE } from '../../utilities/pagePaths';
import { showSuccessMessage } from '../../utilities/validation';
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
    console.log(response.body);

    if (!response.ok) {
      alert('Failed to create listing');
    } else {
      const data = await response.json();
      console.log('Response data: ', data.data);

      showSuccessMessage();

      setTimeout(() => {
        window.location.href = HOME_PAGE;
      }, 2500);
      return data.data;
    }
  } catch (error) {
    alert(error, 'Failed to create new listing');
  }
}
