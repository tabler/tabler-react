module.exports = function(api) {
  api.cache(false);

  const presets = [
    [
      "@babel/env",
      {
        modules: false,
      },
    ],
    "@babel/typescript",
    "@babel/react",
  ];
  const plugins = [
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-class-properties",
  ];

  return {
    presets,
    plugins,
  };
};
