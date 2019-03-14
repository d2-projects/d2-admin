<template>
  <div>
    <el-popover
      ref="pop"
      placement="right"
      :title="icon"
      width="300"
      trigger="click">
      <div class="icon-group">
        <i :class="'fa fa-' + icon"></i>
      </div>
      <el-row :gutter="10">
        <el-col :span="8">
          <el-tooltip effect="dark" :content="iconClass" placement="top">
            <el-button @click="copy(iconClass)" style="width: 100%;">Class</el-button>
          </el-tooltip>
        </el-col>
        <el-col :span="8">
          <el-tooltip effect="dark" :content="iconHtml" placement="top">
            <el-button @click="copy(iconHtml)" style="width: 100%;">HTML</el-button>
          </el-tooltip>
        </el-col>
        <el-col :span="8">
          <el-tooltip effect="dark" :content="iconComponent" placement="top">
            <el-button @click="copy(iconComponent)" style="width: 100%;">组件</el-button>
          </el-tooltip>
        </el-col>
      </el-row>
    </el-popover>
    <span v-popover:pop>
      <el-tag type="info" class="icon-tag">
        <i :class="'fa fa-' + icon"></i>
      </el-tag>
      <span style="font-size: 10px;">{{icon}}</span>
    </span>
  </div>
</template>

<script>
import * as clipboard from 'clipboard-polyfill'
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
      return `<i class="fa fa-${this.icon}" aria-hidden="true"></i>`
    },
    iconComponent () {
      return `<d2-icon name="${this.icon}"/>`
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
  font-size: 200px;
}
.icon-tag {
  width: 32px;
  text-align: center;
  margin-right: 5px;
}
</style>
