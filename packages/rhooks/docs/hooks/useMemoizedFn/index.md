---
title: useMemoizedFn
nav:
  path: /hooks
---

# useMemoizedFn

持久化 function 的 Hook，理论上，可以使用 useMemoizedFn 完全代替 useCallback。

在某些场景中，我们需要使用 useCallback 来记住一个函数，但是在第二个参数 deps 变化时，会重新生成函数，导致函数地址变化。

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx" />

### 性能提升

<code src="./demo/demo2.tsx" />