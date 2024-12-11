import { readProfileName } from '../../api/profile/read';
import { getLocalStorage } from '../../utilities/localStorage';
import {
  HOME_PAGE,
  LOGIN_PAGE,
  NEW_LISTING_PAGE,
  PROFILE_PAGE,
  REGISTER_PAGE,
  SEARCH_PAGE,
} from '../../utilities/pagePaths';
import { createHtmlElement } from './createElement';

export const IS_LOGGED_IN = localStorage.accessToken ? 'flex' : 'none';
export const IS_LOGGED_OUT = localStorage.accessToken ? 'none' : 'flex';

export async function buildHeader(profileData) {
  const userData = getLocalStorage();

  if (userData) {
    profileData = await readProfileName(userData.name);
    // console.log('profileData', profileData);
  }

  const header = document.querySelector('header');
  header.classList.add(
    'flex',
    'justify-center',
    'w-screen',
    'fixed',
    'z-30',
    'bg-white'
  );

  const nav = createHtmlElement({
    element: 'nav',
    id: 'nav',
    className: ['flex', 'w-full'],
  });

  const navWrapper = createHtmlElement({
    element: 'div',
    className: [
      'relative',
      'logo-container',
      'flex',
      'justify-between',
      'items-center',
      'w-full',
    ],
  });

  const logo = createHtmlElement({
    element: 'img',
    className: [
      'cursor-pointer',
      'ml-5',
      'max-h-[50px]',
      'md:max-h-[60px]',
      'lg:max-h-[75px]',
    ],
    src: '/images/logo-lightMode.png',
    alt: 'BidMe logo',
  });
  logo.addEventListener('click', () => (window.location.href = HOME_PAGE));

  const menuButton = createHtmlElement({
    element: 'button',
    id: 'menuButton',
    className: ['menuButton', 'cursor-pointer', 'mr-5', 'relative'],
  });

  const menuIcon = createHtmlElement({
    element: 'i',
    id: 'menuIcon',
    className: [
      'fa-solid',
      'fa-bars',
      'text-2xl',
      'text-black',
      'transition-transform',
    ],
  });

  const dropDownWrapper = createHtmlElement({
    element: 'div',
    id: 'dropDownWrapper',
    className: [
      'absolute',
      'right-0',
      'top-0',
      'flex',
      'flex-col',
      'items-center',
      'space-y-4',
      'h-screen',
      'overflow-hidden',
      'w-0',
      'transition-all',
      'duration-500',
      'text-nowrap',
      'transform-origin-right',
      'bg-white',
      'drop-shadow-darkFaded',
      'z-40',
    ],
  });

  const dropDownContent = createHtmlElement({
    element: 'div',
    id: 'dropDownContent',
    className: [
      'flex',
      'flex-col',
      'gap-8',
      'md:gap-12',
      'lg:gap-20',
      'mt-[50px]',
      'md:mt-[60px]',
      'lg:mt-[75px]',
      'text-xs',
      'md:text-base',
      'lg:text-lg',
      'font-bold',
    ],
  });

  const imageCreditsWrapper = createHtmlElement({
    element: 'div',
    className: ['flex', 'flex-col', 'items-center', 'gap-5'],
  });

  const profileAvatarContainer = createHtmlElement({
    element: 'div',
    className: [
      'flex',
      'justify-center',
      'items-center',
      'overflow-hidden',
      'w-full',
      'rounded-full',
      'h-[50px]',
      'max-w-[50px]',
      'md:h-[75px]',
      'md:max-w-[75px]',
      'lg:h-[100px]',
      'lg:max-w-[100px]',
    ],
  });
  profileAvatarContainer.addEventListener('click', () => {
    window.location.href = `${PROFILE_PAGE}?name=${userData.name}`;
  });

  const profileAvatar = createHtmlElement({
    element: 'img',
    id: 'avatarHeader',
    className: ['object-cover', 'w-full', 'h-full'],
  });
  if (profileData) {
    profileAvatar.src = profileData.profile.avatar.url;
    profileAvatar.alt = profileData.profile.avatar.alt;
  } else {
    profileAvatar.src = '/images/logo-lightMode.png';
    profileAvatar.alt = 'Logo';
  }

  const creditsContainer = createHtmlElement({
    element: 'div',
    className: ['flex', 'items-center', 'gap-2'],
  });
  creditsContainer.style.display = IS_LOGGED_IN;

  const credits = createHtmlElement({
    element: 'p',
    className: [],
  });
  if (profileData) {
    credits.textContent = profileData.profile.credits;
  }

  const creditsIcon = createHtmlElement({
    element: 'i',
    className: ['fa-solid', 'fa-coins'],
  });

  profileAvatarContainer.appendChild(profileAvatar);
  creditsContainer.append(credits, creditsIcon);
  imageCreditsWrapper.append(profileAvatarContainer, creditsContainer);

  const navigationWrapper = createHtmlElement({
    element: 'div',
    className: ['flex', 'flex-col', 'gap-5'],
  });

  const homeContainer = createHtmlElement({
    element: 'div',
    className: ['flex', 'gap-2', 'items-center'],
  });

  const createContainer = createHtmlElement({
    element: 'div',
    className: ['flex', 'gap-2', 'items-center'],
  });
  createContainer.addEventListener('click', () => {
    window.location.href = NEW_LISTING_PAGE;
  });
  createContainer.style.display = IS_LOGGED_IN;

  const loginContainer = createHtmlElement({
    element: 'div',
    id: 'loginButton',
    className: ['flex', 'gap-2', 'items-center', 'cursor-pointer'],
  });
  loginContainer.style.display = IS_LOGGED_OUT;
  loginContainer.addEventListener('click', () => {
    window.location.href = LOGIN_PAGE;
  });

  const logoutContainer = createHtmlElement({
    element: 'div',
    id: 'logoutButton',
    className: ['flex', 'gap-2', 'items-center', 'cursor-pointer'],
  });
  logoutContainer.style.display = IS_LOGGED_IN;

  const registerContainer = createHtmlElement({
    element: 'div',
    className: ['flex', 'gap-2', 'items-center', 'cursor-pointer'],
  });
  registerContainer.style.display = IS_LOGGED_OUT;
  registerContainer.addEventListener('click', () => {
    window.location.href = REGISTER_PAGE;
  });

  const searchContainer = createHtmlElement({
    element: 'div',
    className: ['flex', 'gap-2', 'items-center', 'cursor-pointer'],
  });
  searchContainer.addEventListener('click', () => {
    window.location.href = SEARCH_PAGE;
  });

  const lightModeContainer = createHtmlElement({
    element: 'div',
    className: ['flex', 'gap-2', 'items-center'],
  });

  const homeLink = createHtmlElement({
    element: 'a',
    textContent: 'Home',
    href: HOME_PAGE,
    className: [],
  });

  const createLink = createHtmlElement({
    element: 'a',
    textContent: 'Create New BidMe',
    href: NEW_LISTING_PAGE,
    className: [],
  });

  const loginButton = createHtmlElement({
    element: 'p',
    textContent: 'Login',
    className: [],
  });

  const logoutButton = createHtmlElement({
    element: 'p',
    textContent: 'Logout',
    className: [],
  });

  const registerButton = createHtmlElement({
    element: 'p',
    textContent: 'Register',
  });

  const searchLink = createHtmlElement({
    element: 'a',
    textContent: 'Search BidMe´s',
    // href: SEARCH_PAGE,
    className: [],
  });

  const lightModeSwitch = createHtmlElement({
    element: 'div',
    textContent: 'Switch to Dark-Mode',
    className: [],
  });

  const homeIcon = createHtmlElement({
    element: 'i',
    className: ['fa-solid', 'fa-house', 'w-[20px]'],
  });

  const createIcon = createHtmlElement({
    element: 'i',
    className: ['fa-solid', 'fa-circle-plus', 'w-[20px]'],
  });

  const loginIcon = createHtmlElement({
    element: 'i',
    className: ['fa-solid', 'fa-right-to-bracket', 'w-[20px]'],
  });

  const logoutIcon = createHtmlElement({
    element: 'i',
    className: ['fa-solid', 'fa-right-from-bracket', 'w-[20px]'],
  });

  const registerIcon = createHtmlElement({
    element: 'i',
    className: ['fa-solid', 'fa-user-plus', 'w-[20px]'],
  });

  const searchIcon = createHtmlElement({
    element: 'i',
    className: ['fa-solid', 'fa-magnifying-glass', 'w-[20px]'],
  });

  const lightModeIcon = createHtmlElement({
    element: 'i',
    className: ['fa-solid', 'fa-sun', 'w-[20px]'],
  });

  homeContainer.append(homeIcon, homeLink);
  createContainer.append(createIcon, createLink);
  registerContainer.append(registerIcon, registerButton);
  logoutContainer.append(logoutIcon, logoutButton);
  loginContainer.append(loginIcon, loginButton);
  searchContainer.append(searchIcon, searchLink);
  lightModeContainer.append(lightModeIcon, lightModeSwitch);
  navigationWrapper.append(
    homeContainer,
    createContainer,
    loginContainer,
    logoutContainer,
    registerContainer,
    searchContainer,
    lightModeContainer
  );

  dropDownContent.append(imageCreditsWrapper, navigationWrapper);
  dropDownWrapper.append(dropDownContent);
  menuButton.appendChild(menuIcon);
  navWrapper.append(logo, menuButton, dropDownWrapper);
  nav.appendChild(navWrapper);
  header.appendChild(nav);
}

export function clickMenu() {
  const menuButton = document.getElementById('menuButton');
  const menuIcon = document.getElementById('menuIcon');
  const dropDownWrapper = document.getElementById('dropDownWrapper');

  menuButton.addEventListener('click', (event) => {
    event.stopPropagation();
    dropDownWrapper.classList.contains('w-0') ? openMenu() : closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (
      !dropDownWrapper.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      closeMenu();
    }
  });

  function toggleClasses(element, addClasses = [], removeClasses = []) {
    element.classList.add(...addClasses);
    element.classList.remove(...removeClasses);
  }

  function openMenu() {
    toggleClasses(dropDownWrapper, ['w-56', 'md:w-72', 'lg:w-96'], ['w-0']);
    toggleClasses(menuButton, ['z-50']);
    toggleClasses(menuIcon, ['fa-xmark', 'rotate-180'], ['fa-bars']);
  }

  function closeMenu() {
    if (dropDownWrapper.classList.contains('w-0')) return;

    toggleClasses(dropDownWrapper, ['w-0'], ['w-56', 'md:w-72', 'lg:w-96']);
    toggleClasses(menuButton, [], ['z-50']);
    toggleClasses(menuIcon, ['opacity-0'], ['rotate-180', 'opacity-100']);

    setTimeout(() => {
      toggleClasses(
        menuIcon,
        ['fa-bars', 'opacity-100'],
        ['fa-xmark', 'opacity-0']
      );
    }, 300);
  }
}
