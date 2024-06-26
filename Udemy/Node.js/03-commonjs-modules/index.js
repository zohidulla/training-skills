const { myName, myHobbies, myFavoriteNumber } = require("./multiple-exports");
const {
  myName: myOtherName,
  myFriendsName,
  myGreatHobbies,
} = require("./export-and-import");
const greetingFn = require("./my-modules/single-export");
// // DON'T USE ABSOLUTE PATHS
// const greetingFn = require("/Desktop/Node.js/03-commonjs-modules/single-export.js");

// Imports from multiple-exports
console.log(myName);
console.log(myHobbies);
console.log(myFavoriteNumber);

// mutates array in the multiple-exports module
myHobbies.push("climbing");

// Import from single-export
console.log(greetingFn);
greetingFn(myName);

// Imports from export-and-import
console.log(myOtherName);
console.log(myFriendsName);
console.log(myGreatHobbies);

// console.log(arguments.callee.toString());

// console.log(exports);

// console.log(require);

// console.log(module);

// console.log(__filename);

// console.log(__dirname);
