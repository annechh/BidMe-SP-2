import { readListings } from '../../api/listing/read';
import { buildLastChanceListings } from '../../ui/dom/home/lastChanceListings';
import { renderListingCards } from '../../ui/dom/home/listingsCardsHome';

import { welcomeUser } from '../../ui/dom/home/welcomeMessage';

async function loadHomePage() {
  const { listings: allListings } = await readListings({ limit: 50 });
  const { listings: topListings } = await readListings({
    limit: 3,
    sort: 'endsAt',
    sortOrder: 'asc',
  });

  renderListingCards(allListings);
  buildLastChanceListings(topListings);
  welcomeUser();
}
loadHomePage();
