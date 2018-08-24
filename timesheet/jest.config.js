module.exports = {
    "coverageDirectory": "../coverage",
    "testEnvironment": "node",
    "testURL": "http://localhost",
    "rootDir": ".",
    "roots": [
      "test"
    ],
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ]
}