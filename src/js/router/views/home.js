import { readListings } from '../../api/listing/read';
import { renderListingCards } from '../../ui/dom/home/listingsHome';

async function loadHomePage() {
  const { listings } = await readListings();
  renderListingCards(listings);
}
loadHomePage();
