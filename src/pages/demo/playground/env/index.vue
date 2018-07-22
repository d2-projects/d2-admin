<template>
  <d2-container type="card">
    <template slot="header">环境信息</template>
    <el-alert
      :title="`this.$env = ${$env}`"
      type="info">
    </el-alert>
  </d2-container>
</template>
