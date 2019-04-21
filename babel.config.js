module.exports = api => {
  api.cache(true);

  const presets = [
    [
      "@babel/env",
      {
        targets: "> 0.25%, not dead",
        useBuiltIns: "usage",
        corejs: 3,
      },
    ],
    "@babel/react",
    "@babel/typescript",
  ];
  const plugins = [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
  ];

  return {
    presets,
    plugins,
  };
};
