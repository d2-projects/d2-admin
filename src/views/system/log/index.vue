<template>
  <d2-container>
    <template slot="header">
      <el-button
        type="primary"
        size="mini"
        :loading="uploading"
        @click="handleUpload">
        <d2-icon name="cloud-upload"/>
        Upload
      </el-button>
    </template>
    <section class="page">
      <p class="log" v-for="(log, logIndex) in list" :key="logIndex">
        <span class="log-time">{{log.time}}</span>
        <span class="log-message">{{log.message}}</span>
      </p>
    </section>
  </d2-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      uploading: false
    }
  },
  computed: {
    ...mapState('d2admin/log', [
      'list'
    ])
  },
  methods: {
    handleUpload () {
      this.uploading = true
      this.$notify({
        type: 'info',
        title: '日志上传',
        message: `开始上传${this.list.length}条日志`
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

<style lang="scss" scoped>
.page {
  .log {
    margin: 4px -4px;
    padding: 4px;
    border-radius: 2px;
    @extend %unable-select;
    &:hover {
      background-color: $color-bg;
    }
    &:first-child {
      margin-top: 0px;
    }
    &:last-child {
      margin-bottom: 0px;
    }
    .log-time {
      color: $color-text-main;
      margin-right: 10px;
    }
    .log-message {
      color: $color-text-normal;
    }
  }
}
</style>
