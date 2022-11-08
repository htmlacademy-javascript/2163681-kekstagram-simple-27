import { createArrayGeneratedPictureObjects } from './data.js';

const pictureSection = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const pictureLink = pictureTemplate.querySelector('.picture');
const pictureImg = pictureTemplate.querySelector('.picture__img');
const pictureComments = pictureTemplate.querySelector('.picture__comments');
const pictureLikes = pictureTemplate.querySelector('.picture__likes');

function toDrawMiniatures(amountObject) {
  const pictureObjects = createArrayGeneratedPictureObjects(amountObject);

  for (let i = 0; i < pictureObjects.length; i++) {
    toDrawMiniature(pictureObjects[i]);
  }
}

function toDrawMiniature(pictureObject) {
  pictureImg.src = pictureObject.url;
  pictureLikes.textContent = pictureObject.likes;
  pictureComments.textContent = pictureObject.comments;

  const cloneElement = pictureLink.cloneNode(true);
  pictureSection.appendChild(cloneElement);
}

export { toDrawMiniatures };
