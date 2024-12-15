import { createHtmlElement } from '../createElement';

export async function carousel(data) {
  const carouselItems = document.getElementById('carouselItems');
  const carouselNav = document.getElementById('carouselNav');
  const MAX_SLIDES = 6;

  const listingMedia = data.media.slice(0, MAX_SLIDES);
  // const media = listingMedia;
  const media =
    listingMedia.length > 0
      ? listingMedia
      : [{ url: '/images/placeholder-image.png' }];

  media.forEach((data, index) => {
    const createLi = createHtmlElement({
      element: 'li',
      className: ['slide', 'carousel-image', 'dark:drop-shadow-whiteFaded'],
    });
    if (index === 0) {
      createLi.setAttribute('data-active', '');
    }

    const image = createHtmlElement({
      element: 'img',
      src: data.url,
      alt: data.alt,
    });

    createLi.append(image);
    carouselItems.append(createLi);

    let indicator = document.createElement('span');
    indicator.classList.add('carousel-indicator-listing', 'dark:bg-whiteFaded');
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
