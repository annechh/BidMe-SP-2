import { createHtmlElement } from './createElement';

export function buildListingCards(data) {
  const listingCard = createHtmlElement({
    element: 'div',
    className: ['listing-card', 'grid'],
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
    textContent: data.created,
  });

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

  const timeLeftContainer = createHtmlElement({
    element: 'p',
  });

  const endingTitle = createHtmlElement({
    element: 'h3',
    textContent: 'Auction Ends',
    className: ['font-semibold', 'text-lg'],
  });

  const endDate = createHtmlElement({
    element: 'p',
    textContent: data.endsAt,
  });

  const timeLeft = createHtmlElement({
    element: 'p',
  });

  const bidContainer = createHtmlElement({
    element: 'div',
    className: ['bid-container'],
  });

  const currentBid = createHtmlElement({
    element: 'p',
    className: ['current-bid'],
  });
  const bids = data.bids?.[0] || {};
  currentBid.textContent = 'Current bid: ' + bids.amount;

  const placeBid = createHtmlElement({
    element: 'input',
  });

  const buttonContainer = createHtmlElement({
    element: 'div',
    className: ['flex', 'gap-5'],
  });

  const viewBidButton = createHtmlElement({
    element: 'button',
    textContent: 'View Bids',
    className: ['button', 'bg-warmYellow'],
  });
  const bidButton = createHtmlElement({
    element: 'button',
    textContent: 'Bid Me',
    className: ['button', 'bg-softGreen'],
  });

  buttonContainer.append(viewBidButton, bidButton);
  bidContainer.append(currentBid, placeBid);
  listingImageContainer.appendChild(listingImage);
  sellerImageContainer.appendChild(sellerAvatar);

  timeLeftContainer.append(endingTitle, endDate, timeLeft);
  sellerContainer.append(sellerImageContainer, sellerName, startDate);
  listingCard.append(
    sellerContainer,
    listingImageContainer,
    listingTitle,
    description,
    timeLeftContainer,
    bidContainer,
    buttonContainer
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
