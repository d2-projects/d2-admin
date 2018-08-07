<template>
  <div>
    <el-tooltip
      effect="dark"
      :content="tooltipContent"
      placement="bottom">
      <el-button
        class="d2-ml-0 d2-mr btn-text can-hover"
        type="text"
        @click="handleClick">
        <el-badge
          v-if="d2adminLogLength > 0"
          :max="99"
          :value="d2adminLogErrorLength"
          :is-dot="d2adminLogErrorLength === 0">
          <d2-icon
            :name="d2adminLogErrorLength === 0 ? 'dot-circle-o' : 'bug'"
            style="font-size: 20px"/>
        </el-badge>
        <d2-icon
          v-else
          name="dot-circle-o"
          style="font-size: 20px"/>
      </el-button>
    </el-tooltip>
    <el-dialog
      :title="tooltipContent"
      :fullscreen="true"
      :visible.sync="dialogVisible"
      :append-to-body="true">
      <div class="d2-mb-10">
        <el-button type="danger" size="mini" @click="handleLogClean">
          <d2-icon name="trash-o"/>
          清空
        </el-button>
      </div>

      <d2-error-log-list/>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
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
      return this.d2adminLogLength === 0
        ? '没有日志或异常'
        : `${this.d2adminLogLength} 条日志${this.d2adminLogErrorLength > 0
          ? ` | 包含 ${this.d2adminLogErrorLength} 个异常`
          : ''}`
    }
  },
  methods: {
    ...mapMutations([
      'd2adminLogClean'
    ]),
    handleClick () {
      if (this.d2adminLogLength > 0) {
        this.dialogVisible = true
      }
    },
    handleLogClean () {
      this.dialogVisible = false
      this.d2adminLogClean()
    }
  }
}
</script>
