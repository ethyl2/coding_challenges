// Challenge is to locate a value in a sorted two-dimensional matrix.
// First, locating a value in a sorted one-dimensional matrix, AKA an array, to get started:

function getValuePosition() {
  var userString = document.getElementsByClassName("user-string")[0].value;
  var userSortedArray = prepString(userString);
  var sortedArrayDisplay = document.getElementsByClassName("sorted-array")[0];
  sortedArrayDisplay.textContent = "Sorted Array: " + userSortedArray;
  var userValue = document.getElementsByClassName("user-value")[0].value;
  var answerDisplay = document.getElementsByClassName("answer")[0];

  answerDisplay.textContent = findValue(userValue, userSortedArray);
}

function prepString(myString) {
  var myArray = myString.split(",");
  // Remove whitespace:
  for (var i=0; i < myArray.length; i++) {
    myArray[i] = myArray[i].replace(/\s+/g, '');
  }
  return myArray.sort(function(a, b){return a-b});
}

function findValue(myValue, myArray) {
  var lowPosition = 0;
  var highPosition = myArray.length;
  while (lowPosition <= highPosition) {
    var midPosition = lowPosition + Math.floor((highPosition - lowPosition)/2);
    if (myArray[midPosition] == myValue) {
      return midPosition;
    } else if (myArray[midPosition] < myValue) {
      lowPosition = midPosition + 1;
    } else {
      highPosition = midPosition - 1;
    }
  }
  return -1; // myValue isn't found in myArray
}
