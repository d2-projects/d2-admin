<template>
  <d2-container>
    <template slot="header">
      <el-button
        type="primary"
        size="mini"
        :loading="uploading"
        @click="handleUpload">
        Upload
      </el-button>
    </template>
    Log Page
  </d2-container>
</template>

<script>
export default {
  data () {
    return {
      uploading: false
    }
  },
  methods: {
    handleUpload () {
      this.uploading = true
      this.$notify({
        type: 'info',
        title: '日志上传',
        message: '开始上传日志'
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

