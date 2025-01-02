import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import jestPlugin from "eslint-plugin-jest";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  js.configs.recommended,
  prettierConfig,
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
        tsconfigRootDir: ".",
        warnOnUnsupportedTypeScriptVersion: false,
      },
      globals: {
        ...jestPlugin.environments.globals.globals,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      jest: jestPlugin,
      prettier: prettier,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...jestPlugin.configs.recommended.rules,
      ...prettier.configs.recommended.rules,
      "prettier/prettier": "error",
      "@typescript-eslint/no-explicit-any": "off",
      "no-undef": "off", // TypeScriptの型チェックに任せる
    },
  },
];
