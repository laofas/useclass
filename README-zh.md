# Use Class

使用组合式的原生 [类](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes)
语法来开发基于 [Vue 3](https://cn.vuejs.org/)
的应用程序

简体中文 | [English](https://github.com/shixianqin/useclass/blob/main/README.md)

## 为什么?

+ 更清晰、更聚合、更灵活的代码组织能力
+ 天然的逻辑代码命名空间
+ 没有 `.value`

## 安装

npm:

```
npm i useclass
```

yarn:

```
yarn add useclass
```

## 示例

```vue

<template>
  <div>
    <p>Count: {{ main.count }}</p>
    <p>Double count: {{ main.doubleCount }}</p>
    <div>
      <button @click="main.increase()">increase</button>
      <button @click="main.decrease()">decrease</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, onMounted } from 'vue'
import { useClass } from 'useclass'

const main = useClass(class {
  // 响应性数据
  count = 0

  setup () {
    // 作用域内使用 watch
    watch(() => this.count, () => {
      console.log('count was changed')
    })

    // 作用域内使用组件生命周期钩子
    onMounted(() => {
      console.log('mounted')
    })
  }

  // 使用计算属性
  get doubleCount () {
    return this.count * 2
  }

  increase () {
    this.count++
  }

  decrease () {
    this.count--
  }
})

// 其他逻辑代码块
// const other = useClass(class { /* ... */ })

</script>
```

## Vue.js 官方相关文档参考

+ [组合式 API 常见问答](https://cn.vuejs.org/guide/extras/composition-api-faq.html)
+ [响应性语法糖](https://cn.vuejs.org/guide/extras/reactivity-transform.html)
