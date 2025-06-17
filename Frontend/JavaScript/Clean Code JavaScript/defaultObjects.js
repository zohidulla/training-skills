const DEFAULT_TITLE = 'Default title';
const DEFAULT_BODY = 'Default body';

const menuConfig = {
  title: '',
  // 'body' key is absent
  // 'buttonText' key is absent
  isCancellable: false,
};

// // OPTION 1
// function createMenu(config) {
//   const finalConfig = Object.assign(
//     {
//       title: DEFAULT_TITLE,
//       body: DEFAULT_BODY,
//       buttonText: 'Click me!',
//       isCancellable: true,
//     },
//     config
//   );
//   // some actions with finalConfig
//   return finalConfig;
// }

// // OPTION 2
// function createMenu(config) {
//   const defaultConfig = {
//     title: DEFAULT_TITLE,
//     body: DEFAULT_BODY,
//     buttonText: 'Click me!',
//     isCancellable: true,
//   };
//   const finalConfig = { ...defaultConfig, ...config };
//   // some actions with finalConfig
//   return finalConfig;
// }

// OPTION 3
function createMenu({
  title = DEFAULT_TITLE,
  body = DEFAULT_BODY,
  buttonText = 'Click me!',
  isCancellable = true,
}) {
  const finalConfig = {
    title,
    body,
    buttonText,
    isCancellable,
  };
  // some actions with finalConfig
  return finalConfig;
}

const menu = createMenu(menuConfig);
console.log(menu);
