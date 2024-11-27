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

export function getLocalStorage() {
  const userData = localStorage.getItem('userData');

  if (userData) {
    const userName = JSON.parse(localStorage.getItem('userData'));
    return userName;
  }
}
