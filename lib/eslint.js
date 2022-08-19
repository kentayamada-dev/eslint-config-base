module.exports = {
  "array-element-newline": ["error", "consistent"],
  "dot-location": ["error", "property"],
  "function-call-argument-newline": ["error", "consistent"],
  "function-paren-newline": ["error", "consistent"],
  "implicit-arrow-linebreak": "off",
  "max-len": [
    "error",
    {
      ignoreComments: true,
      ignorePattern: "^import .*",
      ignoreStrings: true,
      code: 120
    }
  ],
  "max-lines-per-function": "off",
  "multiline-ternary": "off",
  "newline-per-chained-call": "off",
  "no-restricted-imports": [
    "error",
    {
      patterns: [
        {
          group: ["src/*"],
          message: "Please use relative import instead."
        }
      ]
    }
  ],
  "no-ternary": "off",
  "object-property-newline": [
    "error",
    {
      allowAllPropertiesOnSameLine: true
    }
  ],
  "one-var": ["error", "never"],
  "padded-blocks": ["error", "never"],
  "quote-props": ["error", "consistent"],
  "sort-imports": "off",
  "no-void": [
    "error",
    {
      allowAsStatement: true
    }
  ],
}
