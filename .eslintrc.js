const { reactLint } = require('./packages/rule');

module.exports = {
  ...reactLint,
  rules: {
    '@typescript-eslint/no-this-alias': 'off', //关闭this警告
    '@typescript-eslint/no-explicit-any': 'off', //关闭any类型警告
    'react/display-name': 'off',
    '@typescript-eslint/no-var-requires': 'off'
  }
};
