function createArrayOf25GeneratedObjects() {
  const photosDescriptions = [];

  for (let i = 0; i < 25; i++) {
    photosDescriptions[i] = createObject(i + 1);
  }
}

createArrayOf25GeneratedObjects();

function createObject(value) {
  return {
    id: value,
    url: `photos/${value}.jpg`,
    description: `Описание фотографии ${value}`,
    likes: generateRandomNumber(15, 200),
    comments: generateRandomNumber(0, 200),
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

