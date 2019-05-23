<template>
  <d2-container>
    <template slot="header">剪贴板访问</template>
    <el-row :gutter="10">
      <el-col :span="12">
        <div class="d2-mb">
          <el-input v-model="text" style="width: 200px;"></el-input>
          <el-button class="d2-ml" @click="copyText()">将左侧输入框内的文字复制进剪贴板</el-button>
        </div>
        <el-button @click="copyHtml()">将 <span v-html="html"></span> 连带样式一起复制进剪贴板，然后去 Word 文档内粘贴</el-button>
      </el-col>
      <el-col :span="12">
        <el-alert
          class="d2-mb"
          title="在 IE 浏览器或者高版本 Chrome 下你才可以通过下面这两个按钮获取剪贴板数据"
          type="warning"
          show-icon>
        </el-alert>
        <div class="d2-mb">
          <el-tooltip content="需要 IE 浏览器" placement="top">
            <el-button @click="readText">readText( )</el-button>
          </el-tooltip>
          <el-tooltip content="需要 IE 浏览器" placement="top">
            <el-button @click="read">read( )</el-button>
          </el-tooltip>
        </div>
        <el-input type="textarea" placeholder="在这里检验你的剪贴板 ( text/plain 数据 )"></el-input>
      </el-col>
    </el-row>
  </d2-container>
</template>

<script>
import * as clipboard from 'clipboard-polyfill'
export default {
  data () {
    return {
      text: 'Hello ~',
      html: '<span style="background-color: #19be6b; color: #f8f8f9;">Hello</span><span style="background-color: #495060; color: #f8f8f9;">World</span>'
    }
  },
  methods: {
    copyText () {
      clipboard.writeText(this.text)
    },
    copyHtml () {
      var dt = new clipboard.DT()
      dt.setData('text/html', this.html)
      clipboard.write(dt)
    },
    readText () {
      clipboard.readText().then((res) => {
        this.$message({
          message: '读取成功 返回结果请查看控制台',
          type: 'success'
        })
      }, err => {
        console.log(err)
        this.$message({
          message: '错误信息已经打印到控制台',
          type: 'error'
        })
      })
    },
    read () {
      clipboard.read().then((res) => {
        console.log(res)
        this.$message({
          message: '读取成功 返回结果请查看控制台',
          type: 'success'
        })
      }, (err) => {
        console.log(err)
        this.$message({
          message: '错误信息已经打印到控制台',
          type: 'error'
        })
      })
    }
  }
}
</script>
