import { createHtmlElement } from '../../ui/dom/createElement';

export function displayMessage(container, messageType, message) {
  const parent = document.querySelector(container);

  const existingMessage = parent.querySelector('.alert');
  if (existingMessage) {
    existingMessage.remove();
  }

  const div = createHtmlElement({
    element: 'div',
    className: [`alert`, `alert-${messageType}`],
    textContent: message,
  });

  parent.append(div);
}
