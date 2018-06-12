<template>
  <d2-container type="full">
    <template slot="header">日期计算</template>
    <template slot="footer">
      <el-button-group>
        <el-button size="mini">依赖</el-button>
        <el-button size="mini" @click="$open(link)">
          <d2-icon name="link"/>
          {{link}}
        </el-button>
      </el-button-group>
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
