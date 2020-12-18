window.onload = () => {
  clickGuess();
  reset();
  randomNumber();
};

// global randomNumber Set
const randomNumber = () => {
  const numb = Math.floor(Math.random() * 100);
  console.log(numb);
};

const clickGuess = () => {
  displayHistory()
}

const reset = () => {
};

// Logic on inputting number from 1-100

// Display number History
const displayHistory = () => {
  let numb = document.getElementById("numberInput").value;
  document.getElementById('guess_display').innerHTML = numb;
}