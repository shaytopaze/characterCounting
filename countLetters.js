function countLetters(inputString) {
var intermediateString = inputString.join(""); //split into an array of characters
var inputArray = intermediateString.split("");
var outputObject = {};
var letterStore = []; //stores an array of the keys of outputObject

for (var i = 0; i < inputArray.length; i++){
  if(isLetterInside(inputArray[i], letterStore)) {
    outputObject[inputArray[i]] += 1;
  }
  // if letter has been encountered before
  else {
    outputObject[inputArray[i]] = 1
  }

  letterStore = Object.keys(outputObject); //stores an array of the keys of outputObject

}

return outputObject;

  function isLetterInside(letter, array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] == letter) {
        return true;
       }
     }
     return false;
  }

}


args = process.argv.slice(2);
console.log(countLetters(args));