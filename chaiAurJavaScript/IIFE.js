`use strict`;

// Immediately Invoked function Expressions (IIFE)

// IIFE FUNCTIONS

(function () {
  console.log(`Database is connectig!`);
  setTimeout(() => {
    console.log("You are now connected to database!");
  }, "2000");
})();

// NEED OF  IIFE

// 1. to avoid pollution from global scope varialbes
// 2. and to immediately invoke the function.
// 3. to write two iife, one iife after written must end with semicolon to avoid errors
