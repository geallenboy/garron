---
title: guide
---

## 内容

vchart

## 特性

- `G2Plot`
- `vchart`
- `TypeScript`
- **100%** unit test coverage

## 安装

```bash
npm i @garrond/vchart
```

## 使用


### template

设置属性`type` , 可选 `primary` `success` `info` `warning` `danger`

:::demo

```vue

<template>
  <!-- <AreaChart v-bind="config" /> -->
  <el-button>default</el-button>
  <div>2222</div>
</template>
<script setup>
 

const config = {
        height: 350,
        autoFit: true,
        xField: 'year',
        yField: 'value',
        smooth: true,
        meta: {
          value: {
            max: 15,
          },
        },
        data: [
          { year: '1991', value: 3 },
          { year: '1992', value: 4 },
          { year: '1993', value: 3.5 },
          { year: '1994', value: 5 },
          { year: '1995', value: 4.9 },
          { year: '1996', value: 6 },
          { year: '1997', value: 7 },
          { year: '1998', value: 9 },
          { year: '1999', value: 11 },
        ],
      }


</script>
```

:::