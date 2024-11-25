import { auctionTimeLeft, formatDate } from '../../utilities/formatDate';
import { createHtmlElement } from './createElement';

export function buildListingCards(data) {
  const listingCard = createHtmlElement({
    element: 'div',
    className: ['listing-card', 'p-5', 'border', 'rounded'],
    id: data.id,
  });

  const sellerContainer = createHtmlElement({
    element: 'div',
    className: ['seller-container'],
  });

  const sellerImageContainer = createHtmlElement({
    element: 'div',
    className: [
      'seller-image-container',
      'w-[25px]',
      'h-[25px]',
      'md:w-[100px]',
      'md:h-[100px]',
      // 'w-full',
      'h-full',
      'overflow-hidden',
      'rounded-full',
      'flex',
      'justify-center',
      'items-center',
    ],
  });

  const sellerAvatar = createHtmlElement({
    element: 'img',
    className: ['seller-avatar', 'object-cover', 'w-full', 'h-full'],
    src: data.seller.avatar.url,
    alt: data.seller.avatar.alt,
  });

  const sellerName = createHtmlElement({
    element: 'p',
    className: ['seller-name'],
  });

  const startDate = createHtmlElement({
    element: 'p',
    className: ['start-date'],
    textContent: ' ',
  });
  const dateSpanElement = createHtmlElement({
    element: 'span',
    textContent: formatDate(data.created),
  });

  startDate.appendChild(dateSpanElement);

  const listingImageContainer = createHtmlElement({
    element: 'div',
    className: [
      'max-w-[260px]',
      // 'md:w-[100px]',
      'max-h-[200px]',
      'md:h-[240px]',
      'w-full',
      'h-full',
      'overflow-hidden',
      'flex',
      'justify-center',
      'items-center',
    ],
  });

  const media = data.media?.[0] || {};
  const listingImage = createHtmlElement({
    element: 'img',
    src: media.url,
    alt: media.alt,
    className: ['object-cover', 'w-full', 'h-full'],
  });

  const listingTitle = createHtmlElement({
    element: 'h2',
    textContent: data.title,
    className: ['font-semibold', 'text-lg'],
  });

  const description = createHtmlElement({
    element: 'p',
    textContent: data.description,
  });

  const auctionEndsContainer = createHtmlElement({
    element: 'p',
    // className: ['flex', 'flex-col'],
    className: ['grid', 'grid-row-2'],
  });

  const endingTitle = createHtmlElement({
    element: 'h3',
    textContent: 'Auction Ends',
    className: ['font-semibold', 'bg-red-200', 'text-lg'],
  });

  const dateCountdownContainer = createHtmlElement({
    element: 'div',
    className: ['flex', 'justify-between'],
  });

  const endDate = createHtmlElement({
    element: 'p',
    textContent: formatDate(data.endsAt),
  });

  const countdownTimer = auctionTimeLeft(data.endsAt);

  const bidContainer = createHtmlElement({
    element: 'div',
    className: ['bid-container', 'flex', 'items-center', 'gap-2'],
  });

  const currentBid = createHtmlElement({
    element: 'p',
    className: ['current-bid'],
    textContent: 'Current bid: ',
  });

  const bids = data.bids?.[0] || {};
  const currentBidAmount = createHtmlElement({
    element: 'span',
    className: ['font-semibold'],
    textContent: bids.amount,
  });

  const creditIcon = createHtmlElement({
    element: 'i',
    className: ['fa-solid', 'fa-coins'],
  });

  bidContainer.append(currentBid, currentBidAmount, creditIcon);
  listingImageContainer.appendChild(listingImage);
  sellerImageContainer.appendChild(sellerAvatar);
  dateCountdownContainer.append(endDate, countdownTimer);
  auctionEndsContainer.append(endingTitle, dateCountdownContainer);
  sellerContainer.append(sellerImageContainer, sellerName, startDate);
  listingCard.append(
    sellerContainer,
    listingImageContainer,
    listingTitle,
    description,
    auctionEndsContainer,
    bidContainer
  );

  return listingCard;
}

export function renderListingCards(allListings) {
  let renderListings = document.getElementById('listingsCards');
  renderListings.classList.add(
    'max-w-7xl',
    'grid',
    'grid-cols-1',
    'sm:grid-cols-2',
    'lg:grid-cols-3',
    'gap-[10px]',
    'mx-4',
    'md:mx-8'
  );
  console.log('render', renderListings);

  if (!renderListings) {
    console.error('Listings container not found');
    return;
  }

  renderListings.innerHTML = '';

  allListings.forEach((listing) => {
    let card = buildListingCards(listing);

    renderListings.appendChild(card);
  });
}
