<template>
  <d2-container>
    <p class="d2-mt-0">useragent</p>
    <el-input :value="ua.ua"></el-input>
    <p>格式化数据 in vuex: state.d2admin.ua</p>
    <d2-highlight :code="uaStr"/>
  </d2-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      ua: state => state.d2admin.ua
    }),
    uaStr () {
      const { browser, engine, os, device, cpu } = this.ua
      return JSON.stringify({ browser, engine, os, device, cpu }, null, 2)
    }
  }
}
</script>
