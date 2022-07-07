module.exports = {
  "import/no-default-export": "error",
  "import/no-namespace": "error",
  "import/no-useless-path-segments": [
    "error",
    {
      noUselessIndex: true
    }
  ],
  "import/order": [
    "error",
    {
      "alphabetize": {
        order: "asc"
      },
      "groups": ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
      "newlines-between": "never"
    }
  ],
}
