import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import autoExternal from "rollup-plugin-auto-external";

import pkg from "./package.json";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const config = {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],
  external: ["react", "react-dom"],
  plugins: [
    autoExternal(),
    resolve({ extensions }),
    commonjs(),
    babel({
      extensions,
      include: ["src/**/*"],
      exclude: "node_modules/**",
    }),
    postcss({
      modules: false,
      extract: "Tabler.css",
    }),
    url(),
  ],
};

export default config;
