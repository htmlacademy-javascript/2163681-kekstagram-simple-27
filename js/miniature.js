import { getPictureObjects } from './fetch-service.js';
import { showErrorMassage } from './massages.js';

const pictureSection = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const pictureLink = pictureTemplate.querySelector('.picture');
const pictureImg = pictureTemplate.querySelector('.picture__img');
const pictureComments = pictureTemplate.querySelector('.picture__comments');
const pictureLikes = pictureTemplate.querySelector('.picture__likes');

function toDrawMiniatures() {
  getPictureObjects()
    .then((pictureObjects) => {
      for (let i = 0; i < pictureObjects.length; i++) {
        toDrawMiniature(pictureObjects[i]);
      }
    }).catch(() => {
      showErrorMassage('Ошибка загрузки данных');
    });
}

function toDrawMiniature(pictureObject) {
  pictureImg.src = pictureObject.url;
  pictureLikes.textContent = pictureObject.likes;
  pictureComments.textContent = pictureObject.comments;

  const cloneElement = pictureLink.cloneNode(true);
  pictureSection.appendChild(cloneElement);
}

export { toDrawMiniatures };
