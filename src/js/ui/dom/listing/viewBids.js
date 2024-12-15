import { sortBidsByLatest } from '../../../utilities/sortBids';
import { createHtmlElement } from '../createElement';

export function buildViewBids(listing) {
  const ul = document.getElementById('bidsByName');

  ul.innerHTML = '';

  const sortedBids = sortBidsByLatest(listing.bids);

  sortedBids.forEach((bidData) => {
    const li = createHtmlElement({
      element: 'li',
      className: [
        'flex',
        'items-center',
        'justify-between',
        'border-b',
        'py-3',
      ],
    });

    const container = createHtmlElement({
      element: 'span',
      className: ['flex', 'items-center', 'gap-2'],
    });

    const avatarContainer = createHtmlElement({
      element: 'span',
      className: [
        'flex',
        'justify-center',
        'items-center',
        'overflow-hidden',
        'rounded-full',
        'h-[30px]',
        'w-[30px]',
        'cursor-pointer',
        'hover:scale-110',
        'transition-transform',
        'duration-300',
      ],
    });

    const avatar = createHtmlElement({
      element: 'img',
      src: bidData.bidder.avatar.url,
      className: ['object-cover', 'w-full', 'h-full'],
    });

    const name = createHtmlElement({
      element: 'p',
      textContent: bidData.bidder.name,
    });

    const amount = createHtmlElement({
      element: 'p',
      textContent: bidData.amount,
    });

    avatarContainer.appendChild(avatar);
    container.append(avatarContainer, name);
    li.append(container, amount);
    ul.appendChild(li);
  });
}
