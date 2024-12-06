import { searchListings } from '../../api/search/search';

export async function onSearchListing(event) {
  event.preventDefault();

  const form = new FormData(event.target);

  const search = form.get('search');
  console.log(search);

  await searchListings(search);
}
