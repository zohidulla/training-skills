import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [Inspect(), tailwindcss()],
});
