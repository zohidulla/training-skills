import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";
import tailwindcss from "@tailwindcss/vite";
import checker from "vite-plugin-checker";
import path from "path";

export default defineConfig({
  plugins: [
    Inspect(),
    tailwindcss(),
    checker({
      typescript: true,
    }),
  ],
  envPrefix: "APP_",
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "./src/assets"),
    },
  },
});
