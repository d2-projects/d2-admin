<template>
  <d2-container type="full">
    <template slot="header">日期计算</template>
    <template slot="footer">
      <d2-demo-link-btn title="依赖" :link="link"/>
    </template>
  </d2-container>
</template>

<script>
import dayjs from 'dayjs'
export default {
  data () {
    return {
      link: 'https://github.com/iamkun/dayjs'
    }
  }
}
</script>
