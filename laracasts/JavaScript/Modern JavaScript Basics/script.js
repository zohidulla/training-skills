"use strict";

let fruit = ["Banana", "Strawberry", "Orange", "Apple", "Grape", "Plum"];

// let fruitsThatContainE = [];
// fruit.forEach(function (fruit) {
//   if (fruit.includes("e")) {
//     fruitsThatContainE.push(fruit);
//   }
// });

// filter methods
let fruitsThatContainE = fruit.filter((f) => f.includes("e"));

document.getElementById("output").innerHTML = fruitsThatContainE.join(", ");

let users = [
  {
    name: "Andrew",
    email: "andrew@example.com",
    stars: 5
  },
  {
    name: "Ashley",
    email: "ashley@example.com",
    stars: 9
  },
  {
    name: "Gaston",
    email: "gaston@example.com",
    stars: 1
  }
];

// reduce methods
let totalStars = users.reduce((stars, user) => (stars += user.stars), 0);

document.getElementById("output").innerHTML += "<br>Total Stars: " + totalStars;

// map methods
let userEmails = users.map((user) => user.email);

document.getElementById("output").innerHTML +=
  "<br>Emails: " + userEmails.join(", ");
