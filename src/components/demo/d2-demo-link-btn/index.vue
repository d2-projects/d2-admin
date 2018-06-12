<template>
  <el-button-group>
    <el-button size="mini">依赖</el-button>
    <el-button size="mini" @click="$open(link)">
      <d2-icon name="link"/>
      {{link}}
    </el-button>
  </el-button-group>
</template>

<script>
export default {
  name: 'd2-demo-link-btn',
  props: {
    link: {
      type: String,
      required: false,
      default: 'https://github.com/FairyEver'
    }
  }
}
</script>
