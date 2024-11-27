import { auctionTimeLeft } from '../../../utilities/formatDate';
import { createHtmlElement } from '../createElement';

export function buildTopListings(allListings) {
  const main = document.querySelector('main');

  const container = createHtmlElement({
    element: 'div',
    className: ['max-w-[1920px]', 'w-full', 'grid', 'grid-col-2', 'md:flex'],
  });

  allListings.forEach((listing) => {
    const imageContainer = createHtmlElement({
      element: 'div',
      className: [
        'h-[150px]',
        'sm:h-[200px]',
        'lg:h-[300px]',
        'w-full',
        'overflow-hidden',
        'grid-1',
      ],
    });

    const media = listing.media?.[0] || {};
    const image = createHtmlElement({
      element: 'img',
      id: listing.id,
      src: media.url,
      alt: media.alt,
      className: ['object-cover', 'w-full', 'h-full'],
    });

    const dateContainer = createHtmlElement({
      element: 'div',
      textContent: 'Ending soon: ',
      className: ['absolute', 'text-blue-500', 'z-50'],
    });

    const endDate = auctionTimeLeft(listing.endsAt);
    endDate.classList.add();

    dateContainer.appendChild(endDate);
    imageContainer.append(image, dateContainer);
    container.append(imageContainer);
  });

  main.prepend(container);
}
