import { placeBidListing } from '../../api/listing/placeBid';
import { checkIfEmptyField } from '../../utilities/validation/checkEmptyFields';

export async function onPlaceBid(event) {
  event.preventDefault();

  const form = new FormData(event.target);
  const placeBid = Number(form.get('bid'));

  const errorMessage = document.querySelector('#bidError');
  const isEmpty = checkIfEmptyField(placeBid, errorMessage);
  if (isEmpty) return;

  await placeBidListing(placeBid);
}
