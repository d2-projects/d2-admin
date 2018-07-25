<template>
  <d2-container class="demo-page">
    <!--
      可选 type = full(默认) | card | ghost
      可选 better-scroll 属性
      可选 better-scroll-option 属性
      文档 http://d2admin.fairyever.com/zh/components/container.html
    -->
    <template slot="header">header</template>
    <span class="demo-page_title">this is [ {{name}} ]</span>
    <template slot="footer">footer</template>
  </d2-container>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'demo-page',
  data () {
    return {
      name: 'demo-page'
    }
  },
  computed: {
    ...mapState({
      // 访问用户信息
      userInfo: state => state.d2admin.userInfo
    })
  },
  methods: {
    ...mapMutations([
      // 操作公用数据
      'd2adminUtilDatabase',
      // 操作用户私有数据
      'd2adminUtilDatabaseUser'
    ])
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.demo-page {
  .demo-page_title {
    font-size: 14px;
  }
  // Your page style here
  // Do not use empty rulesets
  // If the page does not need an additional definition style, please delete
}
</style>