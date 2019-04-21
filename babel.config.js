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
    ["@babel/plugin-proposal-decorators", { legacy: true }], // proposal-class-propertiesより前に定義する必要がある
    ["@babel/plugin-proposal-class-properties", { loose: true }],
  ];

  return {
    presets,
    plugins,
  };
};
