import { HOME_PAGE } from '../../utilities/pagePaths';

export function onLogout() {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('userData');
  window.location.href = HOME_PAGE;
}
