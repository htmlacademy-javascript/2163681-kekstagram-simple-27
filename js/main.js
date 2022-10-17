const LIKE_RANGE = {
  min: 15,
  max: 200,
};

const COMMENT_RANGE = {
  min: 0,
  max: 200,
};

const GENERATED_OBJECTS_COUNT = 25;

function createArrayGeneratedObjects(amountObject) {
  const photosDescriptions = [];

  for (let i = 0; i < amountObject; i++) {
    photosDescriptions.push(createObject(i + 1, LIKE_RANGE, COMMENT_RANGE));
  }
}

createArrayGeneratedObjects(GENERATED_OBJECTS_COUNT);

function createObject(value, likeLength, commentLength) {
  return {
    id: value,
    url: `photos/${value}.jpg`,
    description: `Описание фотографии ${value}`,
    likes: generateRandomNumber(likeLength.min, likeLength.max),
    comments: generateRandomNumber(commentLength.min, commentLength.max),
  };
}

function generateRandomNumber(minNumber, maxNumber) {

  if (typeof minNumber === 'number' && typeof maxNumber === 'number') {

    if (minNumber >= 0 && maxNumber >= 0 && minNumber <= maxNumber) {
      const resultMinNumber = Math.ceil(minNumber);
      const resultMaxNumber = Math.floor(maxNumber);

      return Math.floor(Math.random() * (resultMaxNumber - resultMinNumber + 1)) + resultMinNumber;
    }
  }
  return NaN;
}

function checkStringLenght(value, maxLength) {
  return value && value.length <= maxLength;
}

checkStringLenght('one', 3);

