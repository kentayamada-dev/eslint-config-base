module.exports = {
  "@typescript-eslint/indent": "off",
  "@typescript-eslint/no-extra-parens": "off",
  "@typescript-eslint/no-magic-numbers": "off",
  "@typescript-eslint/object-curly-spacing": ["error", "always"],
  "@typescript-eslint/prefer-readonly-parameter-types": "off",
  "@typescript-eslint/space-before-function-paren": [
    "error",
    {
      anonymous: "always",
      asyncArrow: "always",
      named: "never"
    }
  ],
  "@typescript-eslint/strict-boolean-expressions": [
    "error",
    {
      allowNullableString: true
    }
  ],
}
