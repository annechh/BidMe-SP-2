import { auctionTimeLeft, formatDate } from '../../../utilities/formatDate';
import { getLocalStorage } from '../../../utilities/localStorage';
import { AUTH_PAGE } from '../../../utilities/pagePaths';
import { isAuctionEnded } from '../../../utilities/validation';

export function renderListingInfo(data) {
  const avatar = document.getElementById('avatar');
  avatar.src = data.seller.avatar.url;

  const name = document.getElementById('name');
  name.textContent = data.seller.name;

  const startDate = document.getElementById('startDate');
  startDate.textContent = formatDate(data.created);

  const title = document.getElementById('title');
  title.textContent = data.title;

  const description = document.getElementById('description');
  description.textContent = data.description;

  const endDate = document.getElementById('endDate');
  endDate.textContent = formatDate(data.endsAt);

  const countdownTimer = document.getElementById('countdownTimer');
  const timer = auctionTimeLeft(data.endsAt);
  countdownTimer.appendChild(timer);

  const currentBid = document.getElementById('currentBidAmount');
  currentBid.textContent = data.bids[data.bids.length - 1]?.amount;

  showHideElements(data);
  blockBidEndedAuction(data);
}

const deleteButton = document.getElementById('deleteButton');
const bidButton = document.getElementById('bidButton');
const viewBidsButton = document.getElementById('viewBidsButton');
const bidInput = document.getElementById('bid');
const currentBid = document.getElementById('currentBid');
const user = getLocalStorage();

function blockBidEndedAuction(auctionDate) {
  if (isAuctionEnded(auctionDate.endsAt)) {
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

  bidButton.classList.remove('buttonGreen');
  bidButton.classList.add(
    'bg-skyBlue',
    'w-full',
    'h-[50px]',
    'rounded-full',
    'text-base',
    'font-semibold'
  );
  bidButton.addEventListener('click', () => {
    window.location.href = AUTH_PAGE;
  });

  viewBidsButton.classList.add('hidden');

  bidInput.classList.add('cursor-not-allowed');
  bidInput.setAttribute('disabled', 'true');
}
