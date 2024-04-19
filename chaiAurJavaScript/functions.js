`use strict`;

// function sayMyName() {
// console.log(`Arpit Mishra`);
// }

// sayMyName();

// sayMyName -> reference of function
// sayMyName() -> Execution of functions

//  if you only write function name nothing will happen, it only means function exist

// functions with objects and array passed as parameter

// rest operator in JS
// function calculateCartPrice(...nums) {
//   console.log(nums);
// }

// calculateCartPrice(700);
// calculateCartPrice(700, 800);
// calculateCartPrice(700, 800, 900);
// calculateCartPrice(700, 800, 900, 1000);
// calculateCartPrice(700, 800, 900, 1000, 1100);
// calculateCartPrice(700, 800, 900, 1000, 1100, 1200);

// const obj = {
//   userName: "Arpit",
//   price: 199,
// };

// function handleObject(anyObj) {
//   console.log(`User name is ${anyObj.userName} and price is $${anyObj.price}`);
// }

// handleObject(obj);
// handleObject({
// userName: "Sam",
// price: 205,
// });

// const newArr = [200, 400, 600, 800];
// function returnSecondValue([first, second, ...arr]) {
//   console.log(arr);
//   return second;
// }
// console.log(returnSecondValue([...newArr]));

// Scopes in JavaScript -> when declared inside curly braces, it is called block scope and outside curly braces is called the global scope.

// remember -> global scope for browser environment and inside nodejs is very different.

// nested scope
// function one() {
//   const userName = "Arpit";
//   function two() {
//     const website = "youtube";
//     console.log(userName);
//   }
//   // console.log(website);
//   two();
// }
// one();

// hoissting in JS

console.log(one(5));
function one(num) {
  return num + 1;
}

// console.log(two(8));
// const two = function (num) {
//   return num + 2;
// };
