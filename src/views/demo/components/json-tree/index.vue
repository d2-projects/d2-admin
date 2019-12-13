<template>
  <d2-container>
    <tree-view :data="packJson" :options="options"/>
  </d2-container>
</template>

<script>
import Vue from 'vue'
import vueJsonTreeView from 'vue-json-tree-view'
import packJson from '../../../../../package.json'
Vue.use(vueJsonTreeView)
export default {
  data () {
    return {
      options: {
        maxDepth: 10,
        rootObjectKey: 'package.json',
        modifiable: false
      },
      packJson
    }
  }
}
</script>
