import { auctionTimeLeft, formatDate } from '../../../utilities/formatDate';

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
}
