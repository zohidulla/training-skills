import { pluckAndLog } from "@zohidjon/pluck";
import { log } from "@zohidjon/pluck/log";

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

pluckAndLog(users, "name");
