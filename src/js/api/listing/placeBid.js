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

    if (!response.ok) {
      alert('Could not place bid');
    } else {
      const data = await response.json();

      setTimeout(() => {
        window.location.reload();
      }, 500);
      return data;
    }
  } catch (error) {
    alert(error, 'Error placing bid on auction listing');
  }
}
