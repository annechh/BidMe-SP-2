export function styleBody() {
  const body = document.querySelector('body');
  body.classList.add(
    'flex',
    'flex-col',
    'items-center',
    'min-h-screen',
    'font-roboto'
  );
}

export function styleMain() {
  const main = document.querySelector('main');
  main.classList.add(
    'flex',
    'flex-grow',
    'w-full',
    'flex-col',
    'items-center',
    'justify-center',
    'mt-[50px]',
    'md:mt-[60px]',
    'lg:mt-[75px]'
  );
}
