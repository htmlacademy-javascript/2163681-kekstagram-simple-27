const uploadFileSelector = document.querySelector('#upload-file');
const imgUploadOverlaySelector = document.querySelector('.img-upload__overlay');
const bodySelector = document.querySelector('body');
const uploadCancel = document. querySelector('#upload-cancel');
const imgUploadForm = document.querySelector('.img-upload__form');

function opensModalWindow() {
  imgUploadOverlaySelector.classList.remove('hidden');
  bodySelector.classList.add('modal-open');
}

function closeModalWindow() {
  imgUploadForm.reset();
  imgUploadOverlaySelector.classList.add('hidden');
  bodySelector.classList.remove('modal-open');
  document.addEventListener('keydown', onModalWindowKeydown);
}

function onModalWindowKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    imgUploadOverlaySelector.classList.add('hidden');
    bodySelector.classList.remove('modal-open');
  }
}

uploadFileSelector.addEventListener('change', opensModalWindow);
uploadCancel.addEventListener('click', closeModalWindow);
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closeModalWindow();
  }
});

