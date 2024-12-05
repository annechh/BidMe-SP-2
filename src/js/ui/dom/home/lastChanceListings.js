import { auctionTimeLeft } from '../../../utilities/formatDate';
import { createHtmlElement } from '../createElement';

export function buildLastChanceListings(allListings) {
  const main = document.querySelector('main');
  console.log(allListings);

  const container = createHtmlElement({
    element: 'div',
    className: [
      'max-w-7xl',
      'w-full',
      'grid',
      'grid-col-2',
      'md:flex',
      'my-[20px]',
      'md:my-[50px]',
    ],
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

    const media = listing.media?.[0] || {
      url: '/images/placeholder-image.png',
    };

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
