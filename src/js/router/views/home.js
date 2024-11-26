import { readListings } from '../../api/listing/read';
import { renderListingCards } from '../../ui/dom/home/listingsHome';
import { welcomeUser } from '../../ui/dom/home/welcomeMessage';

async function loadHomePage() {
  const { listings } = await readListings();
  renderListingCards(listings);
  welcomeUser();
}
loadHomePage();
