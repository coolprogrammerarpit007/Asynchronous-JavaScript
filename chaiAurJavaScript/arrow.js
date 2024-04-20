// "use strict";

// const user = {
//   userName: "Arpit",
//   price: 999,
//   welcomeMsg: function () {
//     console.log(`${this.userName}, welcome to the website.`);
//     console.log(this);
//   },
// };

// user.welcomeMsg();
// user.userName = "Rahul";
// user.welcomeMsg();

// console.log(this);

// **** this keyword when print standalone means not in the object, points to the window environment, in case when js engine is browser, but when it is node means JS env is node then this keyword points to the {} object ****.

// function chai() {
//   let userName = "Arpit";
//   console.log(this.userName); // prints undefined
// }
// chai();

// in case of regular function, in node environment this prints many values, if we try to acess a variable through it, it will return undefined.

//  function expressions
// const chai = function () {
//   console.log(`Function Expressions`);
//   let userName = "Arpit";
//   console.log(this.userName); // also prints undefined
// };

// chai();

// Arrow functios

// const chai = () => {
//   console.log(`Arrow functions`);
//   let userName = "Arpit";
//   // console.log(this.userName);
//   console.log(this); // prints {} in node environment
// };

// chai();

// Implicit return using arrow functions

const addTwo = (a, b) => a + b;
// console.log(addTwo(15, 25));
// returning object using arrow functions

// const returnUser = (user) => user;
// console.log(returnUser({ userName: "Arpit" }));

// Imlicit return of object
// const returnUser = () => ({ userName: "Arpit" });
// console.log(returnUser());
