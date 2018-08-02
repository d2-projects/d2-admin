<template>
  <div>
    <el-tooltip effect="dark" :content="tooltipContent" placement="bottom">
      <el-button class="d2-ml-0 d2-mr btn-text can-hover" type="text" @click="dialogVisible = true">
        <el-badge
          v-if="d2adminLogLength > 0"
          :value="d2adminLogErrorLength"
          :is-dot="d2adminLogErrorLength === 0">
          <d2-icon name="bug" style="font-size: 20px"/>
        </el-badge>
        <d2-icon v-else name="bug" style="font-size: 20px"/>
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
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      dialogVisible: false
    }
  },
  computed: {
    ...mapGetters([
      'd2adminLogLength',
      'd2adminLogErrorLength'
    ]),
    tooltipContent () {
      return this.d2adminLogLength === 0 ?
        '没有日志或异常' :
        `${this.d2adminLogLength} 条日志${this.d2adminLogErrorLength > 0 ?
          ` | 包含 ${this.d2adminLogErrorLength} 个异常` :
          ''}`
    }
  }
}
</script>
