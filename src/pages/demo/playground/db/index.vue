<template>
  <d2-container type="full" class="page">
    <template slot="header">本地数据</template>
    <d2-highlight :code="dbData"/>
  </d2-container>
</template>

<script>
import db from '@/libs/db.js'
export default {
  data () {
    return {
      dbData: {}
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
