module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@testing-library/preact|preact)/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@testing-library/preact$': '<rootDir>/__mocks__/@testing-library/preact.js',
    '^@testing-library/jest-dom$': '<rootDir>/__mocks__/@testing-library/jest-dom.js',
  },
  rootDir: 'c:/dj\'s/projects/ag-ui-library'
};
