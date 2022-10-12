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

generateRandomNumber(2, 5);

function checkStringLenght(value, maxLength) {
  return value && value.length <= maxLength;
}

checkStringLenght('one', 3);
