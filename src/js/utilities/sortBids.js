export function sortBidsByLatest(bids) {
  return [...bids].sort((a, b) => new Date(b.created) - new Date(a.created));
}
