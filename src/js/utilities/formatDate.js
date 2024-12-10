const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export function formatDate(data) {
  const formattedDate = new Date(data);

  return `${formattedDate.getDate()}
  ${months[formattedDate.getMonth()]}
  ${formattedDate.getFullYear()}`;
}

export function auctionTimeLeft(endTime) {
  const timerElement = document.createElement('span');
  timerElement.classList.add('countdown-timer');

  function updateCountdown() {
    const now = new Date();
    const end = new Date(endTime);
    const timeLeft = end - now;

    if (timeLeft <= 0) {
      timerElement.textContent = 'Auction Ended';
      timerElement.classList.add(
        'card-p-text',
        'text-red-400',
        'font-semibold'
      );
      clearInterval(timerInterval);
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    timerElement.classList.add(
      'card-p-text',
      // 'text-green-600',
      'font-semibold'
    );
  }

  const timerInterval = setInterval(updateCountdown, 1000);
  updateCountdown();

  return timerElement;
}
