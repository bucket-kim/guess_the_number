let correctNumb = randomNumber();


// global randomNumber Set

window.onload = () => {
  document.getElementById('startClick').addEventListener('click', playGame);
  console.log(correctNumb)
  document.getElementById('resetClick').addEventListener('click', reset);
};

const playGame = () => {
  let numb = document.getElementById("numberInput").value;
  displayGuesses(numb);
};

function randomNumber() {
  const numb = Math.floor(Math.random() * 101);
  return numb;
};

const reset = () => {
};

// Logic on inputting number from 1-100

// Display number History
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
//Display to compare the input number and random number
