import { isEscPressed } from './utils.js';

const MESSAGE_DISPLAY_TIME = 5000;
const pictureSection = document.querySelector('.pictures');

const onAnyPlaceClick = (event, child, type) => {
  const innerSelector = pictureSection.querySelector(`.${type}__inner`);
  if (innerSelector && !innerSelector.contains(event.target) && pictureSection.contains(child)) {
    pictureSection.removeChild(child);
    document.body.removeEventListener('click', onAnyPlaceClick);
  }
};

const showModal = (type) => {
  const modal = document.querySelector(`#${type}`).content.querySelector(`.${type}`).cloneNode(true);
  pictureSection.appendChild(modal);

  pictureSection.querySelector(`.${type}__button`).addEventListener('click', () => {
    if (pictureSection.contains(modal)) {
      pictureSection.removeChild(modal);
    }
  });

  document.body.addEventListener('click', (evt) => onAnyPlaceClick(evt, modal, type));

  document.addEventListener('keydown', (evt) => {
    if (isEscPressed(evt) && pictureSection.contains(modal)) {
      pictureSection.removeChild(modal);
    }
  }, {once: true});
};

const showErrorMessage = (message) => {
  const messageElement = document.createElement('div');
  messageElement.style.zIndex = 100;
  messageElement.style.position = 'absolute';
  messageElement.style.left = 0;
  messageElement.style.top = 0;
  messageElement.style.right = '77%';
  messageElement.style.padding = '10px 3px';
  messageElement.style.fontSize = '15px';
  messageElement.style.textAlign = 'center';
  messageElement.style.color = 'white';
  messageElement.style.background = '#fe4c4c';

  messageElement.textContent = message;
  document.body.append(messageElement);

  setTimeout(() => {
    messageElement.remove();
  }, MESSAGE_DISPLAY_TIME);
};

export { showErrorMessage, showModal };
