<template>
  <el-card>
    <div slot="header">
      <el-button @click="syncData">加载数据</el-button>
    </div>
    <div :style="style">
      <slot :data="data"></slot>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    api: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
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
  },
  mounted () {
    // 自动请求一次数据
    this.syncData()
  },
  methods: {
    // 请求数据
    syncData () {
      this.$axios.post(this.api.url, this.api.data)
        .then(res => {
          this.data = res
        })
    },
    // 重新适应大小
    resize () {
      // this.$refs.chart.resize()
    }
  }
}
</script>
