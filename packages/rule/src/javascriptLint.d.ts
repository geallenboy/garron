/**
 * ESLint base 规则
 * 依赖版本：
 *   eslint
 *   babel-eslint
 */
declare const javascriptLint: {
  parser: string;
  parserOptions: {
    ecmaVersion: number;
    sourceType: string;
    ecmaFeatures: {
      globalReturn: boolean;
      impliedStrict: boolean;
      jsx: boolean;
    };
    requireConfigFile: boolean;
    allowImportExportEverywhere: boolean;
  };
  env: {
    browser: boolean;
    node: boolean;
    commonjs: boolean;
    es6: boolean;
  };
  root: boolean;
  rules: {
    /**
     * setter 必须有对应的 getter，getter 可以没有对应的 setter
     */
    'accessor-pairs': (
      | string
      | {
          setWithoutGet: boolean;
          getWithoutSet: boolean;
        }
    )[];
    /**
     * 数组的方法除了 forEach 之外，回调函数必须有返回值
     */
    'array-callback-return': string;
    /**
     * 将 var 定义的变量视为块作用域，禁止在块外使用
     * @reason 已经禁止使用 var 了
     */
    'block-scoped-var': string;
    /**
     * 变量名必须是 camelcase 风格的
     * @reason 很多 api 或文件名都不是 camelcase 风格的
     */
    camelcase: string;
    /**
     * 注释的首字母必须大写
     */
    'capitalized-comments': string;
    /**
     * 在类的非静态方法中，必须存在对 this 的引用
     */
    'class-methods-use-this': string;
    /**
     * 禁止函数的循环复杂度超过 20
     * @reason https://en.wikipedia.org/wiki/Cyclomatic_complexity
     */
    complexity: (
      | string
      | {
          max: number;
        }
    )[];
    /**
     * 禁止函数在不同分支返回不同类型的值
     * @reason 缺少 TypeScript 的支持，类型判断是不准确的
     */
    'consistent-return': string;
    /**
     * 限制 this 的别名
     */
    'consistent-this': string;
    /**
     * constructor 中必须有 super
     */
    'constructor-super': string;
    /**
     * switch 语句必须有 default
     */
    'default-case': string;
    /**
     * switch 语句中的 default 必须在最后
     */
    'default-case-last': string;
    /**
     * 有默认值的参数必须放在函数参数的末尾
     */
    'default-param-last': string;
    /**
     * 禁止使用 foo['bar']，必须写成 foo.bar
     * @reason 当需要写一系列属性的时候，可以更统一
     */
    'dot-notation': string;
    /**
     * 必须使用 === 或 !==，禁止使用 == 或 !=
     */
    eqeqeq: string[];
    /**
     * 禁止方向错误的 for 循环
     */
    'for-direction': string;
    /**
     * 函数赋值给变量的时候，函数名必须与变量名一致
     */
    'func-name-matching': (
      | string
      | {
          includeCommonJSModuleExports: boolean;
        }
    )[];
    /**
     * 函数必须有名字
     */
    'func-names': string;
    /**
     * 必须只使用函数声明或只使用函数表达式
     */
    'func-style': string;
    /**
     * getter 必须有返回值，并且禁止返回空
     */
    'getter-return': string;
    /**
     * setter 和 getter 必须写在一起
     */
    'grouped-accessor-pairs': string;
    /**
     * for in 内部必须有 hasOwnProperty
     */
    'guard-for-in': string;
    /**
     * 禁止使用指定的标识符
     */
    'id-denylist': string;
    /**
     * 限制变量名长度
     */
    'id-length': string;
    /**
     * 限制变量名必须匹配指定的正则表达式
     */
    'id-match': string;
    /**
     * 变量必须在定义的时候赋值
     */
    'init-declarations': string;
    /**
     * 单行注释必须写在上一行
     */
    'line-comment-position': string;
    /**
     * 类的成员之间是否需要空行
     * @reason 有时为了紧凑需要挨在一起，有时为了可读性需要空一行
     */
    'lines-between-class-members': string;
    /**
     * 限制一个文件中类的数量
     */
    'max-classes-per-file': string;
    /**
     * 代码块嵌套的深度禁止超过 8 层
     */
    'max-depth': (string | number)[];
    /**
     * 限制一个文件最多的行数
     */
    'max-lines': string;
    /**
     * 限制函数块中的代码行数
     */
    'max-lines-per-function': string;
    /**
     * 回调函数嵌套禁止超过 4 层，多了请用 async await 替代
     */
    'max-nested-callbacks': (string | number)[];
    /**
     * 函数的参数禁止超过 5 个
     */
    'max-params': (string | number)[];
    /**
     * 限制函数块中的语句数量
     */
    'max-statements': string;
    /**
     * 限制一行中的语句数量
     */
    'max-statements-per-line': string;
    /**
     * 约束多行注释的格式
     * @reason 能写注释已经不容易了，不需要限制太多
     */
    'multiline-comment-style': string;
    /**
     * new 后面的类名必须首字母大写
     */
    'new-cap': (
      | string
      | {
          newIsCap: boolean;
          capIsNew: boolean;
          properties: boolean;
        }
    )[];
    /**
     * 禁止使用 alert
     */
    'no-alert': string;
    /**
     * 禁止使用 Array 构造函数时传入的参数超过一个
     * @reason 参数为一个时表示创建一个指定长度的数组，比较常用
     * 参数为多个时表示创建一个指定内容的数组，此时可以用数组字面量实现，不必使用构造函数
     */
    'no-array-constructor': string;
    /**
     * 禁止将 async 函数做为 new Promise 的回调函数
     * @reason 出现这种情况时，一般不需要使用 new Promise 实现异步了
     */
    'no-async-promise-executor': string;
    /**
     * 禁止将 await 写在循环里，因为这样就无法同时发送多个异步请求了
     * @reason 要求太严格了，有时需要在循环中写 await
     */
    'no-await-in-loop': string;
    /**
     * 禁止使用位运算
     */
    'no-bitwise': string;
    /**
     * 禁止使用 caller 或 callee
     * @reason 它们是已废弃的语法
     */
    'no-caller': string;
    /**
     * switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块
     */
    'no-case-declarations': string;
    /**
     * 禁止对已定义的 class 重新赋值
     */
    'no-class-assign': string;
    /**
     * 禁止与负零进行比较
     */
    'no-compare-neg-zero': string;
    /**
     * 禁止在测试表达式中使用赋值语句，除非这个赋值语句被括号包起来了
     */
    'no-cond-assign': string[];
    /**
     * 禁止使用 console
     */
    'no-console': string;
    /**
     * 禁止对使用 const 定义的常量重新赋值
     */
    'no-const-assign': string;
    /**
     * 禁止将常量作为分支条件判断中的测试表达式，但允许作为循环条件判断中的测试表达式
     */
    'no-constant-condition': (
      | string
      | {
          checkLoops: boolean;
        }
    )[];
    /**
     * 禁止在构造函数中返回值
     */
    'no-constructor-return': string;
    /**
     * 禁止使用 continue
     */
    'no-continue': string;
    /**
     * 禁止在正则表达式中出现 Ctrl 键的 ASCII 表示，即禁止使用 /\x1f/
     * @reason 几乎不会遇到这种场景
     */
    'no-control-regex': string;
    /**
     * 禁止使用 debugger
     */
    'no-debugger': string;
    /**
     * 禁止对一个变量使用 delete
     * @reason 编译阶段就会报错了
     */
    'no-delete-var': string;
    /**
     * 禁止在正则表达式中出现形似除法操作符的开头，如 let a = /=foo/
     * @reason 有代码高亮的话，在阅读这种代码时，也完全不会产生歧义或理解上的困难
     */
    'no-div-regex': string;
    /**
     * 禁止在函数参数中出现重复名称的参数
     * @reason 编译阶段就会报错了
     */
    'no-dupe-args': string;
    /**
     * 禁止重复定义类的成员
     */
    'no-dupe-class-members': string;
    /**
     * 禁止 if else 的条件判断中出现重复的条件
     */
    'no-dupe-else-if': string;
    /**
     * 禁止在对象字面量中出现重复的键名
     */
    'no-dupe-keys': string;
    /**
     * 禁止在 switch 语句中出现重复测试表达式的 case
     */
    'no-duplicate-case': string;
    /**
     * 禁止重复导入模块
     */
    'no-duplicate-imports': string;
    /**
     * 禁止在 else 内使用 return，必须改为提前结束
     * @reason else 中使用 return 可以使代码结构更清晰
     */
    'no-else-return': string;
    /**
     * 禁止出现空代码块，允许 catch 为空代码块
     */
    'no-empty': (
      | string
      | {
          allowEmptyCatch: boolean;
        }
    )[];
    /**
     * 禁止在正则表达式中使用空的字符集 []
     */
    'no-empty-character-class': string;
    /**
     * 不允许有空函数
     * @reason 有时需要将一个空函数设置为某个项的默认值
     */
    'no-empty-function': string;
    /**
     * 禁止解构赋值中出现空 {} 或 []
     */
    'no-empty-pattern': string;
    /**
     * 禁止使用 foo == null，必须使用 foo === null
     */
    'no-eq-null': string;
    /**
     * 禁止使用 eval
     */
    'no-eval': string;
    /**
     * 禁止将 catch 的第一个参数 error 重新赋值
     */
    'no-ex-assign': string;
    /**
     * 禁止修改原生对象
     * @reason 修改原生对象可能会与将来版本的 js 冲突
     */
    'no-extend-native': string;
    /**
     * 禁止出现没必要的 bind
     */
    'no-extra-bind': string;
    /**
     * 禁止不必要的布尔类型转换
     */
    'no-extra-boolean-cast': string;
    /**
     * 禁止出现没必要的 label
     * @reason 已经禁止使用 label 了
     */
    'no-extra-label': string;
    /**
     * switch 的 case 内必须有 break, return 或 throw，空的 case 除外
     */
    'no-fallthrough': string;
    /**
     * 禁止将一个函数声明重新赋值
     */
    'no-func-assign': string;
    /**
     * 禁止对全局变量赋值
     */
    'no-global-assign': string;
    /**
     * 禁止使用 ~+ 等难以理解的类型转换，仅允许使用 !!
     */
    'no-implicit-coercion': (
      | string
      | {
          allow: string[];
        }
    )[];
    /**
     * 禁止在全局作用域下定义变量或申明函数
     * @reason 模块化之后，不会出现这种在全局作用域下定义变量的情况
     */
    'no-implicit-globals': string;
    /**
     * 禁止在 setTimeout 或 setInterval 中传入字符串
     */
    'no-implied-eval': string;
    /**
     * 禁止对导入的模块进行赋值
     */
    'no-import-assign': string;
    /**
     * 禁止在代码后添加单行注释
     */
    'no-inline-comments': string;
    /**
     * 禁止在 if 代码块内出现函数声明
     */
    'no-inner-declarations': string[];
    /**
     * 禁止在 RegExp 构造函数中出现非法的正则表达式
     */
    'no-invalid-regexp': string;
    /**
     * 禁止在类之外的地方使用 this
     * @reason 只允许在 class 中使用 this
     */
    'no-invalid-this': string;
    /**
     * 禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式或模版字符串中
     */
    'no-irregular-whitespace': (
      | string
      | {
          skipStrings: boolean;
          skipComments: boolean;
          skipRegExps: boolean;
          skipTemplates: boolean;
        }
    )[];
    /**
     * 禁止使用 __iterator__
     * @reason __iterator__ 是一个已废弃的属性
     * 使用 [Symbol.iterator] 替代它
     */
    'no-iterator': string;
    /**
     * 禁止 label 名称与已定义的变量重复
     * @reason 已经禁止使用 label 了
     */
    'no-label-var': string;
    /**
     * 禁止使用 label
     */
    'no-labels': string;
    /**
     * 禁止使用没必要的 {} 作为代码块
     */
    'no-lone-blocks': string;
    /**
     * 禁止 else 中只有一个单独的 if
     * @reason 单独的 if 可以把逻辑表达的更清楚
     */
    'no-lonely-if': string;
    /**
     * 禁止在循环内的函数内部出现循环体条件语句中定义的变量
     * @reason 使用 let 就已经解决了这个问题了
     */
    'no-loop-func': string;
    /**
     * 禁止使用超出 js 精度范围的数字
     */
    'no-loss-of-precision': string;
    /**
     * 禁止使用 magic numbers
     */
    'no-magic-numbers': string;
    /**
     * 禁止正则表达式中使用肉眼无法区分的特殊字符
     * @reason 某些特殊字符很难看出差异，最好不要在正则中使用
     */
    'no-misleading-character-class': string;
    /**
     * 禁止连续赋值，比如 foo = bar = 1
     */
    'no-multi-assign': string;
    /**
     * 禁止使用 \ 来换行字符串
     */
    'no-multi-str': string;
    /**
     * 禁止 if 里有否定的表达式
     * @reason 否定的表达式可以把逻辑表达的更清楚
     */
    'no-negated-condition': string;
    /**
     * 禁止使用嵌套的三元表达式，比如 a ? b : c ? d : e
     */
    'no-nested-ternary': string;
    /**
     * 禁止直接 new 一个类而不赋值
     * @reason new 应该作为创建一个类的实例的方法，所以不能不赋值
     */
    'no-new': string;
    /**
     * 禁止使用 new Function
     * @reason 这和 eval 是等价的
     */
    'no-new-func': string;
    /**
     * 禁止直接 new Object
     */
    'no-new-object': string;
    /**
     * 禁止使用 new 来生成 Symbol
     */
    'no-new-symbol': string;
    /**
     * 禁止使用 new 来生成 String, Number 或 Boolean
     */
    'no-new-wrappers': string;
    /**
     * 禁止将 Math, JSON 或 Reflect 直接作为函数调用
     */
    'no-obj-calls': string;
    /**
     * 禁止使用 0 开头的数字表示八进制数
     * @reason 编译阶段就会报错了
     */
    'no-octal': string;
    /**
     * 禁止使用八进制的转义符
     * @reason 编译阶段就会报错了
     */
    'no-octal-escape': string;
    /**
     * 禁止对函数的参数重新赋值
     */
    'no-param-reassign': string;
    /**
     * 禁止使用 ++ 或 --
     */
    'no-plusplus': string;
    /**
     * 禁止在 Promise 的回调函数中直接 return
     */
    'no-promise-executor-return': string;
    /**
     * 禁止使用 __proto__
     * @reason __proto__ 是已废弃的语法
     */
    'no-proto': string;
    /**
     * 禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable
     * @reason hasOwnProperty 比较常用
     */
    'no-prototype-builtins': string;
    /**
     * 禁止重复定义变量
     * @reason 禁用 var 之后，编译阶段就会报错了
     */
    'no-redeclare': string;
    /**
     * 禁止在正则表达式中出现连续的空格
     */
    'no-regex-spaces': string;
    /**
     * 禁止导出指定的变量名
     */
    'no-restricted-exports': string;
    /**
     * 禁止使用指定的全局变量
     */
    'no-restricted-globals': string;
    /**
     * 禁止导入指定的模块
     */
    'no-restricted-imports': string;
    /**
     * 禁止使用指定的对象属性
     */
    'no-restricted-properties': string;
    /**
     * 禁止使用指定的语法
     */
    'no-restricted-syntax': string;
    /**
     * 禁止在 return 语句里赋值
     */
    'no-return-assign': string[];
    /**
     * 禁止在 return 语句里使用 await
     */
    'no-return-await': string;
    /**
     * 禁止出现 location.href = 'javascript:void(0)';
     * @reason 有些场景下还是需要用到这个
     */
    'no-script-url': string;
    /**
     * 禁止将自己赋值给自己
     */
    'no-self-assign': string;
    /**
     * 禁止将自己与自己比较
     */
    'no-self-compare': string;
    /**
     * 禁止使用逗号操作符
     */
    'no-sequences': string;
    /**
     * 禁止 setter 有返回值
     */
    'no-setter-return': string;
    /**
     * 禁止变量名与上层作用域内的已定义的变量重复
     * @reason 很多时候函数的形参和传参是同名的
     */
    'no-shadow': string;
    /**
     * 禁止使用保留字作为变量名
     */
    'no-shadow-restricted-names': string;
    /**
     * 禁止在数组中出现连续的逗号
     */
    'no-sparse-arrays': string;
    /**
     * 禁止在普通字符串中出现模版字符串里的变量形式
     */
    'no-template-curly-in-string': string;
    /**
     * 禁止使用三元表达式
     */
    'no-ternary': string;
    /**
     * 禁止在 super 被调用之前使用 this 或 super
     */
    'no-this-before-super': string;
    /**
     * 禁止 throw 字面量，必须 throw 一个 Error 对象
     */
    'no-throw-literal': string;
    /**
     * 禁止使用未定义的变量
     */
    'no-undef': string;
    /**
     * 禁止将 undefined 赋值给变量
     */
    'no-undef-init': string;
    /**
     * 禁止使用 undefined
     */
    'no-undefined': string;
    /**
     * 禁止变量名出现下划线
     */
    'no-underscore-dangle': string;
    /**
     * 循环内必须对循环条件中的变量有修改
     */
    'no-unmodified-loop-condition': string;
    /**
     * 必须使用 !a 替代 a ? false : true
     * @reason 后者表达的更清晰
     */
    'no-unneeded-ternary': string;
    /**
     * 禁止在 return, throw, break 或 continue 之后还有代码
     */
    'no-unreachable': string;
    /**
     * 禁止在第一轮循环时就一定会退出循环的情况出现
     */
    'no-unreachable-loop': string;
    /**
     * 禁止在 finally 中出现 return, throw, break 或 continue
     * @reason finally 中的语句会在 try 之前执行
     */
    'no-unsafe-finally': string;
    /**
     * 禁止在 in 或 instanceof 操作符的左侧变量前使用感叹号
     */
    'no-unsafe-negation': string;
    /**
     * 禁止无用的表达式
     */
    'no-unused-expressions': (
      | string
      | {
          allowShortCircuit: boolean;
          allowTernary: boolean;
          allowTaggedTemplates: boolean;
        }
    )[];
    /**
     * 禁止出现没用到的 label
     * @reason 已经禁止使用 label 了
     */
    'no-unused-labels': string;
    /**
     * 已定义的变量必须使用
     */
    'no-unused-vars': (
      | string
      | {
          vars: string;
          args: string;
          ignoreRestSiblings: boolean;
          caughtErrors: string;
        }
    )[];
    /**
     * 变量必须先定义后使用
     */
    'no-use-before-define': (
      | string
      | {
          variables: boolean;
          functions: boolean;
          classes: boolean;
        }
    )[];
    /**
     * 禁止正则表达式中出现无用的回溯引用
     * @reason 某些回溯引用语法上没问题，但是会永远匹配到空字符串
     */
    'no-useless-backreference': string;
    /**
     * 禁止出现没必要的 call 或 apply
     */
    'no-useless-call': string;
    /**
     * 禁止在 catch 中仅仅只是把错误 throw 出去
     * @reason 这样的 catch 是没有意义的，等价于直接执行 try 里的代码
     */
    'no-useless-catch': string;
    /**
     * 禁止出现没必要的计算键名
     */
    'no-useless-computed-key': string;
    /**
     * 禁止出现没必要的字符串连接
     */
    'no-useless-concat': string;
    /**
     * 禁止出现没必要的 constructor
     */
    'no-useless-constructor': string;
    /**
     * 禁止出现没必要的转义
     * @reason 转义可以使代码更易懂
     */
    'no-useless-escape': string;
    /**
     * 禁止解构赋值时出现同样名字的的重命名，比如 let { foo: foo } = bar;
     */
    'no-useless-rename': string;
    /**
     * 禁止没必要的 return
     */
    'no-useless-return': string;
    /**
     * 禁止使用 var
     */
    'no-var': string;
    /**
     * 禁止使用 void
     */
    'no-void': string;
    /**
     * 禁止注释中出现 TODO 和 FIXME
     */
    'no-warning-comments': string;
    /**
     * 禁止使用 with
     * @reason 编译阶段就会报错了
     */
    'no-with': string;
    /**
     * 必须使用 a = {b} 而不是 a = {b: b}
     * @reason 有时后者可以使代码结构更清晰
     */
    'object-shorthand': string;
    /**
     * 禁止变量申明时用逗号一次申明多个
     */
    'one-var': string[];
    /**
     * 必须使用 x = x + y 而不是 x += y
     */
    'operator-assignment': string;
    /**
     * 限制语句之间的空行规则，比如变量定义完之后必须要空行
     */
    'padding-line-between-statements': string;
    /**
     * 申明后不再被修改的变量必须使用 const 来申明
     */
    'prefer-const': string;
    /**
     * 必须使用解构赋值
     */
    'prefer-destructuring': string;
    /**
     * 使用 ES2016 的语法 ** 替代 Math.pow
     */
    'prefer-exponentiation-operator': string;
    /**
     * 使用 ES2018 中的正则表达式命名组
     * @reason 正则表达式已经较难理解了，没必要强制加上命名组
     */
    'prefer-named-capture-group': string;
    /**
     * 必须使用 0b11111011 而不是 parseInt()
     */
    'prefer-numeric-literals': string;
    /**
     * 必须使用 ... 而不是 Object.assign，除非 Object.assign 的第一个参数是一个变量
     */
    'prefer-object-spread': string;
    /**
     * Promise 的 reject 中必须传入 Error 对象，而不是字面量
     */
    'prefer-promise-reject-errors': string;
    /**
     * 优先使用正则表达式字面量，而不是 RegExp 构造函数
     */
    'prefer-regex-literals': string;
    /**
     * 必须使用 ...args 而不是 arguments
     */
    'prefer-rest-params': string;
    /**
     * 必须使用 ... 而不是 apply，比如 foo(...args)
     */
    'prefer-spread': string;
    /**
     * 必须使用模版字符串而不是字符串连接
     */
    'prefer-template': string;
    /**
     * parseInt 必须传入第二个参数
     */
    radix: string;
    /**
     * 禁止将 await 或 yield 的结果做为运算符的后面项
     * @reason 这样会导致不符合预期的结果
     * https://github.com/eslint/eslint/issues/11899
     * 在上面 issue 修复之前，关闭此规则
     */
    'require-atomic-updates': string;
    /**
     * async 函数中必须存在 await 语句
     */
    'require-await': string;
    /**
     * 正则表达式中必须要加上 u 标志
     */
    'require-unicode-regexp': string;
    /**
     * generator 函数内必须有 yield
     */
    'require-yield': string;
    /**
     * 导入必须按规则排序
     */
    'sort-imports': string;
    /**
     * 对象字面量的键名必须排好序
     */
    'sort-keys': string;
    /**
     * 变量申明必须排好序
     */
    'sort-vars': string;
    /**
     * 注释的斜线或 * 后必须有空格
     */
    'spaced-comment': (
      | string
      | {
          block: {
            exceptions: string[];
            balanced: boolean;
          };
        }
    )[];
    /**
     * 禁止使用 'strict';
     */
    strict: string[];
    /**
     * 创建 Symbol 时必须传入参数
     */
    'symbol-description': string;
    /**
     * 必须使用 isNaN(foo) 而不是 foo === NaN
     */
    'use-isnan': string;
    /**
     * typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function', 'symbol', 或 'bigint'
     */
    'valid-typeof': string;
    /**
     * var 必须在作用域的最前面
     */
    'vars-on-top': string;
    /**
     * 必须使用 if (foo === 5) 而不是 if (5 === foo)
     */
    yoda: (
      | string
      | {
          onlyEquality: boolean;
        }
    )[];
  };
};
export default javascriptLint;
