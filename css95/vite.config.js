import { resolve } from "node:path";
import { libInjectCss } from "vite-plugin-lib-inject-css";

/** @type {import('vite').UserConfig} */
export default {
  assetsDir: "./",
  base: "./",
  cssCodeSplit: false,
  outDir: "./dist",
  root: "./",
  build: {
    lib: {
      entry: [
        resolve(__dirname, "./src/module.js"),
        resolve(__dirname, "./src/vanilla.css"),
      ],
      formats: ["es"],
    },
  },
  plugins: [libInjectCss()],
};
