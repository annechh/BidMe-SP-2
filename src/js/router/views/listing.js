import { readListing } from '../../api/listing/read';

async function loadListingPage() {
  await readListing();
}

loadListingPage();
