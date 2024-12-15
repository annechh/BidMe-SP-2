import { isPastDate } from '../dateUtils';
import { checkIfEmptyField } from './checkEmptyFields';

function textValidation(text, error) {
  if (text.length >= 280) {
    error.textContent = 'Needs to be less then 280 characters';
    error.classList.remove('hidden');
    return false;
  }
  error.textContent = '';
  error.classList.add('hidden');
  return true;
}

export function validateTitle() {
  const titleInput = document.getElementById('title');
  const titleError = document.getElementById('titleError');
  const title = titleInput.value;

  if (checkIfEmptyField(title, titleError)) {
    return false;
  }
  return textValidation(title, titleError);
}

export function validateDescription() {
  const descriptionInput = document.getElementById('description');
  const descriptionError = document.getElementById('descriptionError');
  const description = descriptionInput.value;

  return textValidation(description, descriptionError);
}

function tagsValidation(tags = [], error) {
  if (!Array.isArray(tags)) {
    error.textContent = 'Tags should be an array.';
    error.classList.remove('hidden');
    return false;
  }
  if (tags.length > 8) {
    error.textContent = 'You can have no more than 8 tags.';
    error.classList.remove('hidden');
    return false;
  }
  if (tags.some((tag) => tag.length > 24)) {
    error.textContent = 'Each tag should be no longer than 24 characters.';
    error.classList.remove('hidden');
    return false;
  }
  error.textContent = '';
  error.classList.add('hidden');
  return true;
}

export function validateTags() {
  const tagsInput = document.getElementById('tags');
  const tagsError = document.getElementById('tagsError');

  const tags = tagsInput.value.split(',').map((tag) => tag.trim());

  return tagsValidation(tags, tagsError);
}

export function mediaValidation(media, error) {
  if (media.length > 300) {
    error.textContent =
      'Image URL is too long. Maximum length is 300 characters.';
    error.classList.remove('hidden');
    return false;
  }

  error.textContent = '';
  error.classList.add('hidden');
  return true;
}

export function validateMedia() {
  const imageInput = document.getElementById('image');
  const imageError = document.getElementById('imageError');
  const previewImageElement = document.getElementById('previewImage');
  const media = imageInput.value;

  if (previewImageElement.querySelector('img')) {
    imageError.textContent = '';
    imageError.classList.add('hidden');
    return true;
  }

  if (checkIfEmptyField(media, imageError)) {
    return false;
  }
  return mediaValidation(media, imageError);
}

export function isDateSelected(date) {
  return date.trim() !== '';
}

export function dateValidation(date, error) {
  if (!date) {
    error.textContent = 'Please select an ending date.';
    error.classList.remove('hidden');
    return false;
  }
  if (isPastDate(date)) {
    error.textContent = 'The selected date cannot be in the past.';
    error.classList.remove('hidden');
    return false;
  }
  error.textContent = '';
  error.classList.add('hidden');
  return true;
}

export function validateDate() {
  const dateInput = document.getElementById('date');
  const dateError = document.getElementById('dateError');

  const date = dateInput.value;

  if (checkIfEmptyField(date, dateError)) {
    return false;
  }
  if (isNaN(Date.parse(date))) {
    dateError.textContent = 'Invalid date format. Please select a valid date.';
    dateError.classList.remove('hidden');
    return false;
  }
  return dateValidation(date, dateError);
}
