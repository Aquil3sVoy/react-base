module.exports = {
  '*.{ts,tsx}': [
    'eslint . --cache --fix --ext .tsx --ext .ts lint',
    () => 'npm run test',
  ],
}
