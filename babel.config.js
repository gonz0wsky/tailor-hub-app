module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".otf"],
          // Add paths to tsconfig.json file too
          alias: {
            "@assets": "./assets",
            "@core": "./src/core",
            "@features": "./src/features",
            "@shared": "./src/shared",
          },
        },
      ],
      "@babel/plugin-transform-export-namespace-from",
      "macros",
      "react-native-reanimated/plugin",
    ],
  };
};
