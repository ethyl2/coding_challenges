function checkForEnter(e) {
  if (!e) e = window.event;
  var keyCode = e.keyCode || e.which;
  if (keyCode == '13'){
    checkString();
  }
}

function checkString() {
  var myString = document.getElementsByClassName("user-string")[0].value;
  var myArray = [];
  var answerDisplay = document.getElementsByClassName("answer")[0];

  for (var i=0; i<myString.length; i++) {
    if (myArray.indexOf(myString[i]) > -1) {
      answerDisplay.textContent = "No, it doesn't contain purely unique characters.";
      return false;
    } else {
      myArray.push(myString[i]);
    }
  }
  answerDisplay.textContent = "Yes, it does contain purely unique characters.";
  return true;
}
