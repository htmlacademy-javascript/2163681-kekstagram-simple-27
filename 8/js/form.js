import { resetScale } from './photo-scale.js';
import { resetPhotoFilter } from './photo-filter.js';

const uploadFileSelector = document.querySelector('#upload-file');
const imgUploadOverlaySelector = document.querySelector('.img-upload__overlay');
const bodySelector = document.querySelector('body');
const uploadCancel = document.querySelector('#upload-cancel');
const imgUploadForm = document.querySelector('.img-upload__form');

function onInputOpenModalChange() {
  imgUploadOverlaySelector.classList.remove('hidden');
  bodySelector.classList.add('modal-open');
}

function onButtonCloseModalClick() {
  imgUploadForm.reset();
  resetScale();
  resetPhotoFilter();
  imgUploadOverlaySelector.classList.add('hidden');
  bodySelector.classList.remove('modal-open');
  document.addEventListener('keydown', onEscHideModalKeydown);
}

function onEscHideModalKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    imgUploadOverlaySelector.classList.add('hidden');
    bodySelector.classList.remove('modal-open');
  }
}

uploadFileSelector.addEventListener('change', onInputOpenModalChange);
uploadCancel.addEventListener('click', onButtonCloseModalClick);
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    onButtonCloseModalClick();
  }
});
