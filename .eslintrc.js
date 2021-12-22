module.exports = {
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  plugins: ["@typescript-eslint", "import", "googleappsscript", "jest"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  env: {
    node: true,
    "googleappsscript/googleappsscript": true,
    "jest/globals": true,
  },
  settings: {
    node: {
      tryExtensions: [".ts", ".js", ".json"],
    },
    "import/resolver": {
      node: {
        paths: ["src", "__tests__"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "no-undef": "off",
    "no-console": "off",
    "import/extensions": "off",
    "no-unused-vars": "off",
    "import/prefer-default-export": "off",
  },
};
