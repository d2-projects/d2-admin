<template>
  <d2-container type="full">
    <template slot="header">
      <el-button @click="handleReset">重新设置基础时间 this.now = dayjs()</el-button>
    </template>
    <h1 class="d2-mt-0">当前时间</h1>
    <el-row :gutter="20" class="d2-mt">
      <el-col :span="8"><el-card shadow="never"><d2-highlight slot="header" :code="`now.format('YYYY年M月D日 HH:mm:ss')`"/>{{now.format('YYYY年M月D日 HH:mm:ss')}}</el-card></el-col>
    </el-row>
    <h1>获取</h1>
    <el-row :gutter="20" class="d2-mt">
      <el-col :span="6"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`//获取年\nnow.year()`"/>{{now.year()}}</el-card></el-col>
      <el-col :span="6"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`//获取月\nnow.month()`"/>{{now.month()}}</el-card></el-col>
      <el-col :span="6"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`//获取日\nnow.date()`"/>{{now.date()}}</el-card></el-col>
      <el-col :span="6"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`//获取星期\nnow.day()`"/>{{now.day()}}</el-card></el-col>
      <el-col :span="6"><el-card shadow="never"><d2-highlight slot="header" :code="`//获取小时\nnow.hour()`"/>{{now.hour()}}</el-card></el-col>
      <el-col :span="6"><el-card shadow="never"><d2-highlight slot="header" :code="`//获取分钟\nnow.minute()`"/>{{now.minute()}}</el-card></el-col>
      <el-col :span="6"><el-card shadow="never"><d2-highlight slot="header" :code="`//获取秒\nnow.second()`"/>{{now.second()}}</el-card></el-col>
      <el-col :span="6"><el-card shadow="never"><d2-highlight slot="header" :code="`//获取毫秒\nnow.millisecond()`"/>{{now.millisecond()}}</el-card></el-col>
    </el-row>
    <h1>设置</h1>
    <el-row :gutter="20" class="d2-mt">
      <el-col :span="8"><el-card shadow="never"><d2-highlight slot="header" :code="`//设置月份\nnow.set('month', 6).month()`"/>{{now.set('month', 6).month()}}</el-card></el-col>
      <el-col :span="8"><el-card shadow="never"><d2-highlight slot="header" :code="`//设置秒\nnow.set('second', 30).second()`"/>{{now.set('second', 30).second()}}</el-card></el-col>
      <el-col :span="8"><el-card shadow="never"><d2-highlight slot="header" :code="`//设置小时\nnow.set('hour', 4).hour()`"/>{{now.set('hour', 4).hour()}}</el-card></el-col>
    </el-row>
    <h1>操作</h1>
    <el-row :gutter="20" class="d2-mt">
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`//增加\nnow.add(1, 'day').format('YYYY年M月D日 HH:mm:ss')`"/>{{now.add(1, 'day').format('YYYY年M月D日 HH:mm:ss')}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`//减少\nnow.subtract(7, 'year').format('YYYY年M月D日 HH:mm:ss')`"/>{{now.subtract(7, 'year').format('YYYY年M月D日 HH:mm:ss')}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never"><d2-highlight slot="header" :code="`//开头时间\nnow.startOf('year').format('YYYY年M月D日 HH:mm:ss')`"/>{{now.startOf('year').format('YYYY年M月D日 HH:mm:ss')}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never"><d2-highlight slot="header" :code="`//末尾时间\nnow.endOf('month').format('YYYY年M月D日 HH:mm:ss')`"/>{{now.endOf('month').format('YYYY年M月D日 HH:mm:ss')}}</el-card></el-col>
    </el-row>
    <h1>显示</h1>
    <el-row :gutter="20" class="d2-mt">
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`//格式化\nnow.format('YYYY-M-D HH:mm:ss')`"/>{{now.format('YYYY-M-D HH:mm:ss')}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`//时间差\nnow.diff(now.subtract(1, 'day'), 'days')`"/>{{now.diff(now.subtract(1, 'day'), 'days')}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`//Unix 时间戳 (毫秒)\nnow.valueOf()`"/>{{now.valueOf()}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`//Unix 时间戳 (秒)\nnow.unix()`"/>{{now.unix()}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`//天数 (月)\nnow.daysInMonth()`"/>{{now.daysInMonth()}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`//Date 对象\nnow.toDate()`"/>{{now.toDate()}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`//数组\nnow.toArray()`"/>{{now.toArray()}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`//序列化 Dayjs 对象时会返回 ISO 8601 格式的字符串\nnow.toJSON()`"/>{{now.toJSON()}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`//ISO 8601 字符串\nnow.toISOString()`"/>{{now.toISOString()}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`//字符串\nnow.toString()`"/>{{now.toString()}}</el-card></el-col>
      <el-col :span="24"><el-card shadow="never"><d2-highlight slot="header" :code="`//对象\nnow.toObject()`"/>{{now.toObject()}}</el-card></el-col>
    </el-row>
    <h1>查询</h1>
    <el-row :gutter="20" class="d2-mt">
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`//是否之前\nnow.isBefore(now.add(1, 'day'))`"/>{{now.isBefore(now.add(1, 'day'))}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`//是否之前\nnow.isBefore(now.subtract(1, 'day'))`"/>{{now.isBefore(now.subtract(1, 'day'))}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`//是否相同\nnow.isSame(now)`"/>{{now.isSame(now)}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`//是否相同\nnow.isSame(now.add(1, 'day'))`"/>{{now.isSame(now.add(1, 'day'))}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never"><d2-highlight slot="header" :code="`//是否之后\nnow.isAfter(now.add(1, 'day'))`"/>{{now.isAfter(now.add(1, 'day'))}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never"><d2-highlight slot="header" :code="`//是否之后\nnow.isAfter(now.subtract(1, 'day'))`"/>{{now.isAfter(now.subtract(1, 'day'))}}</el-card></el-col>
    </el-row>
    <template slot="footer">
      <d2-demo-link-btn title="依赖" :link="link"/>
    </template>
  </d2-container>
</template>

<script>
import dayjs from 'dayjs'
export default {
  data () {
    return {
      link: 'https://github.com/iamkun/dayjs',
      now: dayjs()
    }
  },
  methods: {
    handleReset () {
      this.now = dayjs()
    }
  }
}
</script>
