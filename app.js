function checkForEnter(e) {
  if (!e) e = window.event;
  var keyCode = e.keyCode || e.which;
  if (keyCode == '13'){
    checkString();
  }
}

function checkString() {
  var myString = document.getElementsByClassName("user-string")[0].value;
  var answerDisplay = document.getElementsByClassName("answer")[0];
  if (uniqueChars(myString)) {
    answerDisplay.textContent = "Yes, it does contain purely unique characters.";
  } else {
    answerDisplay.textContent = "No, it doesn't contain purely unique characters.";
  }
}

function uniqueChars(inputString) {
  var myArray = [];
  for (var i=0; i < inputString.length; i++) {
    if (myArray.indexOf(inputString[i]) > -1) {
      return false;
    } else {
      myArray.push(inputString[i]);
    }
  }
  return true;
}

function uniqueCharsNoStructures(inputString) {
  for (var i=0; i < inputString.length; i++) {
    for (var j=i+1; j < inputString.length; j++) {
      if (inputString[i] == inputString[j]) {
        return false;
      }
    }
  }
  return true;
}

function uniqueCharsWithBooleanArray(inputString) {
  if (inputString.length > 256) {
    return false;
  }
  var myBooleanArray = new Array(256).fill(false);
  for (var i = 0; i < inputString.length; i++) {
    var val = inputString.charCodeAt(i);
    if (myBooleanArray[val]) {// Already found this char in the string
      return false;
    }
    myBooleanArray[val] = true;
  }
  return true;
}

function uniqueCharsWithSort(inputString) {
  var myArray = inputString.split("");
  myArray.sort();
  // Check the array for neighboring characters which are identical
  for (var i=0; i < myArray.length - 1; i++) {
    if (myArray[i] == myArray[i+1]) {
      return false;
    }
  }
  return true;
}
