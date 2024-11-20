import { createHtmlElement } from './createElement';

export function buildHeader() {
  const header = document.querySelector('header');
  header.classList.add('flex', 'justify-center', 'w-screen');

  const nav = createHtmlElement({
    element: 'nav',
    id: 'nav',
    className: ['flex', 'w-full', 'max-w-[1920px]'],
  });

  const wrapper = createHtmlElement({
    element: 'div',
    className: ['logo-container', 'flex', 'justify-between', 'w-full', 'mx-2'],
  });

  const logo = createHtmlElement({
    element: 'img',
    src: '/images/logo-lightMode.png',
    alt: 'BidMe logo',
  });

  const menu = createHtmlElement({
    element: 'button',
    className: ['pointer'],
  });

  const menuIcon = createHtmlElement({
    element: 'i',
    className: ['fa-solid', 'fa-bars'],
  });

  menu.appendChild(menuIcon);
  wrapper.append(logo, menu);
  nav.appendChild(wrapper);
  header.appendChild(nav);
}
