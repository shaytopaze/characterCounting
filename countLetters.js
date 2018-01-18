function countLetters(inputString) {

  var intermediateString = inputString.replace(/ /g, ''); //removes spaces lighthouselabs
  var inputArray = intermediateString.split(""); //split individual characters into array
  var outputObject = {};
  // var letterStore = []; //stores an array of the keys of outputObject`
  for (var i = 0; i < inputArray.length; i++){

    var letter = inputArray[i];

    if(outputObject[letter]) {
      // if letter has not been encountered before
      outputObject[letter] += 1;
    } else {
      outputObject[letter] = 1;
    }

  }

  return outputObject;

}

var args = process.argv[2];

console.log(countLetters(args));