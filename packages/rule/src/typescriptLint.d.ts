/**
 * ESLint javascript/typescript 规则
 * 依赖版本：
 *   @typescript-eslint/parser
 *   @typescript-eslint/eslint-plugin
 */
declare const typescriptLint: {
  parser: string;
  plugins: string[];
  env: {
    browser: boolean;
    node: boolean;
  };
  rules: {
    'react/sort-comp': string;
    /**
     * 重载的函数必须写在一起
     * @reason 增加可读性
     */
    '@typescript-eslint/adjacent-overload-signatures': string;
    /**
     * 限制数组类型必须使用 Array<T> 或 T[]
     * @reason 允许灵活运用两者
     */
    '@typescript-eslint/array-type': string;
    /**
     * 禁止对没有 then 方法的对象使用 await
     */
    '@typescript-eslint/await-thenable': string;
    /**
     * 禁止使用 // @ts-ignore // @ts-nocheck // @ts-check
     * @reason 这种注释本身就是对特殊代码的说明
     */
    '@typescript-eslint/ban-ts-comment': string;
    /**
     * 禁止使用类似 tslint:disable-next-line 这样的注释
     */
    '@typescript-eslint/ban-tslint-comment': string;
    /**
     * 禁止使用指定的类型
     */
    '@typescript-eslint/ban-types': string;
    /**
     * 类的只读属性若是一个字面量，则必须使用只读属性而不是 getter
     */
    '@typescript-eslint/class-literal-property-style': string[];
    /**
     * 类型断言必须使用 as Type，禁止使用 <Type>，禁止对对象字面量进行类型断言（断言成 any 是允许的）
     * @reason <Type> 容易被理解为 jsx
     */
    '@typescript-eslint/consistent-type-assertions': (
      | string
      | {
          assertionStyle: string;
          objectLiteralTypeAssertions: string;
        }
    )[];
    /**
     * 优先使用 interface 而不是 type
     * @reason interface 可以 implement, extend 和 merge
     */
    '@typescript-eslint/consistent-type-definitions': string[];
    /**
     * 有默认值或可选的参数必须放到最后
     */
    'default-param-last': string;
    '@typescript-eslint/default-param-last': string;
    /**
     * 禁止使用 foo['bar']，必须写成 foo.bar
     * @reason 当需要写一系列属性的时候，可以更统一
     */
    'dot-notation': string;
    '@typescript-eslint/dot-notation': string;
    /**
     * 函数返回值必须与声明的类型一致
     * @reason 编译阶段检查就足够了
     */
    '@typescript-eslint/explicit-function-return-type': string;
    /**
     * 必须设置类的成员的可访问性
     * @reason 将不需要公开的成员设为私有的，可以增强代码的可理解性，对文档输出也很友好
     */
    '@typescript-eslint/explicit-member-accessibility': string;
    /**
     * 导出的函数或类中的 public 方法必须定义输入输出参数的类型
     */
    '@typescript-eslint/explicit-module-boundary-types': string;
    /**
     * 变量必须在定义的时候赋值
     */
    'init-declarations': string;
    '@typescript-eslint/init-declarations': string;
    /**
     * 类的成员之间是否需要空行
     * @reason 有时为了紧凑需要挨在一起，有时为了可读性需要空一行
     */
    'lines-between-class-members': string;
    '@typescript-eslint/lines-between-class-members': string;
    /**
     * 指定类成员的排序规则
     * @reason 优先级：
     * 1. static > instance
     * 2. field > constructor > method
     * 3. public > protected > private
     */
    '@typescript-eslint/member-ordering': (
      | string
      | {
          default: string[];
        }
    )[];
    /**
     * 接口中的方法必须用属性的方式定义
     * @reason 配置了 strictFunctionTypes 之后，用属性的方式定义方法可以获得更严格的检查
     */
    '@typescript-eslint/method-signature-style': string;
    /**
     * 限制各种变量或类型的命名规则
     */
    '@typescript-eslint/naming-convention': string;
    /**
     * 禁止使用 Array 构造函数
     */
    'no-array-constructor': string;
    '@typescript-eslint/no-array-constructor': string;
    /**
     * 禁止滥用 toString 方法
     */
    '@typescript-eslint/no-base-to-string': string;
    /**
     * 禁止使用容易混淆的非空断言
     */
    '@typescript-eslint/no-confusing-non-null-assertion': string;
    /**
     * 禁止重复定义类的成员
     * @reason 编译阶段就会报错了
     */
    'no-dupe-class-members': string;
    '@typescript-eslint/no-dupe-class-members': string;
    /**
     * 禁止 delete 时传入的 key 是动态的
     */
    '@typescript-eslint/no-dynamic-delete': string;
    /**
     * 不允许有空函数
     * @reason 有时需要将一个空函数设置为某个项的默认值
     */
    'no-empty-function': string;
    '@typescript-eslint/no-empty-function': string;
    /**
     * 禁止定义空的接口
     */
    '@typescript-eslint/no-empty-interface': string;
    /**
     * 禁止使用 any
     */
    '@typescript-eslint/no-explicit-any': string;
    /**
     * 禁止多余的 non-null 断言
     */
    '@typescript-eslint/no-extra-non-null-assertion': string;
    /**
     * 禁止定义没必要的类，比如只有静态方法的类
     */
    '@typescript-eslint/no-extraneous-class': string;
    /**
     * 禁止调用 Promise 时没有处理异常情况
     */
    '@typescript-eslint/no-floating-promises': string;
    /**
     * 禁止对 array 使用 for in 循环
     */
    '@typescript-eslint/no-for-in-array': string;
    /**
     * catch 的参数必须指定具体类型
     */
    '@typescript-eslint/no-implicit-any-catch': string;
    /**
     * 禁止使用 eval
     */
    '@typescript-eslint/no-implied-eval': string;
    /**
     * 禁止给一个初始化时直接赋值为 number, string 的变量显式的声明类型
     * @reason 可以简化代码
     */
    '@typescript-eslint/no-inferrable-types': string;
    'no-invalid-this': string;
    /**
     * 禁止在类之外的地方使用 this
     * @reason 只允许在 class 中使用 this
     */
    '@typescript-eslint/no-invalid-this': string;
    /**
     * 禁止使用无意义的 void 类型
     * @reason void 只能用在函数的返回值中
     */
    '@typescript-eslint/no-invalid-void-type': string;
    /**
     * 禁止使用超出 js 精度范围的数字
     */
    'no-loss-of-precision': string;
    /**
     * 禁止使用 magic numbers
     */
    'no-magic-numbers': string;
    '@typescript-eslint/no-magic-numbers': string;
    /**
     * 禁止在接口中定义 constructor，或在类中定义 new
     */
    '@typescript-eslint/no-misused-new': string;
    /**
     * 避免错误的使用 Promise
     */
    '@typescript-eslint/no-misused-promises': string;
    /**
     * 禁止使用 namespace 来定义命名空间
     * @reason 使用 es6 引入模块，才是更标准的方式。
     * 但是允许使用 declare namespace ... {} 来定义外部命名空间
     */
    '@typescript-eslint/no-namespace': (
      | string
      | {
          allowDeclarations: boolean;
          allowDefinitionFiles: boolean;
        }
    )[];
    /**
     * 禁止在 optional chaining 之后使用 non-null 断言（感叹号）
     * @reason optional chaining 后面的属性一定是非空的
     */
    '@typescript-eslint/no-non-null-asserted-optional-chain': string;
    /**
     * 禁止使用 non-null 断言（感叹号）
     * @reason 使用 non-null 断言时就已经清楚了风险
     */
    '@typescript-eslint/no-non-null-assertion': string;
    /**
     * 禁止给类的构造函数的参数添加修饰符
     * @reason 强制所有属性都定义到类里面，比较统一
     */
    '@typescript-eslint/no-parameter-properties': string;
    /**
     * 禁止使用 require
     * @reason 统一使用 import 来引入模块，特殊情况使用单行注释允许 require 引入
     */
    '@typescript-eslint/no-require-imports': string;
    /**
     * 禁止将 this 赋值给其他变量，除非是解构赋值
     */
    '@typescript-eslint/no-this-alias': (
      | string
      | {
          allowDestructuring: boolean;
        }
    )[];
    /**
     * 禁止 throw 字面量，必须 throw 一个 Error 对象
     */
    '@typescript-eslint/no-throw-literal': string;
    /**
     * 禁止使用类型别名
     */
    '@typescript-eslint/no-type-alias': string;
    /**
     * 测试表达式中的布尔类型禁止与 true 或 false 直接比较
     */
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': string;
    /**
     * 条件表达式禁止是永远为真（或永远为假）的
     */
    '@typescript-eslint/no-unnecessary-condition': string;
    /**
     * 在命名空间中，可以直接使用内部变量，不需要添加命名空间前缀
     */
    '@typescript-eslint/no-unnecessary-qualifier': string;
    /**
     * 禁止范型的类型有默认值时，将范型设置为该默认值
     */
    '@typescript-eslint/no-unnecessary-type-arguments': string;
    /**
     * 禁止无用的类型断言
     */
    '@typescript-eslint/no-unnecessary-type-assertion': string;
    /**
     * 禁止将变量或属性的类型设置为 any
     */
    '@typescript-eslint/no-unsafe-assignment': string;
    /**
     * 禁止调用 any 类型的变量上的方法
     */
    '@typescript-eslint/no-unsafe-call': string;
    /**
     * 禁止获取 any 类型的变量中的属性
     */
    '@typescript-eslint/no-unsafe-member-access': string;
    /**
     * 禁止函数的返回值的类型是 any
     */
    '@typescript-eslint/no-unsafe-return': string;
    /**
     * 禁止无用的表达式
     */
    'no-unused-expressions': string;
    '@typescript-eslint/no-unused-expressions': (
      | string
      | {
          allowShortCircuit: boolean;
          allowTernary: boolean;
          allowTaggedTemplates: boolean;
        }
    )[];
    /**
     * 已定义的变量必须使用
     * @reason 编译阶段检查就足够了
     */
    'no-unused-vars': string;
    '@typescript-eslint/no-unused-vars': string;
    /**
     * 禁止已定义的变量未使用
     */
    '@typescript-eslint/no-unused-vars-experimental': string;
    /**
     * 禁止在定义变量之前就使用它
     * @reason 编译阶段检查就足够了
     */
    'no-use-before-define': string;
    '@typescript-eslint/no-use-before-define': string;
    /**
     * 禁止出现没必要的 constructor
     */
    'no-useless-constructor': string;
    '@typescript-eslint/no-useless-constructor': string;
    /**
     * 禁止使用 require 来引入模块
     * @reason no-require-imports 规则已经约束了 require
     */
    '@typescript-eslint/no-var-requires': string;
    /**
     * 使用 as const 替代 as 'bar'
     * @reason as const 是新语法，不是很常见
     */
    '@typescript-eslint/prefer-as-const': string;
    /**
     * 枚举值必须初始化
     */
    '@typescript-eslint/prefer-enum-initializers': string;
    /**
     * 使用 for 循环遍历数组时，如果索引仅用于获取成员，则必须使用 for of 循环替代 for 循环
     * @reason for of 循环更加易读
     */
    '@typescript-eslint/prefer-for-of': string;
    /**
     * 使用函数类型别名替代包含函数调用声明的接口
     */
    '@typescript-eslint/prefer-function-type': string;
    /**
     * 使用 includes 而不是 indexOf
     */
    '@typescript-eslint/prefer-includes': string;
    /**
     * 枚举类型的值必须是字面量，禁止是计算值
     * @reason 编译阶段检查就足够了
     */
    '@typescript-eslint/prefer-literal-enum-member': string;
    /**
     * 禁止使用 module 来定义命名空间
     * @reason module 已成为 js 的关键字
     */
    '@typescript-eslint/prefer-namespace-keyword': string;
    /**
     * 使用 ?? 替代 ||
     */
    '@typescript-eslint/prefer-nullish-coalescing': string;
    /**
     * 使用 optional chaining 替代 &&
     */
    '@typescript-eslint/prefer-optional-chain': string;
    /**
     * 私有变量如果没有在构造函数外被赋值，则必须设为 readonly
     */
    '@typescript-eslint/prefer-readonly': string;
    /**
     * 函数的参数必须设置为 readonly
     */
    '@typescript-eslint/prefer-readonly-parameter-types': string;
    /**
     * 使用 reduce 方法时，必须传入范型，而不是对第二个参数使用 as
     */
    '@typescript-eslint/prefer-reduce-type-parameter': string;
    /**
     * 使用 RegExp#exec 而不是 String#match
     */
    '@typescript-eslint/prefer-regexp-exec': string;
    /**
     * 使用 String#startsWith 而不是其他方式
     */
    '@typescript-eslint/prefer-string-starts-ends-with': string;
    /**
     * 当需要忽略下一行的 ts 错误时，必须使用 @ts-expect-error 而不是 @ts-ignore
     * @reason 使用 @ts-expect-error 可以避免对不会报错的代码设置了 @ts-ignore
     */
    '@typescript-eslint/prefer-ts-expect-error': string;
    /**
     * async 函数的返回值必须是 Promise
     */
    '@typescript-eslint/promise-function-async': string;
    /**
     * 使用 sort 时必须传入比较函数
     */
    '@typescript-eslint/require-array-sort-compare': string;
    /**
     * async 函数中必须存在 await 语句
     */
    'require-await': string;
    '@typescript-eslint/require-await': string;
    /**
     * 使用加号时，两者必须同为数字或同为字符串
     */
    '@typescript-eslint/restrict-plus-operands': string;
    /**
     * 模版字符串中的变量类型必须是字符串
     */
    '@typescript-eslint/restrict-template-expressions': string;
    /**
     * 禁止在 return 语句里使用 await
     */
    'no-return-await': string;
    '@typescript-eslint/return-await': string;
    /**
     * 条件判断必须传入布尔值
     */
    '@typescript-eslint/strict-boolean-expressions': string;
    /**
     * 使用联合类型作为 switch 的对象时，必须包含每一个类型的 case
     */
    '@typescript-eslint/switch-exhaustiveness-check': string;
    /**
     * 禁止使用三斜杠导入文件
     * @reason 三斜杠是已废弃的语法，但在类型声明文件中还是可以使用的
     */
    '@typescript-eslint/triple-slash-reference': (
      | string
      | {
          path: string;
          types: string;
          lib: string;
        }
    )[];
    /**
     * interface 和 type 定义时必须声明成员的类型
     */
    '@typescript-eslint/typedef': (
      | string
      | {
          arrayDestructuring: boolean;
          arrowParameter: boolean;
          memberVariableDeclaration: boolean;
          objectDestructuring: boolean;
          parameter: boolean;
          propertyDeclaration: boolean;
          variableDeclaration: boolean;
        }
    )[];
    /**
     * 方法调用时需要绑定到正确的 this 上
     */
    '@typescript-eslint/unbound-method': string;
    /**
     * 函数重载时，若能通过联合类型将两个函数的类型声明合为一个，则使用联合类型而不是两个函数声明
     */
    '@typescript-eslint/unified-signatures': string;
  };
};
export default typescriptLint;
