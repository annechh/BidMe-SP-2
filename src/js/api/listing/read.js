import { API_LISTINGS } from '../endpoints';
import { headers } from '../headers';

function buildQueryParams(
  limit = 12,
  page = 1,
  tag,
  _seller = true,
  _bids = true,
  _active = true
) {
  const queryParams = new URLSearchParams({
    limit,
    page,
    _seller,
    _bids: _bids.toString(),
    _active,
  });
  if (tag) {
    queryParams.append('tag', tag);
  }
  return queryParams.toString();
}

export async function readListings(sort, limit, _seller, _bids, _active) {
  try {
    const queryParam = buildQueryParams(sort, limit, _seller, _bids, _active);

    const response = await fetch(`${API_LISTINGS}?${queryParam}`, {
      method: 'GET',
      headers: headers(),
    });

    if (!response.ok) {
      alert('Could not get social posts');
    } else {
      const data = await response.json();
      const listings = data.data;
      const meta = data.meta;

      console.log('Listings Data: ', data.data);
      // console.log('Listings Meta: ', meta);

      return { listings, meta };
    }
  } catch (error) {
    alert(error, 'Error loading social posts');
  }
}
