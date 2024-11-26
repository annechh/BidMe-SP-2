import { HOME_PAGE } from '../../utilities/pagePaths';
import { createHtmlElement } from './createElement';

export function buildFooter() {
  const footer = document.querySelector('footer');
  footer.classList.add(
    'flex',
    'w-full',
    'justify-center',
    'border-t-2',
    'border-darkFaded'
  );

  const footerWrapper = createHtmlElement({
    element: 'div',
    className: [
      'h-[300px]',
      'max-w-[1920px]',
      'w-full',
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      'gap-5',
    ],
  });

  const logo = createHtmlElement({
    element: 'img',
    src: '/images/logo-lightMode.png',
  });
  logo.addEventListener('click', () => (window.location.href = HOME_PAGE));

  const copyright = createHtmlElement({
    element: 'p',
    textContent: '@ BidMe Auctions',
    className: ['text-darkFaded'],
  });

  footerWrapper.append(logo, copyright);
  footer.append(footerWrapper);
}
