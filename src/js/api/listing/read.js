import { API_LISTINGS } from '../endpoints';
import { headers } from '../headers';

function buildQueryParams({
  limit = 12,
  page = 1,
  tag,
  _seller = true,
  _bids = true,
  _active = true,
  sort = 'created',
  sortOrder = 'desc',
}) {
  const queryParams = new URLSearchParams({
    limit,
    page,
    _seller,
    _bids: _bids.toString(),
    _active,
    sort,
    sortOrder,
  });
  if (tag) {
    queryParams.append('tag', tag);
  }
  return queryParams.toString();
}

export async function readListings(
  limit,
  page,
  tag,
  _seller,
  _bids,
  _active,
  sort = 'created',
  sortOrder = 'desc'
) {
  try {
    const queryParam = buildQueryParams(
      limit,
      page,
      tag,
      _seller,
      _bids,
      _active,
      sort,
      sortOrder
    );

    const url = `${API_LISTINGS}?${queryParam}`;
    // console.log(url);

    const response = await fetch(url, {
      method: 'GET',
      headers: headers(),
    });

    if (!response.ok) {
      alert('Could not get auction listings');
    } else {
      const data = await response.json();
      const listings = data.data;
      const meta = data.meta;

      // console.log('Listings Data: ', data.data);
      // console.log('Listings Meta: ', meta);

      return { listings, meta };
    }
  } catch (error) {
    alert(error, 'Error loading auction listings');
  }
}

export async function readListing() {
  const id = new URLSearchParams(window.location.search).get('id');
  try {
    const url = `${API_LISTINGS}/${id}?_seller=true&_bids=true`;
    console.log('Read listing url: ', url);

    const response = await fetch(url, {
      method: 'GET',
      headers: headers(),
    });

    if (!response.ok) {
      alert('Could not get auction listing');
    } else {
      const data = await response.json();
      const listing = data.data;

      // console.log('Listing Data from fetch: ', data.data.media[0]?.url);

      return listing;
    }
  } catch (error) {
    alert(error, 'Error loading auction listing');
  }
}
