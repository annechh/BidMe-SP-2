import { readListing } from '../../api/listing/read';
import { renderListingInfo } from '../../ui/dom/listing/listing';
import { buildViewBids } from '../../ui/dom/listing/viewBids';

async function loadListingPage() {
  const listing = await readListing();
  console.log(listing);

  renderListingInfo(listing);
  listing.bids.reverse();

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
}

loadListingPage();
