import {
  readProfileListings,
  readProfileName,
} from '../../../api/profile/read';
import { applyBreakWordClass } from '../../../utilities/breakLongWords';
import { auctionTimeLeft, formatDate } from '../../../utilities/formatDate';
import { getLocalStorage } from '../../../utilities/localStorage';
import { LISTING_PAGE } from '../../../utilities/pagePaths';
import { onDeleteListing } from '../../listing/delete';
import { createHtmlElement } from '../createElement';

export async function buildListingCardsProfile() {
  const profileName = new URLSearchParams(window.location.search).get('name');

  const userData = await readProfileListings(profileName);
  const sellerData = await readProfileName(profileName);

  const IS_OWN_PROFILE = profileName === getLocalStorage().name;

  const profileAuctions = document.getElementById('profileAuctions');
  profileAuctions.classList.add(
    'max-w-[1920px]',
    'grid',
    'grid-cols-1',
    'sm:grid-cols-2',
    'lg:grid-cols-3',
    'gap-[10px]',
    'mx-4',
    'mb-[50px]',
    'lg:mb-[100px]'
  );

  userData.profile.forEach((data) => {
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
        'min-h-[410px]',
        'md:min-h-[450px]',
        'h-full',
        'w-full',
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
      id: 'sellerName',
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
      src: sellerData.profile.avatar?.url,
      alt: sellerData.profile.avatar?.alt,
    });

    const sellerName = createHtmlElement({
      element: 'p',
      className: ['card-p-text', 'seller-name'],
      textContent: sellerData.profile.name,
    });

    const startDate = createHtmlElement({
      element: 'p',
      className: ['card-p-text', 'start-date'],
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
    listingImageContainer.addEventListener('click', () => {
      window.location.href = `${LISTING_PAGE}?title=${data.title}&id=${data.id}`;
    });

    const listingImage = createHtmlElement({
      element: 'img',
      src:
        data.media && data.media.length > 0
          ? data.media[0].url
          : '/images/placeholder-image.png',
      alt: data.media && data.media.length > 0 ? data.media[0].alt : '',
      className: ['object-cover', 'w-full', 'h-full'],
    });

    const listingTitle = createHtmlElement({
      element: 'h2',
      textContent: data.title ?? '',
      className: ['line-clamp-1'],
    });
    applyBreakWordClass(listingTitle);

    const description = createHtmlElement({
      element: 'p',
      textContent: data.description ?? '',
      className: [
        'card-p-text',
        'line-clamp-1',
        'border-b',
        'border-darkFaded',
      ],
    });
    applyBreakWordClass(description);

    const auctionEndsContainer = createHtmlElement({
      element: 'div',
      className: ['grid', 'grid-row-2', 'border-b', 'border-darkFaded'],
    });

    const endingTitle = createHtmlElement({
      element: 'h3',
      textContent: 'Auction Ends',
    });

    const dateCountdownContainer = createHtmlElement({
      element: 'div',
      className: ['flex', 'justify-between'],
    });

    const endDate = createHtmlElement({
      element: 'p',
      textContent: formatDate(data.endsAt),
      className: ['card-p-text'],
    });

    const countdownTimer = auctionTimeLeft(data.endsAt);

    const bidContainer = createHtmlElement({
      element: 'div',
      className: ['bid-container', 'flex', 'items-center', 'gap-2'],
    });

    const currentBid = createHtmlElement({
      element: 'p',
      className: ['card-p-text', 'current-bid'],
      textContent: 'Current bid: ',
    });

    const currentBidAmount = createHtmlElement({
      element: 'span',
      className: ['font-semibold'],
      textContent: data.bids[data.bids.length - 1]?.amount,
    });

    const creditIcon = createHtmlElement({
      element: 'i',
      className: ['fa-solid', 'fa-coins'],
    });

    const buttonContainer = createHtmlElement({
      element: 'div',
      className: ['flex', 'justify-between', 'gap-5'],
    });
    buttonContainer.style.display = IS_OWN_PROFILE ? 'flex' : 'none';

    const editButton = createHtmlElement({
      element: 'button',
      className: ['buttonGreen'],
      textContent: 'Edit',
    });

    const deleteButton = createHtmlElement({
      element: 'button',
      id: 'deleteButton',
      className: ['buttonDelete'],
      textContent: 'Delete',
    });
    deleteButton.addEventListener('click', async () => {
      await onDeleteListing(data.id);
    });

    buttonContainer.append(editButton, deleteButton);
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
      bidContainer,
      buttonContainer
    );
    listingCard.append(contentContainer);
    profileAuctions.append(listingCard);
  });
  return profileAuctions;
}
