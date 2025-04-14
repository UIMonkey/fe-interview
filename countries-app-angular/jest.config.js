// const esModules = ["[thir-party-lib]"].join("|");

module.exports = {
  //   transformIgnorePatterns: [`<rootDir>/node_modules/(?!${esModules})`],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        allowSyntheticDefaultImports: true,
      },
    ],
    "^.+\\.js$": "babel-jest",
  },
};
