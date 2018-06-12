<template>
  <d2-container type="full">
    <template slot="header">
      <el-button @click="handleReset">重新设置基础时间 this.now = dayjs()</el-button>
    </template>
    <h1>当前时间</h1>
    <el-row :gutter="20" class="d2-mt">
      <el-col :span="8"><el-card shadow="never"><d2-highlight slot="header" :code="`now.format('YYYY MM DD')`"/>{{now.format('YYYY MM DD')}}</el-card></el-col>
    </el-row>
    <h1>获取</h1>
    <el-row :gutter="20" class="d2-mt">
      <el-col :span="6"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`now.year()`"/>{{now.year()}}</el-card></el-col>
      <el-col :span="6"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`now.month()`"/>{{now.month()}}</el-card></el-col>
      <el-col :span="6"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`now.date()`"/>{{now.date()}}</el-card></el-col>
      <el-col :span="6"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`now.day()`"/>{{now.day()}}</el-card></el-col>
      <el-col :span="6"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`now.hour()`"/>{{now.hour()}}</el-card></el-col>
      <el-col :span="6"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`now.minute()`"/>{{now.minute()}}</el-card></el-col>
      <el-col :span="6"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`now.second()`"/>{{now.second()}}</el-card></el-col>
      <el-col :span="6"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`now.millisecond()`"/>{{now.millisecond()}}</el-card></el-col>
    </el-row>
    <h1>设置</h1>
    <el-row :gutter="20" class="d2-mt">
      <el-col :span="8"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`now.set('month', 6).month()`"/>{{now.set('month', 6).month()}}</el-card></el-col>
      <el-col :span="8"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`now.set('second', 30).second()`"/>{{now.set('second', 30).second()}}</el-card></el-col>
      <el-col :span="8"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`now.set('hour', 4).hour()`"/>{{now.set('hour', 4).hour()}}</el-card></el-col>
    </el-row>
    <h1>操作</h1>
    <el-row :gutter="20" class="d2-mt">
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`now.add(1, 'day').format()`"/>{{now.add(1, 'day').format()}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`now.subtract(7, 'year').format()`"/>{{now.subtract(7, 'year').format()}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`now.startOf('year').format()`"/>{{now.startOf('year').format()}}</el-card></el-col>
      <el-col :span="12"><el-card shadow="never" class="d2-mb"><d2-highlight slot="header" :code="`now.endOf('month').format()`"/>{{now.endOf('month').format()}}</el-card></el-col>
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
