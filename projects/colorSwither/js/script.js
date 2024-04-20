`use strict`;

const btns = document.querySelectorAll(".button");
const body = document.querySelector("body");
console.log(btns);

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    body.style.backgroundColor = `${btn.id}`;
  });
});
