# D2 CRUD


## 介绍
`D2-Crud`是一套基于[Vue.js 2.2.0+](https://cn.vuejs.org/)和[Element 2.0.0+](http://element-cn.eleme.io/#/zh-CN)的表格组件，可根据配置的json文件自动生成表格，并实现了表格内的增删改查、新增和修改数据校验、表格内编辑等功能。

## 安装
使用npm
``` bash
npm i element-ui d2-crud -S
```

使用yarn
``` bash
yarn add element-ui d2-crud
```

## 使用
在`main.js`中写入以下内容：
``` js
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import d2Crud from 'd2-crud'

Vue.use(d2Crud)
Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

之后就可以在组件中使用`D2-Crud`了
``` vue
<template>
  <d2-crud></d2-crud>
</template>
```

具体使用方法请参考 [使用指南](./api.md)
