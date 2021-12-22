module.exports = {
  globals: {
    UrlFetchApp: {},
    CacheService: {},
    Logger: {
      log: (data) => console.log(data),
    },
    OAuth2: {},
    PropertiesService: {},
  },
  moduleDirectories: ["node_modules"],
  testMatch: ["<rootDir>/__tests__/?(*.)+(spec|test).+(ts|tsx|js)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ["js", "json", "ts", "tsx"],
  preset: "ts-jest",
  testEnvironment: "node",
};
