<template>
  <d2-container type="full" class="page">
    <template slot="header">本地数据</template>
    <tree-view :data="dbData" :options="options"></tree-view>
  </d2-container>
</template>

<script>
// 插件
import db from '@/libs/db.js'

export default {
  data () {
    return {
      dbData: {},
      options: {
        maxDepth: 10,
        rootObjectKey: 'db.value()',
        modifiable: false
      }
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    load () {
      this.dbData = db.value()
    }
  }
}
</script>
