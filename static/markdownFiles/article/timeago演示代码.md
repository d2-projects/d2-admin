```
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
```