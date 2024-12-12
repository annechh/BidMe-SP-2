const currentPage = window.location.pathname;
export const getPageClasses = (path) => {
  return currentPage === path ? ['border-b'] : [];
};
