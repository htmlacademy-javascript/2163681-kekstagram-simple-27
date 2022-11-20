import { resetScale } from './photo-scale.js';
import { resetPhotoFilter } from './photo-filter.js';
import { sendData } from './fetch-service.js';
import { fileUploadError } from './massages.js';
import { fileUploadSuccess } from './massages.js';

const uploadFileSelector = document.querySelector('#upload-file');
const imgUploadOverlaySelector = document.querySelector('.img-upload__overlay');
const bodySelector = document.querySelector('body');
const uploadCancel = document.querySelector('#upload-cancel');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const imgUploadSubmitSelector = document.querySelector('.img-upload__submit');

function onInputOpenModalChange() {
  imgUploadPreview.children[0].src = window.URL.createObjectURL(uploadFileSelector.files[0]);
  imgUploadOverlaySelector.classList.remove('hidden');
  bodySelector.classList.add('modal-open');
  document.addEventListener('keydown', keydown);
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
  if (evt.key === 'Escape' && !document.getElementsByClassName('error').length) {
    evt.preventDefault();
    imgUploadOverlaySelector.classList.add('hidden');
    bodySelector.classList.remove('modal-open');
  }
}

function onImgUploadFormSubmit(evt) {
  evt.preventDefault();
  const pristine = new Pristine(imgUploadForm);
  const isValid = pristine.validate();

  if (isValid) {
    imgUploadSubmitSelector.disabled = 'true';
    const formData = new FormData(evt.target);
    sendData(formData).then((response) => {
      if (response.ok) {
        imgUploadSubmitSelector.disabled = null;
        fileUploadSuccess();
        onButtonCloseModalClick();
      } else {
        imgUploadSubmitSelector.disabled = null;
        fileUploadError();
      }
    });
  }
}

uploadFileSelector.addEventListener('change', onInputOpenModalChange);
uploadCancel.addEventListener('click', onButtonCloseModalClick);

function keydown(event) {
  if (event.key === 'Escape' && !document.getElementsByClassName('error').length) {
    onButtonCloseModalClick();
    document.removeEventListener('keydown', keydown);
  }
}

imgUploadForm.addEventListener('submit', onImgUploadFormSubmit);
