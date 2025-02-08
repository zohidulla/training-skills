import { resolve } from "path";

export default {
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.js"),
      name: "Pluck",
      fileName: "pluck",
    },
  },
};
