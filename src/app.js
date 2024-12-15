import './css/style.css';

import router from './js/router';
import { buildHeader, clickMenu } from './js/ui/dom/header';
import { setLogoutListener } from './js/ui/global/logout';

async function app() {
  await router(window.location.pathname);
  await buildHeader();

  clickMenu();
  setLogoutListener();
}

app();
