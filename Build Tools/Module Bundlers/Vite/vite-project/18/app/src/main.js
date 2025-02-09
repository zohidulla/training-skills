import { pluck } from "pluck";
import { log } from "pluck/log";

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

log(pluck(users, "name"));
