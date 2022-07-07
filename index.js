const eslint = require("./lib/eslint")
const typescriptEslint = require("./lib/typescript-eslint")
const eslintPluginImport = require("./lib/eslint-plugin-import")
const eslintPluginTypescriptSortKeys = require("./lib/eslint-plugin-typescript-sort-keys")

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "typescript-sort-keys"],
  extends: ["eslint:all", "plugin:@typescript-eslint/all", "plugin:eslint-comments/recommended"],
  rules: {
    ...eslint,
    ...typescriptEslint,
    ...eslintPluginTypescriptSortKeys,
    ...eslintPluginImport
  }
};
