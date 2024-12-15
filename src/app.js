import './css/style.css';

import router from './js/router';
import { buildHeader, clickMenu } from './js/ui/dom/header';
import { checkTheme, setupDarkLightToggle } from './js/ui/global/darkMode';
import { setLogoutListener } from './js/ui/global/logout';

async function app() {
  await router(window.location.pathname);
  await buildHeader();
  setupDarkLightToggle();
  clickMenu();
  setLogoutListener();
  checkTheme();
}

app();
