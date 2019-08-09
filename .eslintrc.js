module.exports = {
  root: true,
  extends: '@react-native-community',
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