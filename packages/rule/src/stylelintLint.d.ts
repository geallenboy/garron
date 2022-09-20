declare const stylelintLint: {
  root: boolean;
  plugins: string[];
  customSyntax: string;
  extends: string[];
  rules: {
    'selector-class-pattern': null;
    'selector-pseudo-class-no-unknown': (
      | boolean
      | {
          ignorePseudoClasses: string[];
        }
    )[];
    'selector-pseudo-element-no-unknown': (
      | boolean
      | {
          ignorePseudoElements: string[];
        }
    )[];
    'at-rule-no-unknown': (
      | boolean
      | {
          ignoreAtRules: string[];
        }
    )[];
    'no-empty-source': null;
    'named-grid-areas-no-invalid': null;
    'unicode-bom': string;
    'no-descending-specificity': null;
    'font-family-no-missing-generic-family-keyword': null;
    'declaration-colon-space-after': string;
    'declaration-colon-space-before': string;
    'rule-empty-line-before': (
      | string
      | {
          ignore: string[];
        }
    )[];
    'unit-no-unknown': (
      | boolean
      | {
          ignoreUnits: string[];
        }
    )[];
    'order/order': (
      | (
          | string
          | {
              type: string;
              name: string;
            }
        )[]
      | {
          severity: string;
        }
    )[];
  };
  ignoreFiles: string[];
  overrides: {
    files: string[];
    extends: string[];
    rules: {
      'keyframes-name-pattern': null;
      'selector-pseudo-class-no-unknown': (
        | boolean
        | {
            ignorePseudoClasses: string[];
          }
      )[];
      'selector-pseudo-element-no-unknown': (
        | boolean
        | {
            ignorePseudoElements: string[];
          }
      )[];
    };
  }[];
};
export default stylelintLint;
