import { readListings } from '../../api/listing/read';
import { carousel } from '../../ui/dom/home/carousel';
import { welcomeUser } from '../../ui/dom/home/welcomeMessage';
import { handleSearch } from '../../ui/search/search';

async function loadHomePage() {
  const { listings: allListings } = await readListings({ limit: 51 });
  const { listings: endsSoonListings } = await readListings({
    limit: 6,
    sort: 'endsAt',
    sortOrder: 'asc',
  });
  await handleSearch(allListings);
  await carousel(endsSoonListings);
  welcomeUser();

  const skeletonLoaderContainer = document.querySelectorAll('.skeletonLoaders');
  skeletonLoaderContainer.forEach((loader) => loader.classList.add('hidden'));

  const welcomeMessage = document.getElementById('welcomeMessage');
  if (welcomeMessage) {
    welcomeMessage.classList.remove('hidden');
    welcomeMessage.classList.add('flex');
  }

  const carouselSection = document.getElementById('carousel');
  if (carouselSection) {
    carouselSection.classList.remove('hidden');
  }

  const listingCards = document.getElementById('listingsCards');
  if (listingCards) {
    listingCards.classList.remove('hidden');
    listingCards.classList.add('grid');
  }
}

await loadHomePage();
