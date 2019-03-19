<template>
  <el-card shadow="never" class="d2-mb">
    <el-row type="flex" justify="end" slot="header">
      <el-button type="text" size="mini">{{title}}</el-button>
      <el-tooltip content="重新 mock 数据" placement="top-end">
        <el-button type="primary" size="mini" @click="$emit('reload')" class="d2-fr">刷新</el-button>
      </el-tooltip>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <div class="col col-l">
          <d2-highlight :code="code"/>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="col col-r">
          <d2-highlight :code="mock"/>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'd2-demo-mock-card',
  props: {
    title: {
      type: String,
      required: false,
      default: 'Mock Demo'
    },
    code: {
      type: String,
      required: false,
      default: ''
    },
    mock: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.col {
  padding: 20px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  font-size: 16px;
}
.col-l {
  background-color: lighten($color-info, 40%);
  border-color: lighten($color-info, 35%);
}
.col-r {
  background-color: lighten($color-success, 47%);
  border-color: lighten($color-success, 40%);
}
</style>
