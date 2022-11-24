import { getPictures } from './fetch-service.js';
import { showErrorMessage } from './messages.js';

const pictureSection = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const pictureLink = pictureTemplate.querySelector('.picture');
const pictureImg = pictureTemplate.querySelector('.picture__img');
const pictureComments = pictureTemplate.querySelector('.picture__comments');
const pictureLikes = pictureTemplate.querySelector('.picture__likes');

const toDrawMiniature = (picture) => {
  pictureImg.src = picture.url;
  pictureLikes.textContent = picture.likes;
  pictureComments.textContent = picture.comments;

  const pictureNode = pictureLink.cloneNode(true);
  pictureSection.appendChild(pictureNode);
};

const toDrawMiniatures = () => {
  getPictures()
    .then((pictures) => {
      for (const picture of pictures) {
        toDrawMiniature(picture);
      }
    })
    .catch(() => {
      showErrorMessage('Ошибка загрузки данных');
    });
};

export { toDrawMiniatures };
