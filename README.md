# Use Class

Develop [Vue 3](https://vuejs.org/) based applications using a composable
native [class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) API

English | [简体中文](https://github.com/shixianqin/useclass/blob/main/README-zh.md)

## Why?

+ Clearer, more aggregated, and more flexible code organization capabilities
+ Natural logical code namespace
+ Does not rely on ES decorators
+ No black magic
+ No `.value`

## Installation

npm:

```
npm i useclass
```

yarn:

```
yarn add useclass
```

## Example

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
  // reactivity data
  count = 0

  constructor () {
    // Use watch inside the constructor
    watch(() => this.count, () => {
      console.log('count was changed')
    })

    // Use component lifecycle hooks inside the constructor
    onMounted(() => {
      console.log('mounted')
    })
  }

  // Using computed properties
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

// Other logical code blocks
// const other = useClass(class { /* ... */ })

</script>
```

## Vue.js official related documentation reference

+ [Composition API FAQ](https://vuejs.org/guide/extras/composition-api-faq.html)
+ [Reactivity Transform](https://vuejs.org/guide/extras/reactivity-transform.html)
