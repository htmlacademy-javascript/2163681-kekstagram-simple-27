const imgUploadPreviewSelector = document.querySelector('.img-upload__preview');
const effectLevelSliderSelector = document.querySelector('.effect-level__slider');
const effectLevelValueSelector = document.querySelector('.effect-level__value');
const effectsListSelector = document.querySelector('.effects__list');
const imgUploadEffectLevelSelector = document.querySelector('.img-upload__effect-level');

const PHOTO_FILTER_EFFECTS = [
  {
    name: 'none',
    filter: 'none',
    max: 100,
    min: 0,
    step: 1,
    measure: ''
  },
  {
    name: 'chrome',
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    measure: ''

  },
  {
    name: 'sepia',
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    measure: ''
  },
  {
    name: 'marvin',
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1,
    measure: '%'
  },
  {
    name: 'phobos',
    filter: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    measure: 'px'
  },
  {
    name: 'heat',
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    measure: ''
  }
];

hideSlider();

function onListEffectsChange(evt) {
  const filterEffectValue = evt.target.value;
  const newPhotoFilterEffectClass = `effects__preview--${filterEffectValue}`;

  removePhotoFilterEffectClass();
  addPhotoFilterEffectClass(newPhotoFilterEffectClass);
  destroyNoUiSlider();


  if (filterEffectValue === 'none') {
    hideSlider();
    imgUploadPreviewSelector.style.filter = null;
  } else {
    showSlider();
    const photoFilterEffect = PHOTO_FILTER_EFFECTS.find((effect) => effect.name === filterEffectValue);
    addNoUiSlider(photoFilterEffect);
    effectLevelSliderSelector.noUiSlider.on('update', (values) => {
      effectLevelValueSelector.value = `${values[0]}${photoFilterEffect.measure}`;
      imgUploadPreviewSelector.style.filter = `${photoFilterEffect.filter}(${values[0]}${photoFilterEffect.measure})`;
    });
  }
}

function addNoUiSlider(params) {
  noUiSlider.create(effectLevelSliderSelector, {
    range: {
      min: params.min,
      max: params.max,
    },
    start: params.max,
    step: params.step,
    connect: 'lower'
  });
}

function resetPhotoFilter() {
  hideSlider();
  imgUploadPreviewSelector.style.filter = null;
  destroyNoUiSlider();
  effectLevelValueSelector.value = '';
  removePhotoFilterEffectClass();
}

function removePhotoFilterEffectClass() {
  imgUploadPreviewSelector.classList.forEach((className) => {
    if (className.includes('effects__preview--')) {
      imgUploadPreviewSelector.classList.remove(className);
    }
  });
}

function addPhotoFilterEffectClass(photoFilterEffectClass) {
  imgUploadPreviewSelector.classList.add(photoFilterEffectClass);
}

function destroyNoUiSlider() {
  if (effectLevelSliderSelector.noUiSlider) {
    effectLevelSliderSelector.noUiSlider.destroy();
  }
}

function hideSlider() {
  imgUploadEffectLevelSelector.classList.add('hidden');
}

function showSlider() {
  imgUploadEffectLevelSelector.classList.remove('hidden');
}

effectsListSelector.addEventListener('change', onListEffectsChange);

export { resetPhotoFilter };
