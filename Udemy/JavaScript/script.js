// const myCountry = "Uzbekistan";
// console.log(myCountry);

/*
let isStudent;
isStudent = true;
console.log(isStudent);
isStudent = false;
console.log(isStudent);
*/

/*
const myNumber1 = 8;
const myNumber2 = 15;
const mult = myNumber1 * myNumber2;
console.log(mult);
*/

/*
const myFirstName = "John";
const myLastName = "Deer";
const myProfession = "JavaScript Engineer";
const personInfo1 =
  "My name is " + myFirstName + " " + myLastName + " and I am " + myProfession;
console.log(personInfo1);
const personInfo2 = `My name is ${myFirstName} ${myLastName} and I am ${myProfession}`;
console.log(personInfo2);
*/

// comments

/*
Comments
/*

/**
 * Comments
 * comment
 */

/*
const myString = "abc";
const myNumber = 10;
const myBoolean = true;
const myNull = null;
let myUndefined;
const myObject = {};
const myArray = [];

console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBoolean);
console.log(typeof myNull);
console.log(typeof myUndefined);
console.log(typeof myObject);
console.log(typeof myArray);
*/

/*
function printMyName() {
  const myName = "John";
  console.log(myName);
}
printMyName();
*/

/*
const hello = function(name) {
  return "Hello, " + name;
}
console.log(hello("John"));
console.log(hello("Jack"));
*/

/*
const helloworld = () => "Hello, World!";
console.log(helloworld());
*/

/**
 * Возвращает разницу двух чисел
 * @param {number} a
 * @param {number} b
 * @returns {number} Разница чисел
 */
/*
function diff(a, b) {
  return a - b;
}

const result = diff(10, 5);
console.log(result);
*/

// setTimeout(() => console.log("Hello, World!"), 5000);

/*
const person = {
  name: "John",
  surname: "Deer",
  favoriteNumber: 7,
};

const personInfo = `My name is ${person.name} ${person.surname} and my favorite number is ${person.favoriteNumber}`;

console.log(personInfo);
*/

/*
const myFavoriteSport = "Snowboarding";
const stringLength = myFavoriteSport.length;
console.log(stringLength);
*/

/*
const myFavoriteSeason = "summer";
console.log(myFavoriteSeason instanceof String);
console.log(typeof myFavoriteSeason);
const seasonToUpperCase = myFavoriteSeason.toUpperCase();
console.log(seasonToUpperCase);
*/

/*
const greeting = "Good Morning";
const updatedGreeting = greeting.replace("Morning", "Evening");
console.log(updatedGreeting);
*/

/*
const myArray = [true, 15, null];
console.log(myArray[0]);
console.log(myArray.length);
*/

/*
const myArray = ['abc', null, 25, true]
console.log(myArray)
myArray[1] = 125
console.log(myArray)
*/

/*
const myArray = ["abc", true, null, undefined, 200];
myArray.forEach((element) => console.log(element));
*/

/*
const myNumbers = [4, 15, 107, 80];
console.log(myNumbers);
myNumbers.push(10);
console.log(myNumbers);
myNumbers.push(5, 25);
console.log(myNumbers);
console.log(myNumbers.length);
*/

/*
const currentDate = new Date();
const currentDateInMs = currentDate.getTime();
console.log(currentDateInMs);
*/

/*
let myVariable1 = 10;
let myVariable2 = "5";
console.log(parseInt(myVariable1) <= parseInt(myVariable2));
myVariable1 = "20";
myVariable2 = 100;
console.log(parseInt(myVariable1) <= parseInt(myVariable2));
*/

/*
const myNumber1 = 10;
const myNumber2 = 3;
console.log(myNumber1 % myNumber2);
console.log(((100 % 23) % 5) % 3);
*/

/*
console.log(3 || (true && null) || false);
console.log(true && null && 10);
console.log(true && "abc" && 10);
console.log(10 || false);
console.log(false || undefined || null);
console.log(false && undefined && null);
console.log(false || undefined || null || true);
console.log(false && undefined && null && true);
*/

/*
let a = 10;
a += 1;
console.log(a);
a *= 2;
console.log(a);
a -= 5;
console.log(a);
a /= 2;
console.log(a);
*/

/*
const myObject = {
  x: 10,
  y: true,
};
myObject.z = "abc";
delete myObject.x;
let newVariable;
newVariable = 30 + 5;
console.log(myObject);
console.log(newVariable);
if (newVariable > 10) {
  console.log(`${newVariable} more 10`);
}
console.log(myObject);
*/

/*
function fn() {
  console.log("Hello from function fn");
  return function (a) {
    console.log(a);
  };
}
fn()(true);
*/

/*
let arr = [1, 2];
arr.push(3);
console.log(arr);
arr = [1, 2, 3, 4];
console.log(arr);
*/

/*
let myFavoriteAnimal = "Monkey";
console.log(myFavoriteAnimal);
myFavoriteAnimal = "Cat";
console.log(myFavoriteAnimal);
*/

/*
"use strict";

function myFunction() {
  const a = 2;
  return a;
}
console.log(myFunction());
*/

/*
setTimeout(function () {
  console.log("Hello from function myFn");
}, 2000);
*/

/*
let i = 1;
const messageIntervalId = setInterval(() => {
  console.log("Message number " + i);
  i = i + 1;
}, 2000);
setTimeout(() => clearInterval(messageIntervalId), 11000);
*/

/*
const myArray = [true, null]
myArray.unshift('Hello')
console.log(myArray.unshift(100))
console.log(myArray)
*/

/*
const myArray = [1, 2];
myArray[10] = "abc";
console.log(myArray);
console.log(myArray.length);
*/

/*
const cars = [
  {
    carBrand: "BMW",
    price: 12000,
    isAvailableForSale: true,
  },
  {
    carBrand: "Honda",
    price: 10000,
    isAvailableForSale: false,
  },
  {
    carBrand: "Toyota",
    price: 8000,
    isAvailableForSale: true,
  },
];
const newCar = {
  carBrand: "Tesla",
  price: 20000,
  isAvailableForSale: false,
};
cars.push(newCar);
console.log(cars);
*/

/*
const myObject = {
  key1: true,
  key5: 10,
  key3: "abc",
  key4: null,
  key10: NaN,
};
const objectKeys = Object.keys(myObject);
objectKeys.forEach((key) => {
  if (key === "key1" || key === "key3") {
    console.log(myObject[key]);
  }
});
*/

const MIN = 1000;
const MAX = 9999;
const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351];
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const addRandomNumberToArray = (arr, min, max) => {
  let newRandomNumber;
  const updatedArr = [...arr];
  do {
    newRandomNumber = randomNumber(min, max);
  } while (updatedArr.includes(newRandomNumber));
  updatedArr.push(newRandomNumber);
  return updatedArr;
};
const updatedArray = addRandomNumberToArray(myNumbers, MIN, MAX);
console.log("UPDATED ARRAY", updatedArray);
console.log("ORIGINAL ARRAY", myNumbers);
