<template>
  <d2-container type="ghost">
    <el-card class="d2-mb">
      <PageHeader
        title="代码高亮组件"
        url="https://github.com/isagalaev/highlight.js">
      </PageHeader>
    </el-card>
    <el-card class="d2-mb">
      <p slot="title">javascript</p>
      <d2-highlight :code="codeJavascript"></d2-highlight>
    </el-card>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="d2-mb">
          <p slot="title">css</p>
          <d2-highlight :code="codeCSS"></d2-highlight>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="d2-mb">
          <p slot="title">scss</p>
          <d2-highlight :code="codeSCSS"></d2-highlight>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="d2-mb">
          <p slot="title">html</p>
          <d2-highlight :code="codeHTML"></d2-highlight>
        </el-card>
      </el-col>
    </el-row>
    <el-card>
      <Markdown url="/static/md/组件 - 代码高亮.md"></Markdown>
    </el-card>
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
