export function setLocalStorage({ accessToken, userData, darkMode }) {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
  }

  if (userData) {
    localStorage.setItem('userData', userData);
  }

  if (darkMode) {
    localStorage.setItem('darkMode', darkMode);
  }
}
