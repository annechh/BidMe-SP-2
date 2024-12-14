import { auctionTimeLeft } from '../../../utilities/formatDate';
import { LISTING_PAGE } from '../../../utilities/pagePaths';
import { createHtmlElement } from '../createElement';

export function buildLastChanceListings(allListings) {
  const main = document.querySelector('main');
  console.log(allListings);

  const container = createHtmlElement({
    element: 'div',
    className: ['max-w-7xl', 'w-full', 'grid', 'grid-col-2', 'md:flex'],
  });

  allListings.forEach((listing) => {
    const imageContainer = createHtmlElement({
      element: 'div',
      className: [
        'h-[150px]',
        'sm:h-[200px]',
        'lg:h-[300px]',
        'w-full',
        'grid-1',
        'relative',
        'cursor-pointer',
      ],
    });
    imageContainer.addEventListener('click', () => {
      window.location.href = `${LISTING_PAGE}?title=${listing.title}&id=${listing.id}`;
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
      textContent: 'Ends soon: ',
      className: [
        'absolute',
        'bottom-0',
        'flex',
        'justify-center',
        'items-end',
        'w-full',
        'h-full',
        'gap-2',
        'left-1/2',
        '-translate-x-1/2',
        'hover:bg-white',
        'hover:bg-opacity-75',
        'p-2',
        'text-sm',
      ],
    });

    const endDate = auctionTimeLeft(listing.endsAt);

    dateContainer.appendChild(endDate);
    imageContainer.append(image, dateContainer);
    container.append(imageContainer);
  });

  main.prepend(container);
}
