`use strict`;

// storing refrences

const submitBtn = document.getElementById("subt");
const previousGuesses = document.querySelector(".guesses");
const numberOfGuesses = document.querySelector(`.lastResult`);
const lowOrHigh = document.querySelector(`.lowOrHi`);

// state variables

const previouesGuess = [];
const randNum = Math.floor(Math.random() * 100) + 1;
console.log(randNum);
let guess = 10;
let isPlaying = true;
let guessResult;

// *******************************
// *******************************
// function for number guessing

const numberGuess = function (e) {
  // prevent form default event
  e.preventDefault();

  if (guess > 0 && isPlaying) {
    const userGuess = document.getElementById(`guessField`).value;
    const userChosenNum = Number(userGuess);
    // guess is different
    if (userChosenNum > randNum) {
      alert(`Wrong Guess, too Large`);
      guessResult = `Too Large`;
    } else if (userChosenNum < randNum) {
      alert(`Wrong Guess, too small`);
      guessResult = `Too Small`;
    } else if (userChosenNum === randNum) {
      alert(`Correct guess, you won`);
      isPlaying = false;
      guessResult = `Correct Guess!`;
    }
    guess--;
    previouesGuess.push(userChosenNum);
    previousGuesses.textContent = `${previouesGuess.join(",")}`;
    numberOfGuesses.textContent = `${guess}`;
    lowOrHigh.textContent = guessResult;
  } else {
    alert(`Sorry you can not play more`);
  }
};

// Event Listener to guess a number

submitBtn.addEventListener("click", numberGuess);
