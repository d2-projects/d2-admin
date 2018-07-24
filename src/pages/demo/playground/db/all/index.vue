<template>
  <d2-container class="page">
    <template slot="header">
      <el-button type="primary" @click="load">
        重新获取本地数据
      </el-button>
    </template>
    <d2-highlight :code="dbData"/>
  </d2-container>
</template>

<script>
import db from '@/libs/db.js'
export default {
  data () {
    return {
      dbData: ''
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    load () {
      this.dbData = JSON.stringify(db.value(), null, 2)
    }
  }
}
</script>
