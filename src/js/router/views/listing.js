import { readListing } from '../../api/listing/read';
import { renderListingInfo } from '../../ui/dom/listing/listing';

async function loadListingPage() {
  const listing = await readListing();
  console.log(listing);

  renderListingInfo(listing);
}

loadListingPage();
