`use strict`;

const clock = document.getElementById("clock");

// function to show time

const showTime = function () {
  //  creating date object

  const date = new Date();
  const hrs = date.getHours();
  const mins = date.getMinutes();
  const seconds = date.getSeconds();
  clock.textContent = `${hrs}:${mins}:${seconds}`;
};

// Event when page is loaded

window.addEventListener("load", showTime);
setInterval(() => {
  showTime();
}, 3000);
