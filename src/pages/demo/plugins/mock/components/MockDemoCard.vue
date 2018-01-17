<template>
  <el-card class="dd-mb">
    <div slot="header" class="dd-clearfix">
      <el-button type="text" size="mini">{{title}}</el-button>
      <el-tooltip content="重新 mock 数据" placement="top-end">
        <el-button type="primary" size="mini" @click="$emit('reload')" class="dd-fr">刷新</el-button>
      </el-tooltip>
    </div>
    <el-row :gutter="10">
      <el-col :span="12">
        <div class="col col-l">
          <Highlight :code="code"></Highlight>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="col col-r">
          <Highlight :code="mock"></Highlight>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
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
@import '~@/assets/style/public.scss';
.col {
  padding: $margin;
  border-radius: $border-radius;
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


