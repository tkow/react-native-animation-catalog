module.exports = {
  root: true,
  plugins: ["react", "@typescript-eslint", "prettier"],
  extends: '@react-native-community',
  parser: "@typescript-eslint/parser",
  env: {
    "browser": true,
    "node": true,
    "es6": true
  },
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json"
  },
};