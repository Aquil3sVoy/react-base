module.exports = {
  '*.{ts,tsx}': [
    'eslint . --cache --fix --ext .tsx --ext .ts src',
    () => 'npm run test',
  ],
}
