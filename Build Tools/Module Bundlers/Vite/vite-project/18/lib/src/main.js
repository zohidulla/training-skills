export function pluck(collection, field) {
  return collection.map((item) => item[field]);
}

// const users = [
//   {
//     name: "John",
//     age: 34,
//   },
//   {
//     name: "Jane",
//     age: 25,
//   },
//   {
//     name: "Alex",
//     age: 26,
//   },
// ];

// console.log(pluck(users, "name"));
