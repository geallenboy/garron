const reactLint = {
  root: true,
  parser: '@typescript-eslint/parser', //定义ESLint的解析器
  plugins: [
    //定义了 eslint文件所依赖的插件
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    //指定ESLint可以解析JSX语法
    ecmaVersion: 11,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  globals: {
    // 自定义全局变量
    API: true,
    React: true
  },
  settings: {
    //自动发现React的版本，从而进行规范react代码
    react: {
      version: 'detect'
    }
  },
  env: {
    //指定环境
    browser: true,
    amd: true,
    node: true
  },
  // 自定义规则
  // "off" 或 0 - 关闭规则
  // "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
  // "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }]
  }
};

export default reactLint;
