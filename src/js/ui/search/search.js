import { searchListings } from '../../api/search/search';
import { renderListingCards } from '../dom/home/listingsCardsHome';

export async function onSearchListing(event) {
  event.preventDefault();

  const form = new FormData(event.target);
  const search = form.get('search');

  return search;
}

const form = document.forms.searchForm;
const displaySearchWord = document.getElementById('searchWords');
const resetButton = document.getElementById('resetSearch');
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('searchButton');
const searchedFor = document.getElementById('searchedFor');

export async function handleSearch(listings) {
  toggleButtonState();
  resetToAllListings(listings);
  console.log('Listing in handleSearch', listings);

  searchInput.addEventListener('input', toggleButtonState);

  form.addEventListener('submit', async (event) => {
    const onSearch = await onSearchListing(event);
    const searchListing = await searchListings(onSearch);

    if (searchListing) {
      displaySearchWord.classList.remove('hidden');
      displaySearchWord.classList.add('flex', 'justify-center');
    } else {
      renderListingCards();
      displaySearchWord.classList.remove('flex');
      displaySearchWord.classList.add('hidden');
    }

    renderListingCards(searchListing.listings);

    searchedFor.textContent = searchInput.value;
  });

  searchInput.addEventListener('input', () => {
    if (!searchInput.value.trim()) {
      resetToAllListings(listings);
    }
  });

  resetButton.addEventListener('click', () => {
    resetToAllListings(listings);
    toggleButtonState();
  });
}

const toggleButtonState = () => {
  const isEmpty = !searchInput.value.trim();
  searchButton.disabled = isEmpty;
  searchButton.classList.toggle('cursor-not-allowed', isEmpty);
  searchButton.classList.toggle('cursor-pointer', !isEmpty);
};

function resetToAllListings(listings) {
  renderListingCards(listings);
  displaySearchWord.classList.add('hidden');
  form.reset();
  toggleButtonState();
}
