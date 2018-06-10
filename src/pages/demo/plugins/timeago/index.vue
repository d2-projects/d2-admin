<template>
  <d2-container type="ghost">
    <el-card class="d2-mb">
      <PageHeader
        title="基本示例"
        url="https://github.com/hustcc/timeago.js">
      </PageHeader>
    </el-card>
    <el-card class="d2-mb">
      <div class="d2-text-center">
        <h1 style="font-size: 30px;">您在{{openPageDateAgo}}打开的此页面</h1>
        <p style="font-size: 10px;">请稍等一下 10秒后会开始自动刷新</p>
      </div>
    </el-card>
    <el-card class="d2-mb">
      <div class="d2-text-center">
        <h1 style="font-size: 30px;">{{dateTimeRangeAgo}}</h1>
        <el-date-picker
          v-model="dateTimeRange"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </div>
    </el-card>
    <el-card>
      <Markdown url="/static/md/插件 - timeago.md"></Markdown>
    </el-card>
  </d2-container>
</template>

<script>
import timeago from 'timeago.js'
export default {
  data () {
    return {
      // 打开页面时间
      openPageDate: new Date(),
      // 打开页面已经过去的时间
      openPageDateAgo: '',
      // 打开页面时间计时器
      dateTimeRangeTimer: null,
      // 起止时间
      dateTimeRange: [new Date(2018, 0, 1, 0, 0), new Date()],
      // 上面起止时间的计算结果
      dateTimeRangeAgo: ''
    }
  },
  mounted () {
    // 刷新打开页面过去的时间
    this.refreshOpenPageDateAgo()
    this.dateTimeRangeTimer = setInterval(this.refreshOpenPageDateAgo, 1000)
    // 刷新起止时间的计算结果
    this.refreshDateTimeRangeAgo()
  },
  beforeDestroy () {
    // 清空计时器
    clearInterval(this.dateTimeRangeTimer)
  },
  watch: {
    dateTimeRange () {
      // 刷新起止时间的计算结果
      this.refreshDateTimeRangeAgo()
    }
  },
  methods: {
    // 计算打开页面过了多久
    refreshOpenPageDateAgo () {
      this.openPageDateAgo = timeago().format(this.openPageDate, 'zh_CN')
    },
    // 计算起止时间间隔
    refreshDateTimeRangeAgo () {
      const timeagoInstance = timeago(this.dateTimeRange[1])
      this.dateTimeRangeAgo = timeagoInstance.format(this.dateTimeRange[0], 'zh_CN')
    }
  }
}
</script>
