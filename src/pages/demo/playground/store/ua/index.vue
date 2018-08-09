<template>
  <d2-container>
    <p class="d2-mt-0">useragent</p>
    <el-input :value="uaData.ua"></el-input>
    <p>格式化数据 in vuex: state.d2admin.ua.data</p>
    <d2-highlight :code="uaStr"/>
  </d2-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('d2admin/ua', {
      uaData: 'data'
    }),
    uaStr () {
      const { browser, engine, os, device, cpu } = this.uaData
      return JSON.stringify({ browser, engine, os, device, cpu }, null, 2)
    }
  }
}
</script>
