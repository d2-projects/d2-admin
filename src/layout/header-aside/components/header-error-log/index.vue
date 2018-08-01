<template>
  <div>
    <el-tooltip effect="dark" content="异常" placement="bottom">
      <el-button class="d2-ml-0 d2-mr btn-text can-hover" type="text" @click="dialogVisible = true">
        <d2-icon name="bug" style="font-size: 20px"/>
      </el-button>
    </el-tooltip>
    <el-dialog
      title="异常日志"
      :fullscreen="true"
      :visible.sync="dialogVisible"
      :append-to-body="true">
      <d2-error-log-list/>
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
