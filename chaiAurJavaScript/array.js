`use strict`;

// Arrays in JavaScript

// const myArr = [0, 1, 2, 3, 4, 5];

// methods in array
// 1.array.push();
// 2. array.pop();
// 3.array.unshift();
// 4.array.shift();
// 5.array.includes() // result boolean
// 6. array.indexOf(2) // returns index of element.
// 7. array.join()

// 8. const newArr = myArr.join(); // converts array to string
// console.log(newArr);
// console.log(typeof newArr);

// 9. slice and splice :- bigger diff b/w slice and splice is that slice do not modifies original array, whereas splice does modify original array.

// console.log("A ", myArr);
// const newArray = myArr.slice(1, 3);
// console.log(newArray);
// console.log("B ", myArr);
// const newArr2 = myArr.splice(1, 3);
// console.log(newArr2);

const marvelHeroes = ["Iron Man", "Captain America", "Thor", "Spider Man"];

const dcHeroes = ["Super Man", "Bat Man", "Flash", "Wonder Woman"];

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);

// 10. array1.concat(array2)

// 11. spread operator
// const allHeros = [...marvelHeroes, ...dcHeroes];
// console.log(allHeros);

// 12. flat method
// Array.flat(Infinity)

// 13. Array.isArray(para)
// console.log(Array.isArray("Arpit"));
// 14. Array.from(para)
// console.log(Array.from("Arpit"));
// console.log(Array.from({ name: "Arpit" })); intresting case returns [], if do not tell is it key or value

// to convert set of values into array
let score1 = 10;
let score2 = 20;
let score3 = 30;

console.log(Array.of(score1, score2, score3));
