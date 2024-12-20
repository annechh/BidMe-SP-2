import { readListing } from '../../api/listing/read';
import { carousel } from '../../ui/dom/listing/carousel';
import { renderListingInfo } from '../../ui/dom/listing/listing';
import { buildViewBids } from '../../ui/dom/listing/viewBids';
import { onDeleteListing } from '../../ui/listing/delete';
import { onPlaceBid } from '../../ui/listing/placeBid';
import { PROFILE_PAGE } from '../../utilities/pagePaths';

async function loadListingPage() {
  const listing = await readListing();

  await carousel(listing);
  renderListingInfo(listing);

  const avatarNameContainer = document.getElementById('avatarNameContainer');
  const viewBidsButton = document.getElementById('viewBidsButton');
  const closeModalButton = document.getElementById('closeModal');
  const deleteButton = document.getElementById('deleteButton');

  const modal = document.getElementById('viewBidsModal');

  avatarNameContainer.addEventListener('click', () => {
    window.location.href = `${PROFILE_PAGE}?name=${listing.seller.name}`;
  });

  viewBidsButton.addEventListener('click', () => {
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

  deleteButton.addEventListener('click', async () => {
    await onDeleteListing(listing.id);
  });

  const skeletonLoaderContainer = document.querySelector('.skeletonLoaders');
  const carouselSection = document.getElementById('carousel');
  const carouselNav = document.getElementById('carouselNav');

  if (skeletonLoaderContainer) {
    skeletonLoaderContainer.classList.add('hidden');
  }

  carouselSection.classList.remove('hidden');
  carouselNav.classList.remove('hidden');

  const form = document.forms.placeBidForm;
  form.addEventListener('submit', onPlaceBid);
}

loadListingPage();
