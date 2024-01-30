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

const newPost = (post, addedAt = Date()) => ({
  ...post,
  addedAt,
});

const firstPost = {
  id: 1,
  author: "Bogdan",
};

newPost(firstPost);
console.log(newPost(firstPost));
console.log("firstPost =>", firstPost);
