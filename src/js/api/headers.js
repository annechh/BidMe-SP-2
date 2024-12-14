import { API_KEY } from './endpoints';

export function headers() {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  if (API_KEY) {
    headers.append('X-Noroff-API-Key', API_KEY);
  }

  const accessToken = localStorage.accessToken;

  if (accessToken) {
    headers.append('Authorization', `Bearer ${accessToken}`);
  }

  return headers;
}
