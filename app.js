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
