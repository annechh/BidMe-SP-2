export function isPastDate(date) {
  const todaysDate = new Date();
  const endDate = new Date(date);
  return todaysDate > endDate;
}
