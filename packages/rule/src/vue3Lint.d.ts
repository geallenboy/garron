declare const vue3Lint: {
  root: boolean;
  env: {
    browser: boolean;
    node: boolean;
    es6: boolean;
  };
  parser: string;
  parserOptions: {
    parser: string;
    ecmaVersion: number;
    sourceType: string;
    jsxPragma: string;
    ecmaFeatures: {
      jsx: boolean;
    };
  };
  extends: string[];
  rules: {
    'vue/script-setup-uses-vars': string;
    '@typescript-eslint/ban-ts-ignore': string;
    '@typescript-eslint/explicit-function-return-type': string;
    '@typescript-eslint/no-explicit-any': string;
    '@typescript-eslint/no-var-requires': string;
    '@typescript-eslint/no-empty-function': string;
    'vue/custom-event-name-casing': string;
    'no-use-before-define': string;
    '@typescript-eslint/no-use-before-define': string;
    '@typescript-eslint/ban-ts-comment': string;
    '@typescript-eslint/ban-types': string;
    '@typescript-eslint/no-non-null-assertion': string;
    '@typescript-eslint/explicit-module-boundary-types': string;
    '@typescript-eslint/no-unused-vars': (
      | string
      | {
          argsIgnorePattern: string;
          varsIgnorePattern: string;
        }
    )[];
    'no-unused-vars': (
      | string
      | {
          argsIgnorePattern: string;
          varsIgnorePattern: string;
        }
    )[];
    'space-before-function-paren': string;
    'vue/attributes-order': string;
    'vue/one-component-per-file': string;
    'vue/html-closing-bracket-newline': string;
    'vue/max-attributes-per-line': string;
    'vue/multiline-html-element-content-newline': string;
    'vue/singleline-html-element-content-newline': string;
    'vue/attribute-hyphenation': string;
    'vue/require-default-prop': string;
    'vue/require-explicit-emits': string;
    'vue/html-self-closing': (
      | string
      | {
          html: {
            void: string;
            normal: string;
            component: string;
          };
          svg: string;
          math: string;
        }
    )[];
    'vue/multi-word-component-names': string;
  };
};
export default vue3Lint;
