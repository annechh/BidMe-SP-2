import { API_LISTINGS_SEARCH } from '../endpoints';
import { headers } from '../headers';

export async function searchListings(search = '', limit = 50, page = 1) {
  try {
    const queryParam = `&limit=${limit}&page=${page}&_seller=true&_bids=true&_active=true&sort=created&sortOrder=desc&q=${search}`;

    const url = `${API_LISTINGS_SEARCH}?${queryParam}`;
    console.log(url);

    const response = await fetch(url, {
      method: 'GET',
      headers: headers(),
    });

    console.log('RESPONSE: ', response);

    if (!response.ok) {
      alert('Could not search for auction listings');
    } else {
      const data = await response.json();
      const listings = data.data;
      const meta = data.meta;

      // console.log('Listings Data: ', data.data);
      // console.log('Listings Meta: ', meta);

      return { listings, meta };
    }
  } catch (error) {
    alert(error, 'Error loading auction listings search');
  }
}
