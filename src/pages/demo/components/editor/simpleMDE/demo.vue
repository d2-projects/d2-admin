<template>
  <Container type="ghost">
    <el-card class="dd-mb">
      <PageHeader
        slot="header"
        title="基本示例"
        url="https://github.com/sparksuite/simplemde-markdown-editor">
      </PageHeader>
      <SimpleMDE style="margin-bottom: -16px;"></SimpleMDE>
    </el-card>
    <el-card>
      <template slot="header">输出</template>
    </el-card>
  </Container>
</template>
