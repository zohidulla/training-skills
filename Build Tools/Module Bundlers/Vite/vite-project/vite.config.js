import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  esbuild: {
    jsxFactory: "create",
    jsxInject: "import { create } from '/src/12-create.js'",
  },
  plugins: [Inspect(), tailwindcss()],
});
