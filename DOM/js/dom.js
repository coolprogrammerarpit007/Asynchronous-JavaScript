`use strict`;

// All DOM Selectors Nodelist and HTML Collection

// const title = document.getElementById("title");
// // console.log(title);

// const lists = document.querySelectorAll("li");
// console.log(lists);

const parent = document.querySelector(".parent");

// console.log(parent);
// console.log(parent.children);
// const childs = Array.from(parent.children);
// // console.log(childs);
// childs.forEach((child) => console.log(child));

// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

// console.log(document.querySelector(".day").parentElement);

// const day = document.querySelector(".day");
// console.log(day.nextElementSibling);

// console.log(parent.childNodes);

// manipulating dom  elements in DOM

function addLanguage(lang) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(lang));
  document.querySelector("body").appendChild(li);
}

addLanguage("Python");
addLanguage("JavaScript");
addLanguage("GO");
addLanguage("C");

// EDIT
const li = document.querySelectorAll("li");
console.log(li);
const secondEl = li[1];
const newList = document.createElement("li");
newList.textContent = "TypeScript";
secondEl.replaceWith(newList);
