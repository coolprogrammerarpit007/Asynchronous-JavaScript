`use strict`;

// creation of promise
// const promiseOne = new Promise((resolve, reject) => {
//   // Do an async task
//   // DO DB task, cryptography task,network calls

//   setTimeout(() => {
//     console.log(`Promise fulfilled!`);
//     resolve();
//   }, "2000");
// });

// // console.log(`Hello World!`);
// // consumption of the promise

// promiseOne.then(() => {
//   console.log(`Promise Completed`);
// });

// console.log(`Hello Arpit`);

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(`Asynchronous Task!`);
//     resolve();
//   }, "1000");
// }).then(() => {
//   console.log(`Promise Fulfilled`);
// });

// const newPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ user: "Arpit", email: "arpit.mishra.out@gmail.com" });
//   }, 3000);
// });

// newPromise.then((user) => {
//   console.log(user);
// });

// const newPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ name: `Arpit`, password: 1234 });
//     } else {
//       reject(`File is not acessible.`);
//     }
//   }, "2000");
// });

// newPromise
//   .then((usr) => {
//     console.log(usr);
//     return usr.name;
//   })
//   .then((name) => console.log(name))
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => console.log(`Promise either fulfilled or not!`));

// const newPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ name: `Arpit Mishra`, age: 25 });
//     } else {
//       reject(`Something went wrong!`);
//     }
//   }, "2000");
// });

// newPromise.then(() => {}).reject(() => {});

// using async await to consume the promise

// const consumePromise = async () => {
//   const response = await newPromise;
//   console.log(response);
// };

// consumePromise();

// async function getAllUsers() {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
//   const data = await response.json();
//   console.log(data);
// }

// getAllUsers();

// now doing same thing with promise chain

fetch(`https://jsonplaceholder.typicode.com/users`)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch(() => {
    console.log(`Something went wrong!`);
  })
  .finally(() => {
    console.log(`Promise fulfilled or not!`);
  });
