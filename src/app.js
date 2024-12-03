import './css/style.css';

import router from './js/router';
import { buildFooter } from './js/ui/dom/footer';
import { buildHeader, clickMenu } from './js/ui/dom/header';
import { setLogoutListener } from './js/ui/global/logout';
import { styleBody, styleMain } from './js/ui/styles/styleForms';
import { fontawsomeScript } from './js/utilities/fontawsome';

async function app() {
  await router(window.location.pathname);
  styleBody();
  styleMain();

  await buildHeader();
  fontawsomeScript();
  clickMenu();
  buildFooter();
  setLogoutListener();
}

app();
