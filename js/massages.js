const MESSAGE_DISPLAY_TIME = 5000;
const pictureSection = document.querySelector('.pictures');

function fileUploadError() {
  const errorNoda = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
  pictureSection.appendChild(errorNoda);

  pictureSection.querySelector('.error__button').addEventListener('click', () => {
    if (pictureSection.contains(errorNoda)) {
      pictureSection.removeChild(errorNoda);
    }
  });

  document.body.addEventListener('click', (evt) => anyClick(evt, errorNoda, 'error'));

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' && pictureSection.contains(errorNoda)) {
      pictureSection.removeChild(errorNoda);
    }
  });
}

function fileUploadSuccess() {
  const successSelect = document.querySelector('#success').content.querySelector('.success');
  const successNode = successSelect.cloneNode(true);
  pictureSection.appendChild(successNode);

  pictureSection.querySelector('.success__button').addEventListener('click', () => {
    if (pictureSection.contains(successNode)) {
      pictureSection.removeChild(successNode);
    }
  });

  document.body.addEventListener('click', (evt) => anyClick(evt, successNode, 'success'));

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' && pictureSection.contains(successNode)) {
      pictureSection.removeChild(successNode);
    }
  }, { once: true });
}

function anyClick(event, child, type) {
  const innerSelector = pictureSection.querySelector(`.${type}__inner`);
  if (innerSelector && !innerSelector.contains(event.target) && pictureSection.contains(child)) {
    pictureSection.removeChild(child);
    document.body.removeEventListener('click', anyClick);
  }
}

function showErrorMassage(massage) {
  const caseErrorMassage = document.createElement('div');
  caseErrorMassage.style.zIndex = 100;
  caseErrorMassage.style.position = 'absolute';
  caseErrorMassage.style.left = 0;
  caseErrorMassage.style.top = 0;
  caseErrorMassage.style.right = '77%';
  caseErrorMassage.style.padding = '10px 3px';
  caseErrorMassage.style.fontSize = '15px';
  caseErrorMassage.style.textAlign = 'center';
  caseErrorMassage.style.color = 'white';
  caseErrorMassage.style.background = '#fe4c4c';

  caseErrorMassage.textContent = massage;
  document.body.append(caseErrorMassage);

  setTimeout(() => {
    caseErrorMassage.remove();
  }, MESSAGE_DISPLAY_TIME);
}

export { showErrorMassage };
export { fileUploadError };
export { fileUploadSuccess };
