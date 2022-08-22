module.exports = {
  '*.{ts,tsx}': [
    'eslint . --cache --fix --ext .tsx --ext .ts',
    () => 'npm run test',
  ],
}
