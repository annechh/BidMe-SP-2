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

  const skeletonLoaderContainer = document.querySelector('.skeletonLoaders');
  const listingCards = document.getElementById('listingsCards');
  const carouselSection = document.getElementById('carousel');
  const carouselNav = document.getElementById('carouselNav');

  if (skeletonLoaderContainer) {
    skeletonLoaderContainer.classList.add('hidden');
  }

  carouselSection.classList.remove('hidden');
  carouselNav.classList.remove('hidden');

  listingCards.classList.remove('hidden');
  listingCards.classList.add('grid');
}

await loadHomePage();
