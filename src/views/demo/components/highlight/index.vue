<template>
  <d2-container>
    <template slot="header">代码高亮组件</template>
    <el-card shadow="never" class="d2-mb">
      <p slot="title">javascript</p>
      <d2-highlight :code="codeJavascript"/>
    </el-card>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="never">
          <p slot="title">css</p>
          <d2-highlight :code="codeCSS"/>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never">
          <p slot="title">scss</p>
          <d2-highlight :code="codeSCSS"/>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never">
          <p slot="title">html</p>
          <d2-highlight :code="codeHTML"/>
        </el-card>
      </el-col>
    </el-row>
  </d2-container>
</template>

<script>
import codeJavascript from './code/javascript'
import codeCSS from './code/css'
import codeSCSS from './code/scss'
import codeHTML from './code/html'
export default {
  data () {
    return {
      codeJavascript,
      codeCSS,
      codeSCSS,
      codeHTML
    }
  }
}
</script>
