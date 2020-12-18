// window onload gets you to load and start a function

let guesses = [];
let correctNumb = randomNumber();

window.onload = () => {
  // adding event listener to 2 buttons
  document.getElementById('number-submit').addEventListener("click", playGame);
  document.getElementById('reset-game').addEventListener("click", initGame);
}


const playGame = () => {
  // input number into input box
  let numbGuess = document.getElementById('number-input').value;
  compareResult(numbGuess);
  saveHistory(numbGuess);
  displayHistory();
};

const initGame = () => {
  //reset correctNumb
  //reset result
  //reset guesses history, display
  correctNumb = randomNumber();
  document.getElementById("guesses").innerHTML= "";
  guesses = [];
  displayHistory();
};

const compareResult = (numbGuess) => {
  if (numbGuess > correctNumb) {
    showHigh();
  } else if (numbGuess < correctNumb) {
    showLow();
  } else {
    showWin();
  }
  if (numbGuess > 100) {
    overLimit();
  }
};

function randomNumber() {
  // generate random number from 1-100, next input this function window onload.
  return Math.floor(Math.random() * 101);
};

const getDialog = (dialogType, text) => {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = `<div class="alert alert-warning" role="alert">`;
      break;
    case "won":
      dialog = `<div class="alert alert-success" role="alert">`;
      break;
    case "error":
      dialog = `<div class="alert alert-danger" role="alert">`;
      break;
  }
  dialog += text;
  dialog += '</h1>'
  return dialog;
};

const showWin = () => {
  let text = 'All right! You won!';
  let dialog = getDialog("won", text);
  document.getElementById("guesses").innerHTML = dialog;
};

const showHigh = () => {
  let text = 'Try again! You guessed too high';
  let dialog = getDialog("warning", text);
  document.getElementById("guesses").innerHTML = dialog;
};

const showLow = () => {
  let text = 'Try again! You guessed too low';
  let dialog = getDialog("warning", text);
  document.getElementById("guesses").innerHTML = dialog;
};

const overLimit = () => {
  let text = 'Error! Guess the number 1~100';
  let dialog = getDialog("error", text);
  document.getElementById("guesses").innerHTML = dialog;
}

const saveHistory = (elem) => {
  guesses.push(elem);
}

const displayHistory = () => {
  let index = guesses.length -1;
  let list = "<ul class='list-group'>";
  while(index >= 0) {
    list += `<li class='list-group-item'> You Gessed ${guesses[index]} </li>`;
    index -= 1;
  }
  list += '</ul>';
  document.getElementById("result-history").innerHTML = list;
}