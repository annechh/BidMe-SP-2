import { displayMessage } from '../../utilities/validation/displayMessage';
import { API_LISTINGS } from '../endpoints';
import { headers } from '../headers';

export async function placeBidListing(body) {
  const id = new URLSearchParams(window.location.search).get('id');
  try {
    const url = `${API_LISTINGS}/${id}/bids?_seller=true&_bids=true`;

    const response = await fetch(url, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({ amount: body }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.errors?.[0]?.message || 'Could not place bid');
    } else {
      displayMessage('#message', 'success', 'Successfully placed your bid');
      setTimeout(() => {
        window.location.reload();
      }, 3000);
      return data;
    }
  } catch (error) {
    displayMessage('#message', 'warning', error.message);
  }
}
