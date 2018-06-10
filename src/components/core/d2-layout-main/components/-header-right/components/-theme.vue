<template>
  <div>
    <el-tooltip effect="dark" content="theme" placement="bottom">
      <el-button class="d2-ml-0 d2-mr btn-text" type="text" @click="dialogVisible = true">
        <d2-icon name="diamond"/>
      </el-button>
    </el-tooltip>
    <el-dialog title="主题" :visible.sync="dialogVisible">
      <el-table :data="tableData">
        <el-table-column prop="name" label="主题名称" width="100"></el-table-column>
        <el-table-column
          label="预览"
          width="220">
          <template slot-scope="scope">
            <div
              class="theme-preview"
              :style="{'backgroundImage': `url(${ scope.row.preview })`}">
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false,
      tableData: [
        {
          name: 'd2admin',
          preview: '/static/image/theme-preview/d2admin@2x.png'
        },
        {
          name: 'star',
          preview: '/static/image/theme-preview/star@2x.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.theme-preview {
  height: 100px;
  width: 200px;
  border-radius: 4px;
  background-size: cover;
  border: 1px solid $color-border-1;
}
</style>
