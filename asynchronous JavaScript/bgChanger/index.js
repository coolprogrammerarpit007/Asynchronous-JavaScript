`use strict`;

const body = document.querySelector("body");
const startBtn = document.getElementById(`start`);
const stopBtn = document.getElementById(`stop`);

let changeColor;
let str = `0123456789ABCDEF`;
let interval;

// function to generate random hexadecimal code

const hexCode = function () {
  let hexCode = `#`;
  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * str.length);
    hexCode += str[randomNum];
  }
  return hexCode;
};

const changeBackground = function () {
  body.style.backgroundColor = `${hexCode()}`;
};

// Event Listener to starting changing background color at 2s
startBtn.addEventListener(`click`, (e) => {
  // changing background color in every 2s

  if (!interval) {
    interval = setInterval(changeBackground, "2000");
  }
});

// Event Listener to the stop button to change this intervation.

stopBtn.addEventListener(`click`, (e) => {
  clearInterval(interval);
  interval = null;
});
