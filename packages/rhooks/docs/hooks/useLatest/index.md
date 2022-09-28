---
title: useLatest
nav:
  path: /hooks
---

# useLatest

返回当前最新值的 `Hooks`，可以避免闭包问题。

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx" />

### 关于useState闭包问题

> 为什么count2始终是1，这个就是react闭包问题

原因：

为了维护`Function Component`的`state`,React用链表的方式来存储`Function Component`里面的hooks，并为每个hooks创建一个对象

```typescript
type Hook = {
  memoizedState: any,
  baseState: any,
  baseUpdate: Update<any, any> | null,
  queue: UpdateQueue<any, any> | null,
  next: Hook | null,
};
```

这个对象就是`memoizedState`属性，就是用来存储组建上一次更新后的state，next指向下一个hook对象，在组件更新的过程中，`hooks`函数执行的顺序是不变的，就可以根据这个链表拿到当前hooks对应的Hook对象，函数式组件就是这样拥有了state的能力。
同时制定了一系列规则，比如不能将hooks写入到 `if...else...` 中。从而保证能够正确拿到相应hook到state.

当点击按钮count2增加1到时候，整个函数式组件重新渲染，这个时候前一个执行的链表已经存在了，useState将Hook对象上保存的状态设置为+1，那么此时的count2也是+1。但是之前useEffect函数还是在的，它还是会每隔1s执行，但这里的count2是之前第一次执行时候的count2值，因为在定时器的回调函数里面被引用了，形成了闭包一直被保存。

> 为什么count可以一直+1？

因为使用useRef。useRef返回一个可变的ref对象，.current属性被初始化为传入的参数
useRef创建的是一个普通javascript对象，而且会在每次渲染时返回同一个ref对象，当变化它的current属性的时候，对象的引用都是同一个，所以在定时器中能够读到最新的值。