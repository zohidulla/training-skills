const modules = import.meta.glob("./src/10/*/js", {
  eager: true,
  import: "name",
});
// const modules = import.meta.glob("./src/10/*/js", { as: "url", eager: true });

console.log(modules);

// document.addEventListener("click", () => {
//   Object.values(modules).forEach((module) => {
//     module().then((name) => {
//       console.log(name);
//     });
//   });
// });
