function returnRandomNumber(minNumber, maxNumber) {

  if(typeof minNumber == "number" && typeof maxNumber == "number"){

      if(minNumber<0 || maxNumber<0 || minNumber>=maxNumber) {
        return NaN;
        }

let resultMinNumber = Math.ceil(minNumber);
let resultMaxNumber = Math.floor(maxNumber);

return Math.floor(Math.random()*(resultMaxNumber-resultMinNumber+1))+resultMinNumber;

   }
    return NaN;
  }

returnRandomNumber(2, 5);




function checksStrings (string, maxLength) {
    if(string.length<=maxLength){
     return true;
      }
  return false;
  }

checksStrings('one', 3);
