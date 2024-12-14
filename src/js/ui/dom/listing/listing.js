import { applyBreakWordClass } from '../../../utilities/breakLongWords';
import { isPastDate } from '../../../utilities/dateUtils';
import { auctionTimeLeft, formatDate } from '../../../utilities/formatDate';
import { getLocalStorage } from '../../../utilities/localStorage';
import { AUTH_PAGE } from '../../../utilities/pagePaths';
import { sortBidsByLatest } from '../../../utilities/sortBids';

export function renderListingInfo(data) {
  const avatar = document.getElementById('avatar');
  avatar.src = data.seller.avatar.url;

  const name = document.getElementById('name');
  name.textContent = data.seller.name;

  const startDate = document.getElementById('startDate');
  startDate.textContent = formatDate(data.created);

  const title = document.getElementById('title');
  title.textContent = data.title;
  applyBreakWordClass(title);

  const description = document.getElementById('description');
  description.textContent = data.description;
  applyBreakWordClass(description);

  const endDate = document.getElementById('endDate');
  endDate.textContent = formatDate(data.endsAt);

  const countdownTimer = document.getElementById('countdownTimer');
  const timer = auctionTimeLeft(data.endsAt);
  countdownTimer.appendChild(timer);

  const sortedBids = sortBidsByLatest(data.bids);
  const latestBidAmount = sortedBids[0]?.amount;

  const currentBid = document.getElementById('currentBidAmount');
  currentBid.textContent = latestBidAmount;

  if (!latestBidAmount) {
    const noBid = document.getElementById('currentBid');
    const coinIcon = document.getElementById('coinIcon');
    noBid.textContent = 'No bids yet';
    coinIcon.style.display = 'none';
  }

  showHideElements(data);
  blockBidEndedAuction(data);
}

const deleteButton = document.getElementById('deleteButton');
const bidButton = document.getElementById('bidButton');
const getStartedButton = document.getElementById('getStartedButton');
const viewBidsButton = document.getElementById('viewBidsButton');
const bidInput = document.getElementById('bid');
const currentBid = document.getElementById('currentBid');
const user = getLocalStorage();

function blockBidEndedAuction(auctionDate) {
  if (isPastDate(auctionDate.endsAt)) {
    bidButton.setAttribute('disabled', 'true');
    bidButton.classList.remove('buttonGreen');
    bidButton.classList.add(
      'cursor-not-allowed',
      'max-w-[300px]',
      'w-full',
      'h-[50px]',
      'rounded-full',
      'text-base',
      'font-semibold',
      'bg-darkFaded'
    );
    bidButton.textContent = 'Auction closed';
    currentBid.textContent = 'Final bid: ';

    bidInput.setAttribute('disabled', 'true');
    bidInput.classList.add('cursor-not-allowed');
  } else {
    bidButton.removeAttribute('disabled');
    bidButton.classList.remove('cursor-not-allowed');
    bidButton.textContent = 'Bid Me';
  }

  if (!user) {
    bidButton.textContent = 'Register or Login to place a Bid';
  }
}

function showHideElements(target) {
  if (user && user.name === target.seller.name) {
    handleSellerView();
  } else if (user) {
    handleLoggedInView();
  } else {
    handleGuestView();
  }
}

function handleSellerView() {
  deleteButton.classList.remove('hidden');
  deleteButton.classList.add('block');

  bidInput.classList.add('cursor-not-allowed');
  bidInput.setAttribute('disabled', 'true');

  bidButton.classList.add('hidden');
}

function handleLoggedInView() {
  deleteButton.classList.add('hidden');
  deleteButton.classList.remove('block');

  bidInput.classList.remove('cursor-not-allowed');
  bidInput.removeAttribute('disabled', 'true');

  bidButton.classList.remove('hidden');
}

function handleGuestView() {
  deleteButton.classList.add('hidden');
  deleteButton.classList.remove('block');

  bidButton.classList.add('hidden');

  getStartedButton.classList.toggle('hidden');
  getStartedButton.classList.add(
    'bg-skyBlue',
    'w-full',
    'h-[50px]',
    'rounded-full',
    'text-base',
    'font-semibold'
  );
  getStartedButton.addEventListener('click', () => {
    window.location.href = AUTH_PAGE;
  });

  viewBidsButton.classList.add('hidden');

  bidInput.classList.add('cursor-not-allowed');
  bidInput.setAttribute('disabled', 'true');
}
