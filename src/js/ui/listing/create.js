import { createListing } from '../../api/listing/create';
import { createHtmlElement } from '../dom/createElement';

const mediaArray = [];
const maxImages = 6;

export async function onCreateListing(event) {
  event.preventDefault();

  const form = new FormData(event.target);

  const getForms = {
    title: form.get('title'),
    endsAt: form.get('date'),
    description: form.get('description'),
    tags: form.get('tags')
      ? form
          .get('tags')
          .split(', ')
          .map((tag) => tag.trim())
      : [],
    media: mediaArray,
  };

  await createListing(getForms);
}

export function addImage(url) {
  if (mediaArray.length >= maxImages) {
    return;
  }

  if (url.trim()) {
    const image = { url: url.trim(), alt: 'Media Gallery' };
    mediaArray.push(image);

    previewImage();
    toggleInputVisibility();
  }
}

export function previewImage() {
  const previewContainer = document.getElementById('previewImage');
  previewContainer.classList.add(
    'preview',
    'grid',
    'grid-cols-2',
    'gap-2',
    'max-w-[600px]',
    'w-full'
  );
  previewContainer.innerHTML = '';

  mediaArray.forEach((image, index) => {
    const wrapper = createHtmlElement({
      element: 'div',
      className: [
        'wrapper',
        'flex',
        'flex-col',
        'items-center',
        'max-h-[250px]',
        'h-full',
        'w-full',
      ],
    });

    const imageContainer = createHtmlElement({
      element: 'div',
      className: [
        'img-container',
        'flex',
        'justify-center',
        'items-center',
        'h-[100px]',
        'md:h-[150px]',
        'lg:h-[300px]',
        'w-full',
        'overflow-hidden',
      ],
    });

    const imageElement = createHtmlElement({
      element: 'img',
      src: image.url,
      className: ['prev-img', 'w-full', 'h-full', 'object-cover'],
    });

    const removeButton = createHtmlElement({
      element: 'button',
      className: [
        'btn-x',
        'font-bold',
        'text-2xl',
        'text-delete',
        'fa-solid',
        'fa-xmark',
      ],
    });
    removeButton.addEventListener('click', () => {
      removeImage(index);
    });

    imageContainer.append(imageElement);
    wrapper.append(imageContainer, removeButton);
    previewContainer.appendChild(wrapper);
  });
}

function removeImage(index) {
  mediaArray.splice(index, 1);
  previewImage();
  toggleInputVisibility();
}

export function toggleInputVisibility() {
  const addImageButton = document.getElementById('addImageButton');
  const imageInput = document.getElementById('image');

  if (mediaArray.length >= maxImages) {
    addImageButton.style.display = 'none';
    imageInput.style.display = 'none';
  } else {
    addImageButton.style.display = '';
    imageInput.style.display = '';
  }
}
