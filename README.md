## 工程介绍

整合前端资源，快速开发项目应用程序



## 2.技术栈

- 编程语言：[TypeScript 4.x](https://www.typescriptlang.org/zh/) + [JavaScript](https://www.javascript.com/)
- 构建工具：[Vite 3.x](https://cn.vitejs.dev/) + [webpack5](https://webpack-china.org/)
- Git Hook 工具：[husky](https://typicode.github.io/husky/#/) + [lint-staged](https://github.com/okonet/lint-staged)
- 代码规范：[EditorConfig](http://editorconfig.org) + [Prettier](https://prettier.io/) + [ESLint](https://eslint.org/)
- 提交规范：[Commitizen](http://commitizen.github.io/cz-cli/) + [Commitlint](https://commitlint.js.org/#/)
- 单元测试：[jest](https://jestjs.io/) + [ts-jest](https://kulshekhar.github.io/ts-jest/)
- 项目管理：[learn](https://lerna.js.org/)

## 3. 使用

### 3.1 安装依赖

```
pnpm i 

pnpm i -F packages-name
```

### 3.2 下载包

``` base
yarn run init or npm run init
```

### 3.3 删除包

```
yarn run uninit or npm run unint
```

### 3.4 添加包

```
# 将react安装到所有模块
lerna add react
# 将 module1 安装到 module2
lerna add module1 --scope=module2 
# 将 react 安装到 module2
lerna add react --scope=module2

```

### 代码提交

```
npm run commit 
git push
```
或者
```
git add .
git cz
git push
```




## 4. 编写代码规范

- 基于eslint(统一规范)+prettier(统一风格）

## 5. 提交代码规范

- 5.1.使用 husky+commitlint 检查提交描述是否符合规范要求
    - commitlint：用于检查提交信息
    - husky：是git hooks工具
- 5.2.使用 commit-msg 钩子规范化提交信息
- 5.3.使用 pre-commit 检测提交时代码规范
- 5.4.使用 lint-staged 自动修复格式错误
- 5.5.用 commitizen+cz 规范化提交代码

## 6. 目录结构

 - packages
    - rchart react图表
    - rcomponent react业务组件
    - rhooks react常用hooks封装
    - plugin 插件开发
    - rule 代码规范整理
    - utils 工具函数
    - vchart vue3图表



