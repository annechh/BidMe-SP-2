import { auctionTimeLeft, formatDate } from '../../../utilities/formatDate';
import { createHtmlElement } from '../createElement';

export function buildListingCards(data) {
  const listingCard = createHtmlElement({
    element: 'div',
    className: ['listing-card', 'border', 'rounded'],
    id: data.id,
  });

  const contentContainer = createHtmlElement({
    element: 'div',
    className: [
      'content-container',
      'p-5',
      'flex',
      'flex-col',
      'sm:h-full',
      'sm:w-full',
      'gap-2',
    ],
  });

  const sellerDateContainer = createHtmlElement({
    element: 'div',
    className: [
      'seller-date-container',
      'flex',
      'items-center',
      'justify-between',
    ],
  });

  const avatarNameContainer = createHtmlElement({
    element: 'div',
    className: ['seller-container', 'flex', 'items-center', 'gap-[10px]'],
  });

  const sellerAvatarContainer = createHtmlElement({
    element: 'div',
    className: [
      'seller-avatar-container',
      'w-[25px]',
      'h-[25px]',
      'md:w-[40px]',
      'md:h-[40px]',
      'h-full',
      'overflow-hidden',
      'rounded-full',
      'flex',
      'justify-center',
      'items-center',
      'aspect-square',
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
    textContent: data.seller.name,
  });

  const startDate = createHtmlElement({
    element: 'p',
    className: ['start-date'],
    textContent: formatDate(data.created),
  });

  const listingImageContainer = createHtmlElement({
    element: 'div',
    className: [
      'flex',
      'items-center',
      'justify-center',
      'w-full',
      'max-h-[200px]',
      'sm:max-[240px]',
      'h-full',
      'cursor-pointer',
      'overflow-hidden',
      'drop-shadow-darkFaded',
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
    className: ['break-words', 'line-clamp-1', 'border-b', 'border-darkFaded'],
  });

  const auctionEndsContainer = createHtmlElement({
    element: 'p',
    className: ['grid', 'grid-row-2', 'border-b', 'border-darkFaded'],
  });

  const endingTitle = createHtmlElement({
    element: 'h3',
    textContent: 'Auction Ends',
    className: ['font-semibold', 'text-lg'],
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
  sellerAvatarContainer.appendChild(sellerAvatar);
  dateCountdownContainer.append(endDate, countdownTimer);
  auctionEndsContainer.append(endingTitle, dateCountdownContainer);

  avatarNameContainer.append(sellerAvatarContainer, sellerName);
  sellerDateContainer.append(avatarNameContainer, startDate);
  contentContainer.append(
    sellerDateContainer,
    listingImageContainer,
    listingTitle,
    description,
    auctionEndsContainer,
    bidContainer
  );
  listingCard.append(contentContainer);

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
    'md:mx-8',
    'my-[50px]',
    'lg:my-[100px]'
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
