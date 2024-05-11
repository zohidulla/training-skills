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

// Single line comments

/*
Multi-line comments
/*

/**
 * Multi-line comments
 * Multi-line comments
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
// Явный возврат результата
const helloworld = () => {
  return "Hello, World!";
};
// Неявный возврат результата
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
console.log(myFavoriteSeason instanceof String); // false
console.log(typeof myFavoriteSeason); // string
const seasonToUpperCase = myFavoriteSeason.toUpperCase();
console.log(seasonToUpperCase);

// //
// const myFavoriteSeason = new String("summer");
// console.log(myFavoriteSeason instanceof String); // true
// console.log(typeof myFavoriteSeason); // object
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
console.log(3 || (true && null) || false); // 3
console.log(true && null && 10); // null
console.log(true && "abc" && 10); // 10
console.log(10 || false); // 10
console.log(false || undefined || null); // null
console.log(false && undefined && null); // false
console.log(false || undefined || null || true); // true
console.log(false && undefined && null && true); // false
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

/*
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
*/

/*
const myObject = {
  name: "Mike",
  age: 30,
  city: "London",
};

Object.prototype.country = "England";

for (let key in myObject) {
  if (myObject.hasOwnProperty(key)) {
    console.log(myObject[key]);
  }
}
*/

/*
function isArrayEmpty(inputArray) {
  if (inputArray.length > 0) {
    return "Array not empty";
  }
  return "Array empty";
}
*/
/*
function isArrayEmpty(inputArray) {
  return inputArray.length > 0 ? "Array not empty" : "Array empty";
}
*/
/*
const isArrayEmpty = (inputArray) =>
  inputArray.length > 0 ? "Array is not empty" : "Array empty";

console.log(isArrayEmpty([1, 3]));
console.log(isArrayEmpty([]));
*/

/*
const myCities = ["London", "New York", "Singapore"];
const cityInfo = (city, index) =>
  `${city} is at the index ${index} in the myCities array`;
myCities.forEach((city, index) => console.log(cityInfo(city, index)));
*/

/*
const postsJSON = [
  '{"postId":1355,"commentsQuantity":5}',
  '{"postId":5131,"commentsQuantity":13}',
  '{"postId":6134,"commentsQuantity":2}',
  '{"postId":2351,"commentsQuantity":8}',
]
// // OPTION 1
// const postsJS = postsJSON.map((post) => JSON.parse(post))
// OPTION 2
const postsJS = postsJSON.map(JSON.parse)
// console.log(postsJSON)
console.log(postsJS)
console.log(postsJS[1].postId)
console.log(postsJS[postsJS.length - 1].commentsQuantity)
*/

/*
function findPostById(postId, posts) {
  return posts.find((post) => post.postId === postId)
}
const posts = [
  { postId: 1355, commentsQuantity: 5 },
  { postId: 5131, commentsQuantity: 13 },
  { postId: 6134, commentsQuantity: 2 },
]
console.log(findPostById(6134, posts)) // { postId: 6134, commentsQuantity: 2 }
console.log(findPostById(4511, posts)) // undefined
*/

/*
const arraySortInfo = (inputArray) => {
  if (inputArray.some((element) => typeof element !== "number")) {
    return "Некоторые элементы не являются числами";
  }
  if (
    inputArray.every((element, index) =>
      index > 0 ? element >= inputArray[index - 1] : true
    )
  ) {
    return "Массив отсортирован по возрастанию";
  }
  if (
    inputArray.every((element, index) =>
      index > 0 ? element <= inputArray[index - 1] : true
    )
  ) {
    return "Массив отсортирован по убыванию";
  }
  return "Массив не отсортирован";
};
const a = [5, "abc", 10, 1];
const b = [4, 10, 14, 25, 25, 50];
const c = [150, 132, 80, 40];
const d = [15, 26, 10, 23, 85];
console.log(arraySortInfo(a)); // Некоторые элементы не являются числами
console.log(arraySortInfo(b)); // Массив отсортирован по возрастанию
console.log(arraySortInfo(c)); // Массив отсортирован по убыванию
console.log(arraySortInfo(d)); // Массив не отсортирован
*/

/*
const areArraysEqual = (firstArray, secondArray) => {
  if (
    firstArray.length === secondArray.length &&
    firstArray.every((element, index) => element === secondArray[index])
  ) {
    return true;
  }
  return false;
};
const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a === b); // false (Why?) -- Объект - это ссылочный тип
const c = [2, 1, 3];
const d = [1, 2, 3, 4];
console.log(areArraysEqual(a, b)); // true
console.log(areArraysEqual(a, c)); // false
console.log(areArraysEqual(a, d)); // false
*/

/*
function isElementInArray(inputArray, searchElement) {
  return inputArray.includes(searchElement)
}
const transports = ['Bus', 'Car', 'Bicycle', 'Airplane']
console.log(isElementInArray(transports, 'Bus')) // true
console.log(isElementInArray(transports, 'Phone')) // false
console.log(isElementInArray(transports, 'Airplane')) // true
*/

/*
const tags = [
  ["javascript", "es6"],
  ["css", "flexbox"],
  ["html", "web-browser"],
];
const fruits = [
  { title: "Orange", quantity: 10 },
  { title: "Banana", quantity: 5 },
  { title: "Apple", quantity: 25 },
];
const primitiveTypesArray = [25, "x", true, undefined, null];

function isElementInArray(searchElement, inputArray) {
  if (typeof searchElement !== "object") {
    return inputArray.includes(searchElement);
  }
  return inputArray
    .map((element) => JSON.stringify(element))
    .includes(JSON.stringify(searchElement));
}

console.log(isElementInArray(['css', 'flexbox'], tags)) // true
console.log(isElementInArray(['flexbox', 'css'], tags)) // false
console.log(isElementInArray({ title: 'Apple', quantity: 25 }, fruits)) // true
console.log(isElementInArray({ title: 'Banana' }, fruits)) // false
console.log(isElementInArray(25, primitiveTypesArray)) // true
*/

/*
const pushIfUnique = (inputArray, newElement) => {
  if (inputArray.includes(newElement)) {
    return console.log(`${newElement} already in array`);
  }
  inputArray.push(newElement);
}
const myNumbers = [123, 50, 27];
pushIfUnique(myNumbers, 50); // "50 already in array"
console.log(myNumbers); // [123, 50, 27]
pushIfUnique(myNumbers, 80);
console.log(myNumbers); // [123, 50, 27, 80]
pushIfUnique(myNumbers, 80); // "80 already in array"
console.log(myNumbers); // [123, 50, 27, 80]
pushIfUnique(myNumbers, 77);
console.log(myNumbers); // [123, 50, 27, 80, 77]
*/

/*
const inputPosts = [
  {
    title: "Как быстро выучить JavaScript?",
    postId: 3421,
    comments: 25,
  },
  {
    title: "Где используется JavaScript?",
    postId: 5216,
    comments: 3,
  },
  {
    title: "Какая разница между React и Angular?",
    postId: 8135,
    comments: 12,
  },
];
function popularPostsIds(posts, minimalCommentsQty) {
  return posts.reduce(
    (postsIds, post) =>
      post.comments >= minimalCommentsQty
        ? postsIds.concat([post.postId])
        : postsIds,
    []
  );
}
console.log(popularPostsIds(inputPosts, 10)); // [3421, 8135]
console.log(popularPostsIds(inputPosts, 15)); // [3421]
console.log(popularPostsIds(inputPosts, 50)); // []
*/

/*
const inputProducts = [
  {
    title: "Phone case",
    price: 23,
    quantity: 2,
    category: "Accessories",
  },
  {
    title: "Android phone",
    price: 150,
    quantity: 1,
    category: "Phones",
  },
  {
    title: "Headphones",
    price: 78,
    quantity: 1,
    category: "Accessories",
  },
  {
    title: "Sport Watch",
    price: 55,
    quantity: 2,
    category: "Watches",
  },
];

function quantitiesByCategories(products) {
  return products.reduce((qtyByCategories, product) => {
    const { category, quantity } = product;
    qtyByCategories[category] = (qtyByCategories[category] || 0) + quantity;
    return qtyByCategories;
  }, {});
}
console.log(quantitiesByCategories(inputProducts));
*/

/*
const inputProducts = [
  {
    title: "Phone case",
    price: 23,
    quantity: 2,
    category: "Accessories",
  },
  {
    title: "Android phone",
    price: 150,
    quantity: 1,
    category: "Phones",
  },
  {
    title: "Headphones",
    price: 78,
    quantity: 1,
    category: "Accessories",
  },
  {
    title: "Sport Watch",
    price: 55,
    quantity: 2,
    category: "Watches",
  },
];
const sortProductsByPrice = (products) =>
  [...products].sort((a, b) => a.price - b.price);
const sortedProducts = sortProductsByPrice(inputProducts);
console.log(sortedProducts); // Массив отсортированных товаров
console.log(inputProducts); // Оригинальный массив не должен измениться
*/

/*
const templateLiteral = (num) => {
  return `Число ${num}.
Это число ${num < 10 ? "меньше" : "больше или равно"} 10.
Квадратный корень этого числа - ${Math.sqrt(num)}.`;
};
const myNumber = 9;
console.log(templateLiteral(myNumber));
const myAnotherNumber = 25;
console.log(templateLiteral(myAnotherNumber));
*/

/*
const scores1 = [0, 1.5, 2.5, 3.7];
const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2];
const scores3 = [1.3, 2.5, 1.9];
const scores4 = ["abc", 1.3, true, 2.5, 1.9];

function meanScore(...numbers) {
  if (numbers.some((num) => typeof num !== "number")) {
    console.error("Все аргументы в вызове функции должны быть числами!");
    return;
    // throw new Error('Все аргументы в вызове функции должны быть числами!')
  }
  return numbers
    .reduce((mean, num) => mean + num / numbers.length, 0)
    .toFixed(2);
}

console.log(meanScore(...scores1)); // 1.93
console.log(meanScore(...scores1, ...scores2)); // 2.8
console.log(meanScore(...scores1, ...scores2, ...scores3)); // 2.59
console.log(meanScore(...scores4)); // Все аргументы в вызове функции должны быть числами!
*/

/*
function weatherForecast(city, weather = 'Отличная погода!') {
  return `Прогноз погоды для города ${city}: ${weather}`
}
console.log(weatherForecast('Dubai', 'Солнечно'))
console.log(weatherForecast('London', 'Небольшой дождь'))
console.log(weatherForecast('Paris'))
console.log(weatherForecast('Miami', ''))
console.log(weatherForecast('Las Vegas', undefined))
*/

/*
const photosGallery = (title, dimensions, date) => {
  return {
    title,
    date,
    [dimensions]: true,
    info() {
      console.log(`Фото "${title}" имеет разрешение ${dimensions}`);
    },
    publishInfo() {
      console.log(
        `Фото "${title}" было опубликовано ${Math.floor(
          (new Date().getTime() - date.getTime()) / 1000
        )} секунды назад`
      );
    },
  };
};

const myDogPhoto = photosGallery("My dog", "1920x1080", new Date());
const testDimension1 = "1920x1080";
const testDimension2 = "1080x720";
myDogPhoto.info();
setTimeout(() => myDogPhoto.publishInfo(), 2000);
console.log(myDogPhoto[testDimension1]); // true
console.log(myDogPhoto[testDimension2]); // undefined
console.log(Object.keys(myDogPhoto));
*/

/*
const processQuantities = ([minQty, maxQty, defaultQty = 0]) => {
  console.log(minQty) // 8
  console.log(maxQty) // 29
  console.log(defaultQty) // 10 в первом вызове, 0 во втором вызове
  return defaultQty + maxQty - minQty
}
const inputQuantities1 = [8, 29, 10]
console.log(processQuantities(inputQuantities1)) // 31
const inputQuantities2 = [8, 29]
console.log(processQuantities(inputQuantities2)) // 21
*/

/*
let min, max;
function minMax(...numbers) {
  return [Math.min(...numbers), Math.max(...numbers)];
}
[min, max] = minMax(24, 5, 34, 10);
console.log(min, max);
[min, max] = minMax(18, 23, 103, 70, 80, 25);
console.log(min, max);
*/

/*
const person = {
  name: "Alice",
  age: 19,
  location: {
    country: "England",
    city: "London",
  },
};
const personInfo = (person) => {
  const {
    name,
    age: personAge,
    location: { country: origin, city: homeCity },
    friendsQty = 0,
    createdAtYear = new Date().getFullYear(),
  } = person;
  return {
    name,
    personAge,
    origin,
    homeCity,
    friendsQty,
    createdAtYear,
  };
};
const result = personInfo(person);
console.log(result);
*/

/*
const testPosts = [
  {
    postId: 234,
    author: "robd",
    commentsQty: 5,
  },
  {
    postId: 823,
    author: "sady",
  },
  {
    postId: 161,
    author: "merryl",
    commentsQty: 8,
  },
];
const processPosts = (posts) => {
  return posts.map((post) => {
    const { 
      postId,
      author: postAuthor,
      commentsQty: postCommentQty = 0,
    } = post;
    return {
      postId: postId + 1000,
      postAuthor,
      postCommentQty,
    }
  })
}
const processedPosts = processPosts(testPosts);
console.log(processedPosts);
console.log(testPosts);
*/

/*
let person = {
  _id: "5ad8cefcc0971792dacb3f1f",
  index: 4,
  processed: false,
  cart: ["item1", "item2", "item3"],
  email: "slarsen@test.com",
  name: "Samanta Larsen",
  cartId: 435,
};
{
  let _id, processed, cart;
  ({ _id, processed, cart, ...person } = person);
  console.log(_id, processed, cart);
}
let { _id, processed, cart, ...rest } = person;
console.log(person);
console.log(rest);
*/

/*
class ExtendedArray extends Array {
  sum() {
    return this.reduce((sum, num) => sum + num, 0);
  }
  onlyNumbers() {
    return this.filter((el) => typeof el === "number");
  }
}
const myExtendedArray = new ExtendedArray(10, 4, 5);
console.log(myExtendedArray);
console.log(myExtendedArray.sum());
const myExtendedArray2 = new ExtendedArray("abc", 5, true, 25);
console.log(myExtendedArray2.onlyNumbers());
myExtendedArray2.forEach((el) => console.log(el));
*/

/*
class CustomArray extends Array {
  customPush(newElement) {
    console.log(this.length);
    this[this.length] = newElement;
    console.log(this.length);
    console.log(`Новый элемент ${newElement} был только что добавлен в массив`);
  }
}
const myCustomArray = new CustomArray(10, 3, 7, 5);
myCustomArray.customPush(25);
console.log(myCustomArray);
myCustomArray.push(30);
console.log(myCustomArray);
*/

/*
function sumNumbers() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log("Sum of all arguments is ", sum);
}
sumNumbers(1, 3);
sumNumbers(10, 20, 5);
sumNumbers(2, 5, 80, 1, 10, 12);
*/

/*
console.log(firstFunction(2, 5)); // Done
// console.log(secondFunction(5, 10)); // Cannot acsess ' ' before initialization
function firstFunction(a, b) {
  return a + b;
}
console.log(firstFunction(2, 5)); // Done
// console.log(secondFunction(5, 10)); // Cannot acsess ' ' before initialization
const secondFunction = function (a, b) {
  return a + b;
};
console.log(firstFunction(2, 5)); // Done
console.log(secondFunction(5, 10)); // Done
*/

/*
const b = 2;
let d = 15;
// console.log(a,  b, c,  d); // a - is not defined, b - 2, c - is not defined, d - 15
function myFn1(a) {
  let b;
  let d = 10;
  myFn2(b);
  // console.log(a,  b, c,  d); // a - undefined, b - undefined, c - is not defined, d - 10
}
function myFn2(a) {
  let c = 5;
  console.log(a, b, c, d); // a - undefined, b - 2, c - 5, d - 15
}
myFn1();
*/

/*
const a = 5;
const b = 10;
if (b > a) {
  let c = 2;
  c = a + b + c;
  console.log(c); // 17
}
// console.log(c); // c is not defined
*/

/*
function isNumber(a) {
  return typeof a === 'number' ? `${a} - это число` : `${a} - это не число`
}
console.log(isNumber(10))
console.log(isNumber('Привет'))
console.log(isNumber(true))
*/

/*
const mukltiply = (a, b) => a * b;
setTimeout(() => {
  console.log(mukltiply(5, 10));
}, 2000);
*/

/*
function multiplyBy(a, b = 2) {
  console.log(a * b);
}
multiplyBy(2); // 4
multiplyBy(2, undefined); // 4
multiplyBy(2, 0); // 0
multiplyBy(5, 10); // 50
*/

/*
function square(a) {
  // if (a === undefined) {
  //   throw new Error('Функция "square" не может быть вызвана без аргумента')
  // }
  if (arguments.length === 0) {
    throw new Error('Функция "square" не может быть вызвана без аргумента');
  }
  console.log(a * a);
}
square(10); // 100
square();
*/

/*
const objectWithNumbers = {
  x: 5,
  y: 20,
  z: 3,
};
const mult = ({ x, y, z }) => x * y * z;
const result = mult(objectWithNumbers);
console.log(result); // 300
*/

/*
const arr = [1, 2, 3, 4, 5, 6, 7];
const [a, b, ...c] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // [3, 4, 5, 6, 7]
*/

/*
const a = [1, 2];
const b = [4, 5];
const c = [8, 9, 10];
const d = 11;
const combinedArray = [0, ...a, 3, ...b, 6, 7, ...c, d];
console.log(combinedArray); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// Original arrays were not changed
console.log(a);
console.log(b);
console.log(c);
*/

/*
const a = [1, 2, 3];
// // OPTION 1
// const b = [...a]
// // OPTION 2
// const b = Array.from(a)
// OPTION 3
const b = JSON.parse(JSON.stringify(a));
b.push("newElement");
console.log(a); // [1, 2, 3]
console.log(b); // [1, 2, 3, "newElement"]
*/

/*
const cars = [
  { brand: "Honda", price: 13000 },
  { brand: "Rolls-Royce", price: 120000 },
];

function carInfo({ brand, price }) {
  return `Цена автомобиля ${brand} - ${price}$ и это ${
    price > 20000 ? "дорогая" : "дешёвая"
  } машина`;
}

cars.forEach((car) => console.log(carInfo(car)));
// Цена автомобиля Honda - 13000$ и это дешёвая машина
// Цена автомобиля Rolls-Royce - 120000$ и это дорогая машина
*/

/*
const person1 = {
  name: "Mike",
  info: {
    country: "Spain",
    age: 23,
  },
  postsQuantity: 100,
};
const person2 = {
  name: "Alice",
  info: {
    country: "Italy",
    age: 25,
  },
};
const shortPerson = ({
  name: n,
  info: { country: c, age: a },
  postsQuantity: p = 0,
}) => ({
  n,
  c,
  a,
  p,
});
console.log(shortPerson(person1)); // { n: "Mike", c: "Spain", a: 23, p: 100 }
console.log(shortPerson(person2)); // { n: "Alice", c: "Italy", a: 25, p: 0 }
*/

/*
let vowelsCount = 0;
const vowels = ["a", "e", "i", "o", "u"];
const str = "Today is the best day of my life";
// // OPTION 1
// str.split('').forEach((char) => {
//   if (vowels.includes(char)) {
//     vowelsCount += 1
//   }
// })
// OPTION 2
for (const char of str) {
  if (vowels.includes(char)) {
    vowelsCount += 1;
  }
}
console.log(vowelsCount); // 9
*/

/*
let a = "first";
let b = "second";
console.log(a, b); // first second
[b, a] = [a, b];
console.log(a, b); // second first
*/

/*
const createGreeting = () => {
  let greetingString = "Hey, this is";
  function greet(name) {
    return `${greetingString} ${name}`;
  }
  function changeGreeting(newGreeting) {
    greetingString = newGreeting;
  }
  return {
    greet,
    changeGreeting,
  };
};
const greeting1 = createGreeting();
console.log(greeting1.greet("Bob")); // Hey, this is Bob
greeting1.changeGreeting("Good Morning from");
console.log(greeting1.greet("Emily")); // Good Morning from Emily
greeting1.changeGreeting("Good Evening");
console.log(greeting1.greet("Emily")); // Good Evening Emily
const greeting2 = createGreeting();
console.log(greeting2.greet("Emily")); // Hey, this is Emily
*/
/*
class Fruit {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  priceInfo() {
    return `Price of the ${this.title} is ${this.price}$`;
  }
}
const apple = new Fruit("Apple", 2);
console.log(apple.priceInfo()); // Price of the Apple is 2$
const orange = new Fruit("Orange", 3);
console.log(orange.priceInfo()); // Price of the Orange is 3$
*/

/*
const objectWithNumbers = {
  a: 10,
  b: 20,
  c: "string",
  d: 12,
};
function sumObjectValues(nums) {
  let sum = 0;
  Object.keys(nums).forEach((key) => {
    if (typeof nums[key] === "number") {
      sum += nums[key];
    }
  });
  return sum;
}
const result = sumObjectValues(objectWithNumbers);
console.log(result); //42
*/

const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

function sumPositiveNegative(arr) {
  return arr.reduce(
    (sums, num) => {
      if (num > 0) {
        return {
          ...sums,
          positive: sums.positive + num,
        };
      }
      return {
        ...sums,
        negative: sums.negative + num,
      };
    },
    { positive: 0, negative: 0 }
  );
}

const result = sumPositiveNegative(nums);
console.log(result); // { positive: 74, negative: -54 }
