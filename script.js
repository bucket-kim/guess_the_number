let correctNumb = randomNumber();


// global randomNumber Set

window.onload = () => {
  document.getElementById('startClick').addEventListener('click', playGame);
  document.getElementById('resetClick').addEventListener('click', reset);
};

const playGame = () => {
  let numb = document.getElementById("numberInput").value;
  displayGuesses(numb);
  saveHistory(numb);
  displayHistory();
};

function randomNumber() {
  const numb = Math.floor(Math.random() * 101);
  return numb;
};

const reset = () => {
  correctNumb;
  document.getElementById('guess_display').innerHTML = '';
  guesses = [];
  displayHistory();
};

// Logic on inputting number from 1-100

// Display number guess panel
const displayGuesses = (numb) => {
  if (numb > correctNumb) {
    showGuessHigh();
  } else if (numb < correctNumb) {
    showGuessLow();
  } else {
    showWin();
  };
  if (numb > 100) {
    showError();
  }
};

// Switch statement to define if you win or not
const getDialog = (dialogType, text) => {
  let dialog;
  switch(dialogType) {
    case 'warning':
      dialog = '<div class="alert alert-warning" role="alert">';
      break;
    case 'won':
      dialog = '<div class="alert alert-success" role="alert">';
      break;
    case 'error':
      dialog = '<div class="alert alert-danger" role="alert">';
      break;
  };
  dialog += text;
  dialog += '</div>';
  return dialog;
}

const showWin = () => {
  const text = "Correct! You won~";
  let dialog = getDialog('won', text);
  document.getElementById('guess_display').innerHTML = dialog;
};

const showGuessHigh = () => {
  const text = "Oops! Too High...";
  let dialog = getDialog('warning', text);
  document.getElementById('guess_display').innerHTML = dialog;
};

const showGuessLow = () => {
  const text = "Oops! Too Low...";
  let dialog = getDialog('warning', text);
  document.getElementById('guess_display').innerHTML = dialog;
};

const showError = () => {
  const text = "Error! Guess between 1~100";
  let dialog = getDialog('error', text);
  document.getElementById('guess_display').innerHTML = dialog;
};

// Display History
let guesses = [];

const saveHistory = (guess) => {
  guesses.push(guess);
}

// Let's review this one thoroughly...
const displayHistory = () => {
  let i = guesses.length -1;
  let list = '<ul class="historyList">';
  while (i >= 0) {
    list += `<li class="list">You Guessed ${guesses[i]}</li>`;
    i -= 1;
  };
  list += '</ul>';
  document.getElementById('result_records').innerHTML = list;
}