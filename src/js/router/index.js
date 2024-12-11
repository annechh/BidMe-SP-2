export default async function router(pathname = window.location.pathname) {
  switch (pathname) {
    case '/':
      await import('./views/home.js');
      break;
    case '/pages/auth/':
      await import('./views/auth.js');
      break;
    case '/pages/auth/login/':
      await import('./views/login.js');
      break;
    case '/pages/auth/register/':
      await import('./views/register.js');
      break;
    case '/pages/listing/':
      await import('./views/listing.js');
      break;
    case '/pages/listing/create/':
      await import('./views/listingCreate.js');
      break;
    case '/pages/profile/':
      await import('./views/profile.js');
      break;
    case '/pages/search/':
      await import('./views/search.js');
      break;
  }
}
