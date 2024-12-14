import { sortBidsByLatest } from '../../../utilities/sortBids';
import { createHtmlElement } from '../createElement';

export function buildViewBids(listing) {
  const ul = document.getElementById('bidsByName');
  console.log('ul: ', ul);

  ul.innerHTML = '';
  console.log('all bids: ', listing.bids);

  const sortedBids = sortBidsByLatest(listing.bids);
  console.log('sortedBids', sortedBids);

  sortedBids.forEach((bidData) => {
    const li = createHtmlElement({
      element: 'li',
      className: [],
    });

    const name = createHtmlElement({
      element: 'p',
      textContent: bidData.bidder.name,
    });

    const amount = createHtmlElement({
      element: 'p',
      textContent: bidData.amount,
    });

    li.append(name, amount);
    ul.appendChild(li);
  });
}
