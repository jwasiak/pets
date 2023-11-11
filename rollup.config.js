import terser from "@rollup/plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import css from "rollup-plugin-import-css";
import image from "@rollup/plugin-image";
import { babel } from "@rollup/plugin-babel";

import dotenv from "dotenv";
dotenv.config();

export default {
  input: "src/index.jsx",
  output: [
    {
      file: "public/bundle.js",
      format: "es",
      sourcemap: process.env.NODE_ENV === "developement" ? true : false,
      plugins: process.env.NODE_ENV === "developement" ? [] : [terser()],
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({ babelHelpers: "bundled" }),
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    css({ output: "styles.css" }),
    image({ dom: false }),
  ],
};
