import { onSearchListing } from '../../ui/search/search';

async function loadSearchPage() {
  const form = document.forms.searchForm;
  form.addEventListener('submit', (event) => onSearchListing(event));
}

loadSearchPage();
