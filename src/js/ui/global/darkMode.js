export function setupDarkLightToggle() {
  const lightModeContainer = document.getElementById('darkMode');

  const isDarkMode = localStorage.getItem('dark-mode') === 'true';
  if (isDarkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  lightModeContainer.addEventListener('click', () => {
    const isCurrentlyDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('dark-mode', isCurrentlyDark);
    checkTheme();
  });
}

export function checkTheme() {
  const checkDarkMode = JSON.parse(localStorage.getItem('dark-mode'));
  console.log(checkDarkMode);

  const footerLogo = document.getElementById('footerLogo');
  const headerLogo = document.getElementById('headerLogo');

  if (checkDarkMode) {
    footerLogo.src = '/images/logo-darkMode.png';
    headerLogo.src = '/images/logo-darkMode.png';
  } else {
    footerLogo.src = '/images/logo-lightMode.png';
    headerLogo.src = '/images/logo-lightMode.png';
  }
}
