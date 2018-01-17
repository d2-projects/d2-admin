<template>
  <div>
    <el-popover
      ref="pop"
      placement="right"
      :title="icon"
      width="300"
      trigger="hover">
      <div class="icon-group">
        <span :class="'fa fa-' + icon"></span>
      </div>
      <el-row :gutter="10">
        <el-col :span="12">
          <el-tooltip effect="dark" :content="iconClass" placement="top">
            <el-button @click="copy(iconClass)" style="width: 100%;">复制Class</el-button>
          </el-tooltip>
        </el-col>
        <el-col :span="12">
          <el-tooltip effect="dark" :content="iconHtml" placement="top">
            <el-button @click="copy(iconHtml)" style="width: 100%;">复制HTML</el-button>
          </el-tooltip>
        </el-col>
      </el-row>
    </el-popover>
    <el-tag type="info" v-popover:pop>
      <span :class="'fa fa-' + icon"></span>
    </el-tag>
    <span style="font-size: 10px;">{{icon}}</span>
  </div>
</template>

<script>
import clipboard from 'clipboard-polyfill'
export default {
  props: {
    icon: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    iconClass () {
      return `fa fa-${this.icon}`
    },
    iconHtml () {
      return `<i class="fa fa-${this.icon}"></i>`
    }
  },
  methods: {
    copy (text) {
      clipboard.writeText(text)
      this.$message({
        message: `${text} 复制到剪贴板`,
        type: 'success'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-group {
  text-align: center;
  font-size: 100px;
}
</style>
