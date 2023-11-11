import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import terser from "@rollup/plugin-terser";
import css from "rollup-plugin-import-css";
import copy from "rollup-plugin-copy";

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
    babel({ babelHelpers: "bundled", exclude: "node_modules/**" }),
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    css({ output: "css/styles.css" }),
    image({ dom: false }),
    copy({
      targets: [
        { src: "src/app.html", dest: "public", rename: "index.html" },
        {
          src: "node_modules/bulma/css/bulma.min.css",
          dest: "public/css",
        },
        {
          src: "node_modules/@fortawesome/fontawesome-free/css/all.min.css",
          dest: "public/css/fontawesome",
        },
        {
          src: "node_modules/@fortawesome/fontawesome-free/webfonts/*",
          dest: "public/css/webfonts",
        },
      ],
    }),
  ],
};
