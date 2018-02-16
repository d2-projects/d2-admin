<template>
  <Container type="ghost">
    <el-card class="dd-mb">
      <PageHeader
        title="代码高亮组件封装演示"
        url="https://github.com/isagalaev/highlight.js">
      </PageHeader>
    </el-card>
    <el-card class="dd-mb">
      <p slot="title">javascript</p>
      <Highlight :code="codeJavascript"></Highlight>
    </el-card>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="dd-mb">
          <p slot="title">css</p>
          <Highlight :code="codeCSS"></Highlight>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="dd-mb">
          <p slot="title">scss</p>
          <Highlight :code="codeSCSS"></Highlight>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="dd-mb">
          <p slot="title">html</p>
          <Highlight :code="codeHTML"></Highlight>
        </el-card>
      </el-col>
    </el-row>
    <el-card>
      <Markdown url="/static/markdownFiles/article/组件 - 代码高亮.md"></Markdown>
    </el-card>
  </Container>
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
