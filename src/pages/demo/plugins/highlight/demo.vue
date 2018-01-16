<template>
  <Container type="ghost">
    <el-card class="dd-mb">
      <p slot="title">javascript</p>
      <Highlight :code="codeJavascript"></Highlight>
    </el-card>
    <el-row :gutter="10">
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
