import { readListings } from '../../api/listing/read';
import { carousel } from '../../ui/dom/home/carousel';
// import { buildLastChanceListings } from '../../ui/dom/home/lastChanceListings';
import { renderListingCards } from '../../ui/dom/home/listingsCardsHome';
import { welcomeUser } from '../../ui/dom/home/welcomeMessage';
import { handleSearch } from '../../ui/search/search';
import { styleMain } from '../../ui/styles/styleForms';

async function loadHomePage() {
  const { listings: allListings } = await readListings({ limit: 50 });
  const { listings: endsSoonListings } = await readListings({
    limit: 6,
    sort: 'endsAt',
    sortOrder: 'asc',
  });
  await handleSearch(allListings);

  try {
    const animatePulseLoader = document.querySelector('.loader');
    animatePulseLoader.classList.remove('animate-pulse');
    await carousel(endsSoonListings);
  } catch (error) {
    throw new error();
  }

  renderListingCards(allListings);
  // buildLastChanceListings(endsSoonListings);
  welcomeUser();
  styleMain();
}

loadHomePage();
