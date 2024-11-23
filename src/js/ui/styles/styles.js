export function styleBody() {
  const body = document.querySelector('body');
  body.classList.add('flex', 'flex-col', 'items-center', 'min-h-screen');
}

export function styleMain() {
  const main = document.querySelector('main');
  main.classList.add('flex-grow');
}
