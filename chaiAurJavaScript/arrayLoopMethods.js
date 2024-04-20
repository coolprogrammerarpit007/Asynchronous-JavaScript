`use strict`;

// for of loop

// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//   console.log(`Number: ${num}`);
// }

// for of loop works on every itterables.

// Map Object
// const map = new Map();

// map.set("IN", "INDIA");
// map.set("IN", "INDIA");
// map.set("IN", "INDIA");
// map.set("USA", "UNITED STATES OF AMERICA");
// map.set("FR", "FRANCE");
// console.log(map);

// map is used for the unique values and remember the order

// looping over map

// for (const [initias, country] of map) {
//   console.log(initias);
//   console.log(country);
// }

// looping over objects

// const myObj = {
//   user1: "Arpit",
//   user2: "Rajesh",
//   user3: "Avinash",
//   user4: "Priyanshu",
//   user5: "Rahul",
// };

// for (const { user } of myObj) {
//   console.log(user);
// }

// for of loop not works on object as it is not itterable

const language = {
  js: "JavaScript",
  py: "Python",
  cpp: "C++",
  c: "C",
  java: "Java",
};

// to itterate over  objects, we use for-in loop

// for (const key in language) {
//   console.log(`${key}: ${language[key]}`);
// }

// const languages = [
//   "python",
//   "java",
//   "ruby",
//   "c",
//   "c++",
//   "javascript",
//   "php",
//   "Go",
// ];
// for (const lang in languages) {
//   console.log(languages[lang]);
// }

// const map = new Map();

// map.set("IN", "INDIA");
// map.set("IN", "INDIA");
// map.set("IN", "INDIA");
// map.set("USA", "UNITED STATES OF AMERICA");
// map.set("FR", "FRANCE");

// for (let index in map) {
//   console.log(index);
// }

// for in loop not works on map

// for of loop -> array
// for in loop -> object

// forEach loop over array

// const coding = ["javascript", "python", "java", "c", "go", "rust", "c++"];

// coding.forEach((elem) => console.log(elem));

// function printlang(item) {
//   console.log(item);
// }

// // passing reference of function to forEach
// coding.forEach(printlang);

// foreach method does not return values

// const value = coding.forEach((el) => {
//   console.log(el);
//   return el;
// });

// console.log(value);

// filter map and reduce methods in JS

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const even = nums.filter((num) => num % 2 === 0);
// console.log(even);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// return books which has genere is fiction

// const fictionBooks = books.filter(
//   (book) => book.genre === "Fiction" || book.genre === "Non-Fiction"
// );
// console.log(fictionBooks);
// console.log(fictionBooks.length);

// map method in JS
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = nums.map((num) => num * 2);
// console.log(newNums);

// REDUCE METHOD IN JS
const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const totalShopping = shoppingCart.reduce(
  (acc, course) => acc + course.price,
  0
);
console.log(totalShopping);
