export function createElement({
  id,
  className = [],
  element,
  textContent,
  src,
  alt,
}) {
  const htmlElement = document.createElement(element);
  htmlElement.textContent = textContent;
  if (className.length) {
    htmlElement.classList.add(...className);
  }

  if (id) {
    htmlElement.id = id;
  }

  if (src || alt) {
    htmlElement.src = src;
    htmlElement.alt = alt ?? 'Gallery Listing';
  }

  return htmlElement;
}
