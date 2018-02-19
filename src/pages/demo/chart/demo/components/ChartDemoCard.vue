<template>
  <el-card>
    <div :style="style">
      <slot :data="data"></slot>
    </div>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      data: [],
      height: 300
    }
  },
  computed: {
    style () {
      return {
        height: this.height + 'px'
      }
    }
  }
}
</script>
