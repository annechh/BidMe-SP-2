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

    imageContainer.append(image);
    container.append(imageContainer);
  });

  main.prepend(container);
}
