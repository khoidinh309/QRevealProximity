module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@": "./src",
          },
        },
      ],
      [
        "babel-plugin-inline-import",
        {
          "extensions": [".svg"]
        }
      ],
    ],
  };
};
