import { readListings } from '../../api/listing/read';
import { buildLastChanceListings } from '../../ui/dom/home/lastChanceListings';
import { renderListingCards } from '../../ui/dom/home/listingsCardsHome';
import { welcomeUser } from '../../ui/dom/home/welcomeMessage';
import { handleSearch } from '../../ui/search/search';

async function loadHomePage() {
  const { listings: allListings } = await readListings({ limit: 50 });
  const { listings: topListings } = await readListings({
    limit: 3,
    sort: 'endsAt',
    sortOrder: 'asc',
  });
  await handleSearch(allListings);

  renderListingCards(allListings);
  buildLastChanceListings(topListings);
  welcomeUser();
}

loadHomePage();
