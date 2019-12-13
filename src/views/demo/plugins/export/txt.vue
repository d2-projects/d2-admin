<template>
  <d2-container type="card">
    <template slot="header">导出文本</template>
    <el-input
      type="textarea"
      :autosize="{minRows: 2, maxRows: 4}"
      placeholder="请输入内容 然后点击保存按钮导出文本文档"
      v-model="text">
    </el-input>
    <div class="d2-mt">
      <el-button type="primary" @click="exportTxt">
        <d2-icon name="download"/>
        保存为 txt
      </el-button>
    </div>
  </d2-container>
</template>

<script>
import Vue from 'vue'
import pluginExport from '@d2-projects/vue-table-export'
Vue.use(pluginExport)
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    exportTxt () {
      // 校验是不是空
      if (this.text === '') {
        this.$message('虽然可以为空 但是出于体验不建议这样 还是写点东西吧')
        return
      }
      // 导出
      this.$export.txt({
        text: this.text,
        title: '文本'
      })
        .then(() => {
          this.$message('导出文本成功')
        })
    }
  }
}
</script>
