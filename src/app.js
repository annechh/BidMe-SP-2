import './css/style.css';

import router from './js/router';
import { buildFooter } from './js/ui/dom/footer';
import { buildHeader, clickMenu } from './js/ui/dom/header';
import { setLogoutListener } from './js/ui/global/logout';

async function app() {
  await router(window.location.pathname);
  await buildHeader();

  buildFooter();
  clickMenu();
  setLogoutListener();
}

app();
