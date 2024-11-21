import {
  authPage,
  homePage,
  newListingPage,
  // searchPage,
} from '../../utilities/pagePaths';
import { createHtmlElement } from './createElement';

export function buildHeader() {
  const header = document.querySelector('header');
  header.classList.add('flex', 'justify-center', 'w-screen');

  const nav = createHtmlElement({
    element: 'nav',
    id: 'nav',
    className: ['flex', 'w-full', 'max-w-[1920px]'],
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
    className: ['cursor-pointer', 'ml-5'],
    src: '/images/logo-lightMode.png',
    alt: 'BidMe logo',
  });
  logo.addEventListener('click', () => (window.location.href = homePage));

  const menuButton = createHtmlElement({
    element: 'button',
    id: 'menuButton',
    className: ['cursor-pointer', 'mr-5'],
  });
  console.log('in build header', menuButton);

  const menuIcon = createHtmlElement({
    element: 'i',
    className: ['fa-solid', 'fa-bars', 'text-2xl'],
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
      // 'mt-[75px]', // decide if i want it pushed down or all the way to the top
    ],
  });

  const dropDownContent = createHtmlElement({
    element: 'div',
    id: 'dropDownContent',
    className: [
      'flex',
      'flex-col',
      'gap-5',
      // 'w-auto',
      // 'max-w-[300px]',
    ],
  });

  const homeWrapper = createHtmlElement({
    element: 'div',
    className: ['flex', 'gap-2', 'items-center'],
  });

  const createWrapper = createHtmlElement({
    element: 'div',
    className: ['flex', 'gap-2', 'items-center'],
  });

  const logoutWrapper = createHtmlElement({
    element: 'div',
    className: ['flex', 'gap-2', 'items-center'],
  });

  const searchWrapper = createHtmlElement({
    element: 'div',
    className: ['flex', 'gap-2', 'items-center'],
  });

  const lightModeWrapper = createHtmlElement({
    element: 'div',
    className: ['flex', 'gap-2', 'items-center'],
  });

  const homeLink = createHtmlElement({
    element: 'a',
    textContent: 'Home',
    href: homePage,
    className: ['text-xs', 'md:text-base', 'lg:text-lg', 'font-bold'],
  });

  const createLink = createHtmlElement({
    element: 'a',
    textContent: 'Create New BidMe',
    href: newListingPage,
    className: ['text-xs', 'md:text-base', 'lg:text-lg', 'font-bold'],
  });

  const logoutLink = createHtmlElement({
    element: 'a',
    textContent: 'Logout',
    href: authPage,
    className: ['text-xs', 'md:text-base', 'lg:text-lg', 'font-bold'],
  });

  const searchLink = createHtmlElement({
    element: 'a',
    textContent: 'Search BidMe´s',
    // href: searchPage,
    className: ['text-xs', 'md:text-base', 'lg:text-lg', 'font-bold'],
  });

  const lightModeSwitch = createHtmlElement({
    element: 'div',
    textContent: 'Switch to Dark-Mode',
    className: ['text-xs', 'md:text-base', 'lg:text-lg', 'font-bold'],
  });

  const homeIcon = createHtmlElement({
    element: 'i',
    className: ['fa-solid', 'fa-house'],
  });

  const createIcon = createHtmlElement({
    element: 'i',
    className: ['fa-regular', 'fa-square-plus'],
  });

  const logoutIcon = createHtmlElement({
    element: 'i',
    className: ['fa-solid', 'fa-arrow-right-from-bracket'],
  });

  const searchIcon = createHtmlElement({
    element: 'i',
    className: ['fa-solid', 'fa-magnifying-glass'],
  });

  const lightModeIcon = createHtmlElement({
    element: 'i',
    className: ['fa-solid', 'fa-sun'],
  });

  homeWrapper.append(homeIcon, homeLink);
  createWrapper.append(createIcon, createLink);
  logoutWrapper.append(logoutIcon, logoutLink);
  searchWrapper.append(searchIcon, searchLink);
  lightModeWrapper.append(lightModeIcon, lightModeSwitch);

  dropDownContent.append(
    homeWrapper,
    createWrapper,
    logoutWrapper,
    searchWrapper,
    lightModeWrapper
  );
  dropDownWrapper.appendChild(dropDownContent);
  menuButton.appendChild(menuIcon);
  navWrapper.append(logo, menuButton, dropDownWrapper);
  nav.appendChild(navWrapper);
  header.appendChild(nav);
}

export function clickMenu() {
  const menuButton = document.getElementById('menuButton');
  const dropDownWrapper = document.getElementById('dropDownWrapper');

  menuButton.addEventListener('click', (event) => {
    event.stopPropagation();
    if (dropDownWrapper.classList.contains('w-0')) {
      dropDownWrapper.classList.remove('w-0');
      dropDownWrapper.classList.add('w-48', 'md:w-72', 'lg:w-96');
    } else {
      dropDownWrapper.classList.add('w-0');
      dropDownWrapper.classList.remove('w-48', 'md:w-72', 'lg:w-96');
    }
  });

  document.addEventListener('click', (event) => {
    if (
      !dropDownWrapper.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      dropDownWrapper.classList.add('w-0');
      dropDownWrapper.classList.remove('w-48', 'md:w-72', 'lg:w-96');
    }
  });
}
