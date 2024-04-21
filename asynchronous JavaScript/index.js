`use strict`;

// const title = document.querySelector("h1");
// const stopBtn = document.getElementById("stop");

// const changeText = function () {
//   title.innerText = `I am studing best JS course on chai Aur Code,`;
// };

// const changeTitle = setTimeout(() => {
//   changeText();
// }, "3000");

// // removing setTimeOut

// stopBtn.addEventListener("click", (e) => {
//   console.log(`Time out remove`);
//   clearTimeout(changeTitle);
// });

const title = document.querySelector(`.title`);
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById(`stop`);

let Interval;

const sayDate = function (str) {
  console.log(str, Date.now());
};

startBtn.addEventListener("click", (e) => {
  Interval = setInterval(sayDate, "1000", "Hii, I am Tom");
});

stopBtn.addEventListener("click", (e) => {
  clearInterval(Interval);
});
