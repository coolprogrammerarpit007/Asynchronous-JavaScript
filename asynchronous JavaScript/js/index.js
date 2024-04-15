`use strict`;

// async await >> promises >> callback hell

// A function which passed to another function as argument is called the callback function.

// function sum(a, b) {
//   return a + b;
// }

// function sumTwoNumbers(a, b, sumValues) {
//   return sumValues(a, b);
// }

// console.log(sumTwoNumbers(25, 25, sum));

// function getData(id) {
//   // sending data after 2s
//   setTimeout(() => {
//     console.log(`Data with the id ${id}`);
//   }, 2000);
// }

// getData(123);
// getData(420);

// CallBack HELL :- The code below is called callback hell

function getData(id, getNextData) {
  setTimeout(() => {
    console.log(`Get data of ID: ${id}`);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}
getData(420, () => {
  getData(21, () => {
    getData(3);
  });
});

console.log("Hello World!");
