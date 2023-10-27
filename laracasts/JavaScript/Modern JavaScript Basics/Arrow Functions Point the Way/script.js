"use strict";

// let username = {
//   name: "Andrew",
//   email: "andrew@example.com"
// };
// window.username = username;

// username = {
//   name: "Ashley",
//   email: "ashley@example.com"
// };

// function init() {
//   document.getElementById(
//     "output"
//   ).innerHTML = `${username.name} (${username.email})`;
// }

// const init = () => {
//   document.getElementById(
//     "output"
//   ).innerHTML = `${username.name} (${username.email})`;
// };

// function nameString() {
//   return `${username.name} (${username.email})`;
// }

// const nameString = () => `${username.name} (${username.email})`;

// document.getElementById("output").innerHTML = nameString();

let users = [
  {
    name: "Andrew",
    email: "andrew@example.com"
  },
  {
    name: "Ashley",
    email: "ashley@example.com"
  }
];

let names = [];

// users.forEach(function (user) {
//   names.push(user.name);
// });

users.forEach((user) => names.push(user.name));

document.getElementById("output").innerHTML = names.join(", ");

document.getElementById("btn").addEventListener("click", (e) => {
  const getDetails = () => {
    return `The button id is ${e.currentTarget.getAttribute("id")}`;
  };
  document.getElementById("output").innerHTML = getDetails();
});

console.log(names);
