`use strict`;

const height = document.getElementById("height");
const weight = document.getElementById(`weight`);

const btn = document.querySelector("button");
const results = document.getElementById("results");

// state variable

let range;

// function to calculate BMI

const calcBMI = (height, weight) => {
  let bmi = weight / height ** 2;
  return bmi;
};

// Appending BMI

const showBMI = function (e) {
  // prevent default behavior
  e.preventDefault();
  let heightValue = Number(height.value);
  let weightValue = Number(weight.value);
  console.log(heightValue, weightValue);
  const bmi = calcBMI(heightValue, weightValue);
  console.log(bmi);
  if (bmi < 18.6) {
    range = `Under Weight`;
  } else if (bmi > 18.6 && bmi < 24.9) {
    range = `Normal Range`;
  } else {
    range = `Over Weight`;
  }

  // creating element
  const p = document.createElement("p");
  p.innerText = range;
  results.append(p);
};

btn.addEventListener("click", showBMI);
