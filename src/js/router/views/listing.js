import { readListing } from '../../api/listing/read';
import { carousel } from '../../ui/dom/listing/carousel';
import { renderListingInfo } from '../../ui/dom/listing/listing';
import { buildViewBids } from '../../ui/dom/listing/viewBids';
import { onPlaceBid } from '../../ui/listing/placeBid';

async function loadListingPage() {
  const listing = await readListing();
  console.log('Listing data from view: ', listing);

  renderListingInfo(listing);
  listing.bids.reverse();

  carousel(listing);

  const viewBidsButton = document.getElementById('viewBids');
  const closeModalButton = document.getElementById('closeModal');
  const modal = document.getElementById('viewBidsModal');

  viewBidsButton.addEventListener('click', () => {
    console.log('click');
    buildViewBids(listing);
    modal.classList.add('flex');
    modal.classList.remove('hidden');
  });

  closeModalButton.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  });

  const form = document.forms.placeBidForm;
  form.addEventListener('submit', onPlaceBid);
}

loadListingPage();
