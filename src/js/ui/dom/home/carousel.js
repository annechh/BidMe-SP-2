import { auctionTimeLeft } from '../../../utilities/formatDate';
import { createHtmlElement } from '../createElement';

export async function carousel(endingSoon) {
  const carouselItems = document.getElementById('carouselItems');
  const carouselNav = document.getElementById('carouselNav');
  const MAX_SLIDES = 6;

  const listingData = endingSoon.slice(0, MAX_SLIDES);
  const listings = listingData;

  console.log('MEDIA in carousel', listings);

  listings.forEach((listing, index) => {
    console.log(listing);

    const createLi = createHtmlElement({
      element: 'li',
      className: ['slide', 'carousel-image', 'cursor-pointer'],
    });
    if (index === 0) {
      createLi.setAttribute('data-active', '');
    }

    const media = listing.media?.[0] || {
      url: '/images/placeholder-image.png',
      alt: 'Placeholder Image',
    };

    const image = createHtmlElement({
      element: 'img',
      src: media.url,
      alt: media.alt,
      className: ['bg-gray-100'],
    });

    const date = createHtmlElement({
      element: 'p',
      textContent: 'Time left | ',
      className: [
        'absolute',
        'bottom-0',
        'flex',
        'justify-center',
        'items-end',
        'w-full',
        'h-[40px]',
        'lg:h-full',
        'gap-2',
        'left-1/2',
        '-translate-x-1/2',
        'bg-white',
        'bg-opacity-75',
        'lg:bg-transparent',
        'lg:hover:bg-white',
        'lg:hover:bg-opacity-75',
        'p-2',
        'text-sm',
      ],
    });

    const endDate = auctionTimeLeft(listing.endsAt);

    date.append(endDate);
    createLi.append(image, date);
    carouselItems.append(createLi);

    let indicator = document.createElement('span');
    indicator.classList.add('carousel-indicator');
    if (index === 0) {
      indicator.setAttribute('data-active', '');
    }

    carouselNav.append(indicator);
  });
}

const carouselButtons = document.querySelectorAll('.carousel-slide-btn');

carouselButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const next = button.dataset.carouselBtn === 'next' ? 1 : -1;

    const carouselItems = document.getElementById('carouselItems');
    const carouselNav = document.getElementById('carouselNav');

    const activeItem = carouselItems.querySelector('[data-active]');
    const activeIndicator = carouselNav.querySelector('[data-active]');

    let newIndex = [...carouselItems.children].indexOf(activeItem) + next;

    if (newIndex < 0) newIndex = carouselItems.children.length - 1;
    if (newIndex >= carouselItems.children.length) newIndex = 0;

    activeItem.removeAttribute('data-active');
    carouselItems.children[newIndex].setAttribute('data-active', '');

    activeIndicator.removeAttribute('data-active');
    carouselNav.children[newIndex].setAttribute('data-active', '');
  });
});
