<template>
  <div>
    <el-tooltip effect="dark" content="theme" placement="bottom">
      <el-button class="d2-ml-0 d2-mr btn-text can-hover" type="text" @click="dialogVisible = true">
        <d2-icon name="diamond"/>
      </el-button>
    </el-tooltip>
    <el-dialog title="主题" width="600px" :visible.sync="dialogVisible">
      <d2-theme-list/>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false
    }
  }
}
</script>
