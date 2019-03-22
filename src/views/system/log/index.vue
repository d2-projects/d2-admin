<template>
  <d2-container>
    <el-table
      :data="log"
      size="mini"
      style="width: 100%"
      empty-text="暂无日志信息"
      stripe>
      <!-- 时间 -->
      <el-table-column
        prop="time"
        label="Time"
        width="140">
      </el-table-column>
      <!-- 信息 -->
      <el-table-column
        prop="message"
        label="Message">
      </el-table-column>
      <!-- 触发页面 -->
      <el-table-column
        label="Url"
        align="center"
        min-width="200">
        <template slot-scope="scope">
          {{get(scope.row, 'meta.url')}}
        </template>
      </el-table-column>
      <!-- 触发组件 -->
      <el-table-column
        label="Tag"
        align="center"
        min-width="120">
        <template slot-scope="scope">
          <el-tag
            v-if="get(scope.row, 'meta.instance.$vnode.componentOptions.tag')"
            type="info"
            size="mini">
            &#60;{{get(scope.row, 'meta.instance.$vnode.componentOptions.tag')}}&gt;
          </el-tag>
        </template>
      </el-table-column>
      <!-- 查看详情 -->
      <el-table-column
        fixed="right"
        align="center"
        label="More"
        width="100">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="mini"
            @click="handleShowMore(scope.row)">
            <d2-icon name="eye"/>
          </el-button>
        </template>
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
      uploading: false
    }
  },
  computed: {
    ...mapState('d2admin/log', [
      'log'
    ])
  },
  methods: {
    get,
    handleShowMore (log) {
      // 打印一条日志的所有信息到控制台
      this.$notify({
        type: 'info',
        title: '日志详情',
        message: '完整的日志内容已经打印到控制台'
      })
      this.$log.capsule('D2Admin', 'handleShowMore', 'primary')
      console.group(log.message)
      console.log('time: ', log.time)
      console.log('type: ', log.type)
      console.log(log.meta)
      console.groupEnd()
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
