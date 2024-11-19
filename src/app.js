import './css/style.css';

import router from './js/router';

async function app() {
  await router(window.location.pathname);
}

app();
