import { placeBidListing } from '../../api/listing/placeBid';

export async function onPlaceBid(event) {
  event.preventDefault();

  const form = new FormData(event.target);

  const placeBid = Number(form.get('bid'));

  await placeBidListing(placeBid);
}
