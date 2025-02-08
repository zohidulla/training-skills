import { pluck } from "pluck";

const users = [
  {
    name: "Ali",
    age: 34,
  },
  {
    name: "Vali",
    age: 25,
  },
  {
    name: "Bek",
    age: 26,
  },
];

console.log(pluck(users, "name"));
