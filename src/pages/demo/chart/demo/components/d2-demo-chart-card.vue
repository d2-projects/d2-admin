<template>
  <el-card shadow="never">
    <div slot="header">
      <el-button type="primary" size="mini" @click="syncData">
        <d2-icon name="refresh"/>
        加载数据
      </el-button>
      <el-radio-group v-model="height" size="mini">
        <el-radio-button v-for="(item, index) in heightOptions" :key="index" :label="item">{{item}}px</el-radio-button>
      </el-radio-group>
    </div>
    <div :style="style">
      <slot :data="data"/>
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
      height: 400,
      heightOptions: [300, 400, 500, 600]
    }
  },
  computed: {
    style () {
      return {
        height: this.height + 'px'
      }
    }
  },
  watch: {
    style () {
      this.resize()
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
      this.$nextTick(() => {
        this.$emit('resize')
      })
    }
  }
}
</script>
