import {
  addImage,
  onCreateListing,
  previewImage,
  toggleInputVisibility,
} from '../../ui/listing/create';
import { formStyle } from '../../ui/styles/styleForms';

async function loadCreatePage() {
  formStyle();

  const form = document.forms.create;
  form.addEventListener('submit', onCreateListing);

  const addImageButton = document.getElementById('addImageButton');
  const imageInput = document.getElementById('image');

  addImageButton.addEventListener('click', () => {
    const imageUrl = imageInput.value;
    if (imageUrl) {
      addImage(imageUrl);
      imageInput.value = '';
    }
  });

  toggleInputVisibility();
  previewImage();
}

loadCreatePage();
