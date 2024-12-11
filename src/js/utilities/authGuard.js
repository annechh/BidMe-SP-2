import { AUTH_PAGE } from './pagePaths';

export function authGuard() {
  if (!localStorage.accessToken) {
    window.location.href = AUTH_PAGE;
  }
  return true;
}
