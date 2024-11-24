import { onLogout } from '../auth/logout';

export function setLogoutListener() {
  const logoutButton = document.getElementById('logoutButton');
  logoutButton.addEventListener('click', () => {
    onLogout();
  });
}
