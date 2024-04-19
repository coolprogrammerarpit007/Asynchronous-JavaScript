"use strict";

// console.log(`Objects in JS!`);
// there are two ways to create objects in JS, one is created using literals and another uing constructor, when object is created using construtor, means one of type then it is created singleton type.

// constructor type
// Object.create() -> Constructor type

// literal type

// const mySym = Symbol("my key");
// // console.log(typeof mySym);

// const jsUser = {
//   name: "Arpit",
//   age: 24,
//   location: "Jaipur",
//   email: "arpit.mishra.out@gmail.com",
//   isLoggedIn: false,
//   lastLoggedIn: ["Monday", "Saturday"],
//   [mySym]: "myKey2",
// };

// // to define a symbol as key in object
// // console.log(jsUser[mySym]);
// // console.log( jsUser[mySym]);
// // console.log(jsUser.mySym);
// // console.log(typeof jsUser["mySym"]);
// // console.log(jsUser["lastLoggedIn"][1]);

// // to freeze values of an Object, so that values could not be changed.

// // Object.freeze(jsUser);
// // jsUser.age = 30;
// // console.log(jsUser);

// // console.log(jsUser);

// // In JS, functions are treated as type 1 users

// jsUser.greeting = function () {
//   console.log(`Hello JS USERS!`);
// };
// jsUser.greeting2 = function () {
//   console.log(`Hello JS USER! ${this.name}`);
// };
// jsUser.greeting2();

// Creating objests with constructor and creating a singleton object.

const tinder = new Object(); // creates a singleton object.
tinder.id = "123abc";
tinder.name = "Sammy";
tinder.isLoggedIn = false;
// console.log(tinder);

const normalUser = {
  email: "some@gmail.com",
  fullName: {
    userName: {
      firstName: "Arpit",
      lastName: "Mishra",
    },
  },
};

// console.log(normalUser.fullName.userName.firstName);
// console.log(normalUser.fullName?.userName?.lastName);  using optional chaining to secure objects

const obj1 = {
  a: 1,
  b: 2,
};
const obj2 = {
  c: 3,
  d: 4,
};
const obj3 = {
  a: 3,
  b: 4,
};

// const obj4 = Object.assign({}, obj1, obj2); // it combines two object into one. and even used to copy 1 object into other
// console.log(obj4);

// spread operator in Objects
const obj5 = { ...obj1, ...obj2 };
// console.log(obj5);

// now suppose value coming from the database.

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
];

// console.log(users[0]["email"]);

// to get all keys from objects.

// console.log(Object.keys(tinder)); // return array of strings as keys
// console.log(Object.values(tinder)); // return array of values
// console.log(Object.entries(tinder)); // makes array of array of key value pair of objects.

// console.log(tinder.hasOwnProperty("isLoggedIn")); to check if property exist in object
