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
  });
}
