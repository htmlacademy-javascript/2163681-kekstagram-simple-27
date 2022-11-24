import { resetScale } from './photo-scale.js';
import { resetPhotoFilter } from './photo-filter.js';
import { sendData } from './fetch-service.js';
import { showModal } from './messages.js';
import { isEscPressed, isOpenErrorModal } from './utils.js';

const uploadFileSelector = document.querySelector('#upload-file');
const imgUploadOverlaySelector = document.querySelector('.img-upload__overlay');
const bodySelector = document.querySelector('body');
const uploadCancel = document.querySelector('#upload-cancel');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const imgUploadSubmitSelector = document.querySelector('.img-upload__submit');

const clearForm = () => {
  imgUploadForm.reset();
  resetScale();
  resetPhotoFilter();
  imgUploadOverlaySelector.classList.add('hidden');
  bodySelector.classList.remove('modal-open');
};

const onCloseModalKeydown = (evt) => {
  if (isEscPressed(evt) && !isOpenErrorModal()) {
    clearForm();
    document.removeEventListener('keydown', onCloseModalKeydown);
  }
};

const onButtonCloseModalClick = () => {
  clearForm();
  document.removeEventListener('keydown', onCloseModalKeydown);
};

const onInputOpenModalChange = () => {
  imgUploadPreview.children[0].src = window.URL.createObjectURL(uploadFileSelector.files[0]);
  imgUploadOverlaySelector.classList.remove('hidden');
  bodySelector.classList.add('modal-open');
  document.addEventListener('keydown', onCloseModalKeydown);
};

const onImgUploadFormSubmit = (evt) => {
  evt.preventDefault();
  const pristine = new Pristine(imgUploadForm);
  const isValid = pristine.validate();

  if (isValid) {
    imgUploadSubmitSelector.disabled = true;
    const formData = new FormData(evt.target);
    sendData(formData).then((response) => {
      if (response.ok) {
        imgUploadSubmitSelector.disabled = false;
        showModal('success');
        onButtonCloseModalClick();
      } else {
        imgUploadSubmitSelector.disabled = false;
        showModal('error');
      }
    });
  }
};

uploadFileSelector.addEventListener('change', onInputOpenModalChange);
uploadCancel.addEventListener('click', onButtonCloseModalClick);
imgUploadForm.addEventListener('submit', onImgUploadFormSubmit);
