import { createListing } from '../../api/listing/create';
import {
  mediaValidation,
  validateDate,
  validateDescription,
  validateMedia,
  validateTags,
  validateTitle,
} from '../../utilities/validation/validateCreateListing';
import { createHtmlElement } from '../dom/createElement';

const mediaArray = [];
const maxImages = 6;

export async function onCreateListing(event) {
  event.preventDefault();

  const form = new FormData(event.target);

  const mediaInput = form.getAll('media');

  if (mediaInput.length > maxImages) {
    alert('You can upload a maximum of ' + maxImages + ' images.');
    return;
  }

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

  const isTitleValid = validateTitle(getForms.title);
  const isDescriptionValid = validateDescription(getForms.description);
  const isDateValid = validateDate(getForms.endsAt);
  const isTagsValid = validateTags(getForms.tags);
  const isMediaValid = validateMedia(getForms.mediaArray);

  if (
    !isTitleValid ||
    !isDescriptionValid ||
    !isDateValid ||
    !isTagsValid ||
    !isMediaValid
  ) {
    return;
  }
  await createListing(getForms);
}

export function addImage(url) {
  const previewImageElement = document.getElementById('previewImage');
  const imageError = document.getElementById('imageError');

  if (!mediaValidation(url, imageError)) {
    return;
  }

  if (mediaArray.length >= maxImages) {
    return;
  }

  if (url.trim()) {
    const image = { url: url.trim(), alt: 'Media Gallery' };
    mediaArray.push(image);

    if (previewImageElement.querySelector('img')) {
      imageError.textContent = '';
      imageError.classList.add('hidden');
    }

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
        'rounded-t',
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
        'fa-solid',
        'fa-xmark',
        'h-[50px]',
        'w-full',
        'bg-delete',
        'rounded-b',
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

// import { createListing } from '../../api/listing/create';
// import { createHtmlElement } from '../dom/createElement';

// const mediaArray = [];
// const maxImages = 6;

// export async function onCreateListing(event) {
//   event.preventDefault();

//   const form = new FormData(event.target);

//   const getForms = {
//     title: form.get('title'),
//     endsAt: form.get('date'),
//     description: form.get('description'),
//     tags: form.get('tags')
//       ? form
//           .get('tags')
//           .split(', ')
//           .map((tag) => tag.trim())
//       : [],
//     media: mediaArray,
//   };

//   await createListing(getForms);
// }

// export function addImage(url) {
//   if (mediaArray.length >= maxImages) {
//     return;
//   }

//   if (url.trim()) {
//     const image = { url: url.trim(), alt: 'Media Gallery' };
//     mediaArray.push(image);

//     previewImage();
//     toggleInputVisibility();
//   }
// }

// export function previewImage() {
//   const previewContainer = document.getElementById('previewImage');
//   previewContainer.classList.add(
//     'preview',
//     'grid',
//     'grid-cols-2',
//     'gap-2',
//     'max-w-[600px]',
//     'w-full'
//   );
//   previewContainer.innerHTML = '';

//   mediaArray.forEach((image, index) => {
//     const wrapper = createHtmlElement({
//       element: 'div',
//       className: [
//         'wrapper',
//         'flex',
//         'flex-col',
//         'items-center',
//         'max-h-[250px]',
//         'h-full',
//         'w-full',
//       ],
//     });

//     const imageContainer = createHtmlElement({
//       element: 'div',
//       className: [
//         'img-container',
//         'flex',
//         'justify-center',
//         'items-center',
//         'h-[100px]',
//         'md:h-[150px]',
//         'lg:h-[300px]',
//         'w-full',
//         'overflow-hidden',
//         'rounded-t',
//       ],
//     });

//     const imageElement = createHtmlElement({
//       element: 'img',
//       src: image.url,
//       className: ['prev-img', 'w-full', 'h-full', 'object-cover'],
//     });

//     const removeButton = createHtmlElement({
//       element: 'button',
//       className: [
//         'btn-x',
//         'font-bold',
//         'fa-solid',
//         'fa-xmark',
//         'h-[50px]',
//         'w-full',
//         'bg-delete',
//         'rounded-b',
//       ],
//     });
//     removeButton.addEventListener('click', () => {
//       removeImage(index);
//     });

//     imageContainer.append(imageElement);
//     wrapper.append(imageContainer, removeButton);
//     previewContainer.appendChild(wrapper);
//   });
// }

// function removeImage(index) {
//   mediaArray.splice(index, 1);
//   previewImage();
//   toggleInputVisibility();
// }

// export function toggleInputVisibility() {
//   const addImageButton = document.getElementById('addImageButton');
//   const imageInput = document.getElementById('image');

//   if (mediaArray.length >= maxImages) {
//     addImageButton.style.display = 'none';
//     imageInput.style.display = 'none';
//   } else {
//     addImageButton.style.display = '';
//     imageInput.style.display = '';
//   }
// }
