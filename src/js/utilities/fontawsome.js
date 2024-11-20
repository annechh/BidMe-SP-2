import { createHtmlElement } from '../ui/dom/createElement';

export function fontawsomeScript() {
  const head = document.querySelector('head');

  const fontScript = createHtmlElement({
    element: 'script',
    src: 'https://kit.fontawesome.com/aacfbda896.js',
  });

  head.appendChild(fontScript);
}

fontawsomeScript();
