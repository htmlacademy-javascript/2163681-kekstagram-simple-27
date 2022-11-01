import { generateRandomNumber } from './util.js';

const LIKE_RANGE = {
  min: 15,
  max: 200,
};

const COMMENT_RANGE = {
  min: 0,
  max: 200,
};

function createArrayGeneratedPictureObjects(amountObject) {
  const photosDescriptions = [];

  for (let i = 0; i < amountObject; i++) {
    photosDescriptions.push(createPictureObject(i + 1, LIKE_RANGE, COMMENT_RANGE));
  }
  return photosDescriptions;
}

function createPictureObject(value, likeLength, commentLength) {
  return {
    id: value,
    url: `photos/${value}.jpg`,
    description: `Описание фотографии ${value}`,
    likes: generateRandomNumber(likeLength.min, likeLength.max),
    comments: generateRandomNumber(commentLength.min, commentLength.max),
  };
}

export { createArrayGeneratedPictureObjects };
