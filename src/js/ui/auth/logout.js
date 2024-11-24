import { authPage } from '../../utilities/pagePaths';

export function onLogout() {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('userData');
  alert('Successfully logged out');
  window.location.href = authPage;
}
