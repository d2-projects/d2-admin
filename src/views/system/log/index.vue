<template>
  <d2-container>
    <el-table
      :data="log"
      size="mini"
      style="width: 100%"
      stripe>
      <el-table-column
        prop="time"
        label="Time"
        width="140">
      </el-table-column>
      <el-table-column
        prop="message"
        label="Message">
      </el-table-column>
    </el-table>
    <template slot="footer">
      <el-button
        type="primary"
        size="mini"
        :loading="uploading"
        @click="handleUpload">
        <d2-icon name="cloud-upload"/>
        Upload {{log.length}} log data
      </el-button>
    </template>
  </d2-container>
</template>

<script>
import { mapState } from 'vuex'
import { get } from 'lodash'
export default {
  data () {
    return {
      get,
      uploading: false
    }
  },
  computed: {
    ...mapState('d2admin/log', [
      'log'
    ])
  },
  methods: {
    handleLogConsole (log) {
      // 打印一条日志的所有信息到控制台
      console.log(log)
    },
    // 日志上传
    handleUpload () {
      this.uploading = true
      this.$notify({
        type: 'info',
        title: '日志上传',
        message: `开始上传${this.log.length}条日志`
      })
      setTimeout(() => {
        this.uploading = false
        this.$notify({
          type: 'success',
          title: '日志上传',
          message: '上传成功'
        })
      }, 3000)
    }
  }
}
</script>
