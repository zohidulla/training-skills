/*
const objectA = {
  a: 10,
  b: true
};

const copyOfA = objectA;

copyOfA.a = 20;
copyOfA.c = "abc";

console.log(objectA);
console.log(copyOfA);
*/

/*
const b = () => {
  console.log("Hey there");
};

b();
b = 10;
b();
*/

/*
const post = {
  title: "My post",
  likesQty: 5
};
const postStringified = JSON.stringify(post);
console.log(postStringified);
console.log(JSON.parse(postStringified));
*/

// function myFn(a, b) {
//   let c;
//   a = a + 1;
//   c = a + b;
//   return c;
// }
// console.dir(myFn);

// console.log([] + null + 1);
// console.log("foo" + +"bar");
// console.log(!!"false" == !!"true");

const purchase = {
  Electronics: [
    { name: "Laptop", price: 1500 },
    { name: "Keyboard", price: 100 },
    { name: "HDMI cable", price: 10 },
    { name: "Mouse", price: 50 },
  ],
  Textile: [
    { name: "Bag", price: 50 },
    { name: "Mouse pad", price: 15 },
  ],
  Notebooks: [{ name: "Laptop", price: 1999 }],
};
const prices = [10, 1500, 100, 50];
const basket = { Laptop: 1700, Keyboard: 100 };
const stock = [
  { name: "Laptop", quantity: 15 },
  { name: "Keyboard", quantity: 0 },
  { name: "Mouse", quantity: 10 },
];
// console.dir(purchase, { depth: null });

/*
const calculateTotal = (obj) => {
  let total = 0;
  for (const key in obj) {
    total += obj[key];
  }
  return total;
};
const addTotal = (obj) => {
  return { ...obj, total: calculateTotal(obj) };
  // return { obj, total: calculateTotal(obj) };
};
const order = addTotal(basket);
// console.log(order);

const findObj = (obj, name) => {
  const arr = [];
  for (const key in obj) {
    for (const item of obj[key]) {
      if (item.name === name) arr.push(item);
    }
  }
  return arr;
};

const result = findObj(purchase, "Laptop");
// console.log(result);
*/

/*
const add = (a, b, callback) => {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    callback(new Error("Invalid arguments"));
    return;
  }
  callback(null, a + b);
};
const res = add(Infinity, 3, (error, result) => {
  if (error) console.error(error);
  console.log({ result });
});
*/

/*
// const inStock = (item) => item.quantity > 0;
// const available = stock.filter(inStock);
const available = stock.filter((el) => el.quantity > 0);
console.log(available);
*/

/*
function add(x) {
  function closure(y) {
    const z = x + y;
    console.log(`${x} + ${y} = ${z}`);
    return z;
  }
  return closure;
}

const result = add(3)(5);
console.log(result);
*/

/*
const logger = (kind) => {
  const colors = {
    warning: "\x1b[1;33m",
    error: "\x1b]0;31m",
    info: "\x1b[1;37m",
  };
  const color = colors[kind] || colors.info;
  return (s) => {
    const date = new Date().toISOString();
    console.log(color + "\t" + date + "\t" + s);
  };
};

const warning = logger("warning");
const error = logger("error");
const slow = logger("slow");

slow("I am slow logger");
warning("Hello");
error("World");
*/

/*
const generateKey = (alphabet) => {
  const max = alphabet.length;
  return (length) => {
    let key = "";
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * max);
      key = key + alphabet[index];
    }
    return key;
  };
};
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const generatePassword = generateKey(chars);
const password = generatePassword(8);
console.log({ password });
*/

/*
const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(5));
*/
/*
const factorial = (n) => {
  console.log({ n });
  if (n === 0) {
    console.log(`${n}! = 1`);
    return 1;
    // stop;
  }
  const result = n * factorial(n - 1);
  console.log(`${n}! = ${result}`);
  return result;
};
console.log(factorial(5));
*/
/*
function factorial(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorial(num - 1));
  }
}
*/
/*
function factorial(num) {
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
}
*/
/*
function factorial(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
*/
