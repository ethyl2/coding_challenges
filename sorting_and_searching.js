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
  var highPosition = myArray.length - 1;
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

/* Now, the case involving a two-dimensional matrix in which the values are
 * sorted in ascending order.
 * Example: [[0, 1, 2],
 *           [3, 4, 5],
 *           [6, 7, 8]]
 */
function findValueInMatrix(myValue, myMatrix) {
  var lowPosition = 0;
  var highPosition = myMatrix.length - 1;
  while (lowPosition <= highPosition) {
    var midPosition = lowPosition + Math.floor((highPosition - lowPosition)/2);
    var result = findValue(myValue, myMatrix[midPosition]);
    if (result > -1) { // myValue is found in that row
      return [midPosition, result];
    } else { // myValue is not found in that row, so time to adjust high or low position
      if (myMatrix[midPosition][0] > myValue) {
        highPosition = midPosition - 1;
      } else {
        lowPosition = midPosition + 1;
        }
      }
    }
  return [-1, -1]; // myValue isn't found in myMatrix
}

var sampleMatrix = [[0,1,2], [3,4,5], [6,7,8]];

function getValuePositionFromMatrix() {
  var userValue = document.getElementsByClassName("user-value-in-matrix")[0].value;
  var answerDisplay = document.getElementsByClassName("matrix-answer")[0];
  var position = findValueInMatrix(userValue, sampleMatrix);
  answerDisplay.textContent = "Row: " + position[0] + ", Column: " + position[1];
}
