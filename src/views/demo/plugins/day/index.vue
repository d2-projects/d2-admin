<template>
  <d2-container>
    <template slot="header">日期计算</template>
    <h1 class="d2-mt-0">解析</h1>
    <el-row :gutter="20" class="d2-mt">
      <el-col :span="6"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`// 当前时间\ndayjs()`"/>{{dayjs()}}</el-card></el-col>
      <el-col :span="6"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`// 时间字符串\ndayjs('1995-12-25')`"/>{{dayjs('1995-12-25')}}</el-card></el-col>
      <el-col :span="6"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`// Unix 时间戳 (毫秒)\ndayjs(1318781876406)`"/>{{dayjs(1318781876406)}}</el-card></el-col>
      <el-col :span="6"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`// Date 对象\ndayjs(new Date(2018, 8, 18))`"/>{{dayjs(new Date(2018, 8, 18))}}</el-card></el-col>
      <el-col :span="6"><el-card shadow="never"><d2-highlight slot="header" :code="`// 复制\ndayjs().clone()`"/>{{dayjs().clone()}}</el-card></el-col>
      <el-col :span="6"><el-card shadow="never"><d2-highlight slot="header" :code="`// 检测是否是一个有效的时间\ndayjs().isValid()`"/>{{dayjs().isValid()}}</el-card></el-col>
    </el-row>
    <h1>获取</h1>
    <el-row :gutter="20" class="d2-mt">
      <el-col :span="6"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`// 获取年\ndayjs().year()`"/>{{dayjs().year()}}</el-card></el-col>
      <el-col :span="6"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`// 获取月\ndayjs().month()`"/>{{dayjs().month()}}</el-card></el-col>
      <el-col :span="6"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`// 获取日\ndayjs().date()`"/>{{dayjs().date()}}</el-card></el-col>
      <el-col :span="6"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`// 获取星期\ndayjs().day()`"/>{{dayjs().day()}}</el-card></el-col>
      <el-col :span="6"><el-card shadow="never"><d2-highlight slot="header" :code="`// 获取小时\ndayjs().hour()`"/>{{dayjs().hour()}}</el-card></el-col>
      <el-col :span="6"><el-card shadow="never"><d2-highlight slot="header" :code="`// 获取分钟\ndayjs().minute()`"/>{{dayjs().minute()}}</el-card></el-col>
      <el-col :span="6"><el-card shadow="never"><d2-highlight slot="header" :code="`// 获取秒\ndayjs().second()`"/>{{dayjs().second()}}</el-card></el-col>
      <el-col :span="6"><el-card shadow="never"><d2-highlight slot="header" :code="`// 获取毫秒\ndayjs().millisecond()`"/>{{dayjs().millisecond()}}</el-card></el-col>
    </el-row>
    <h1>设置</h1>
    <el-row :gutter="20" class="d2-mt">
      <el-col :span="8"><el-card shadow="never"><d2-highlight slot="header" :code="`// 设置月份\ndayjs().set('month', 6).month()`"/>{{dayjs().set('month', 6).month()}}</el-card></el-col>
      <el-col :span="8"><el-card shadow="never"><d2-highlight slot="header" :code="`// 设置秒\ndayjs().set('second', 30).second()`"/>{{dayjs().set('second', 30).second()}}</el-card></el-col>
      <el-col :span="8"><el-card shadow="never"><d2-highlight slot="header" :code="`// 设置小时\ndayjs().set('hour', 4).hour()`"/>{{dayjs().set('hour', 4).hour()}}</el-card></el-col>
    </el-row>
    <h1>操作</h1>
    <el-row :gutter="20" class="d2-mt">
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`// 增加\ndayjs().add(1, 'day').format('YYYY年M月D日 HH:mm:ss')`"/>{{dayjs().add(1, 'day').format('YYYY年M月D日 HH:mm:ss')}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`// 减少\ndayjs().subtract(7, 'year').format('YYYY年M月D日 HH:mm:ss')`"/>{{dayjs().subtract(7, 'year').format('YYYY年M月D日 HH:mm:ss')}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never"><d2-highlight slot="header" :code="`// 开头时间\ndayjs().startOf('year').format('YYYY年M月D日 HH:mm:ss')`"/>{{dayjs().startOf('year').format('YYYY年M月D日 HH:mm:ss')}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never"><d2-highlight slot="header" :code="`// 末尾时间\ndayjs().endOf('month').format('YYYY年M月D日 HH:mm:ss')`"/>{{dayjs().endOf('month').format('YYYY年M月D日 HH:mm:ss')}}</el-card></el-col>
    </el-row>
    <h1>显示</h1>
    <el-row :gutter="20" class="d2-mt">
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`// 格式化\ndayjs().format('YYYY-M-D HH:mm:ss')`"/>{{dayjs().format('YYYY-M-D HH:mm:ss')}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`// 时间差\ndayjs().diff(dayjs().subtract(1, 'day'), 'days')`"/>{{dayjs().diff(dayjs().subtract(1, 'day'), 'days')}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`// Unix 时间戳 (毫秒)\ndayjs().valueOf()`"/>{{dayjs().valueOf()}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`// Unix 时间戳 (秒)\ndayjs().unix()`"/>{{dayjs().unix()}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`// 天数 (月)\ndayjs().daysInMonth()`"/>{{dayjs().daysInMonth()}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`// Date 对象\ndayjs().toDate()`"/>{{dayjs().toDate()}}</el-card></el-col>
      <!-- <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`// 数组\ndayjs().toArray()`"/>{{dayjs().toArray()}}</el-card></el-col> -->
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`// 序列化 Dayjs 对象时会返回 ISO 8601 格式的字符串\ndayjs().toJSON()`"/>{{dayjs().toJSON()}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`// ISO 8601 字符串\ndayjs().toISOString()`"/>{{dayjs().toISOString()}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`// 字符串\ndayjs().toString()`"/>{{dayjs().toString()}}</el-card></el-col>
      <!-- <el-col :span="24"><el-card shadow="never"><d2-highlight slot="header" :code="`// 对象\ndayjs().toObject()`"/>{{dayjs().toObject()}}</el-card></el-col> -->
    </el-row>
    <h1>查询</h1>
    <el-row :gutter="20" class="d2-mt">
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`// 是否之前\ndayjs().isBefore(dayjs().add(1, 'day'))`"/>{{dayjs().isBefore(dayjs().add(1, 'day'))}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`// 是否之前\ndayjs().isBefore(dayjs().subtract(1, 'day'))`"/>{{dayjs().isBefore(dayjs().subtract(1, 'day'))}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`// 是否相同\ndayjs().isSame(dayjs())`"/>{{dayjs().isSame(dayjs())}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`// 是否相同\ndayjs().isSame(dayjs().add(1, 'day'))`"/>{{dayjs().isSame(dayjs().add(1, 'day'))}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never"><d2-highlight slot="header" :code="`// 是否之后\ndayjs().isAfter(dayjs().add(1, 'day'))`"/>{{dayjs().isAfter(dayjs().add(1, 'day'))}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never"><d2-highlight slot="header" :code="`// 是否之后\ndayjs().isAfter(dayjs().subtract(1, 'day'))`"/>{{dayjs().isAfter(dayjs().subtract(1, 'day'))}}</el-card></el-col>
    </el-row>
    <d2-link-btn slot="footer" title="依赖" link="https://github.com/iamkun/dayjs"/>
  </d2-container>
</template>

<script>
import dayjs from 'dayjs'
export default {
  data () {
    return {
      dayjs
    }
  }
}
</script>
