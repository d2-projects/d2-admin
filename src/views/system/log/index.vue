<template>
  <d2-container>
    <el-table
      :data="log"
      size="mini"
      style="width: 100%"
      :empty-text="$t('views.system.log.table.empty-text')"
      stripe>
      <!-- time -->
      <el-table-column
        prop="time"
        :label="$t('views.system.log.table.label.time')"
        width="140">
      </el-table-column>
      <!-- message -->
      <el-table-column
        prop="message"
        :label="$t('views.system.log.table.label.message')">
      </el-table-column>
      <!-- url -->
      <el-table-column
        :label="$t('views.system.log.table.label.url')"
        align="center"
        min-width="200">
        <template slot-scope="scope">
          {{get(scope.row, 'meta.url')}}
        </template>
      </el-table-column>
      <!-- componnet -->
      <el-table-column
        :label="$t('views.system.log.table.label.component')"
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
      <!-- more -->
      <el-table-column
        fixed="right"
        align="center"
        :label="$t('views.system.log.table.label.more')"
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
        {{ $t('views.system.log.upload.button', { number: log.length }) }}
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
      // Print all information from a log to the console
      this.$notify({
        type: 'info',
        title: this.$t('public.notify.special.show-log.title'),
        message: this.$t('public.notify.special.show-log.message')
      })
      this.$log.capsule('D2Admin', 'handleShowMore', 'primary')
      console.group(log.message)
      console.log('time: ', log.time)
      console.log('type: ', log.type)
      console.log(log.meta)
      console.groupEnd()
    },
    // Log upload
    handleUpload () {
      this.uploading = true
      this.$notify({
        type: 'info',
        title: this.$t('public.notify.special.upload.start.title'),
        message: this.$t('public.notify.special.upload.start.message')
      })
      setTimeout(() => {
        this.uploading = false
        this.$notify({
          type: 'success',
          title: this.$t('public.notify.special.upload.success.title'),
          message: this.$t('public.notify.special.upload.success.message')
        })
      }, 3000)
    }
  }
}
</script>
