`use strict`;

// Nested function scoping

let a = 10;

// function outer() {
//   let b = 20;
//   function inner() {
//     let c = 30;
//     console.log(a, b, c);
//   }
//   inner();
// }

// outer();

// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   inner();
// }
// outer();
// outer();

// Cloures
// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   return inner;
// }
// const fn = outer();
// fn();
// fn();

// currying in JavaScript

function sum(a, b, c) {
  return a + b + c;
}

// console.log(sum(25, 25, 25));

// Now currying means sum(25,25,25) transformed onto sum(25)(25)(25)

// we do this by nesting functions where each function takes one arg. at time.

// function curry(fn) {
//   return function (a) {
//     return function (b) {
//       return function (c) {
//         return fn(a, b, c);
//       };
//     };
//   };
// }

// const curriedSum = curry(sum);
// console.log(curriedSum(25)(25)(25));

// this keyword

// function sayMyName(name) {
//   console.log(`This is my ${name}`);
// }

// Implicit Binding

const person = {
  name: "Arpit",
  sayMyName: function () {
    console.log(`My name is ${this.name}`);
  },
};

// person.sayMyName();

// Explicit binding
function sayMyName() {
  console.log(`My name is ${this.name}`);
}

// sayMyName.call(person);

// New Binding

// function Person(name) {
//   // JS, will create an empty object under the hood
//   this.name = name;
// }

// const p1 = new Person("Vishwas");
// const p2 = new Person("Arpit");

// default binding
