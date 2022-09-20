declare const reactLint: {
  root: boolean;
  parser: string;
  plugins: string[];
  extends: string[];
  parserOptions: {
    ecmaVersion: number;
    ecmaFeatures: {
      jsx: boolean;
    };
    sourceType: string;
  };
  globals: {
    API: boolean;
    React: boolean;
  };
  settings: {
    react: {
      version: string;
    };
  };
  env: {
    browser: boolean;
    amd: boolean;
    node: boolean;
  };
  rules: {
    'prettier/prettier': (
      | string
      | {
          usePrettierrc?: undefined;
        }
      | {
          usePrettierrc: boolean;
        }
    )[];
  };
};
export default reactLint;
