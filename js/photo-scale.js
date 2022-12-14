const MAX_PHOTO_SCALE = 100;
const MIN_PHOTO_SCALE = 25;
const STEP_PHOTO_SCALE = 25;

const scaleControlSmallerSelector = document.querySelector('.scale__control--smaller');
const scaleControlBiggerSelector = document.querySelector('.scale__control--bigger');
const scaleControlValueSelector = document.querySelector('.scale__control--value');
const imgUploadPreviewSelector = document.querySelector('.img-upload__preview');

const changesScale = (scale = 100) => {
  imgUploadPreviewSelector.style.transform = `scale(${scale / 100})`;
  scaleControlValueSelector.value = `${scale}%`;
};

const onButtonIncreasesScaleClick = () => {
  let newValue = Number(scaleControlValueSelector.value.slice(0, -1)) + STEP_PHOTO_SCALE;
  if (newValue > MAX_PHOTO_SCALE) {
    newValue = MAX_PHOTO_SCALE;
  }
  changesScale(newValue);
};

const onButtonDecreaseScaleClick = () => {
  let newValue = (scaleControlValueSelector.value.slice(0, -1)) - STEP_PHOTO_SCALE;
  if (newValue < MIN_PHOTO_SCALE) {
    newValue = MIN_PHOTO_SCALE;
  }
  changesScale(newValue);
};

const resetScale = () => changesScale();

scaleControlBiggerSelector.addEventListener('click', onButtonIncreasesScaleClick);
scaleControlSmallerSelector.addEventListener('click', onButtonDecreaseScaleClick);

export { resetScale };
