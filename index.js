`use strict`;

// Normal for loop

const array = [10, 9, 8, 7];
let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
// }
// console.log(`Sum: ${sum}`);

// for-each loop

// array.forEach((num, i) => (sum = sum + num));
// console.log(sum);

// for-in loop -> Itterating over objets and finding the key

const car = {
  length: 4,
  price: 500,
  fullName: "Tata Motors",
  company: "Tata",
};

// for (let key in car) {
//   console.log(key + " : " + car[key]);
// }

// for-of loop -> to Itterate over Itterables

// for (const mark of array) {
//   sum += mark;
// }
// console.log(sum);

// map,reduce and filter method

// map method takes old array, you can do operations on it and return new array.
// const newArray = array.map((arr) => arr * 2);

// // filterArray
// const conditionalArray = array.filter((arr) => arr % 2 == 0);
// console.log(newArray);
// console.log(array);
// console.log(conditionalArray);

// reduce Method:- reduces the value of an array into single value

const prices = [5, 10, 30, 20, 50, 100];
const total = prices.reduce((acc, num) => acc + num, 0);
console.log(total);
