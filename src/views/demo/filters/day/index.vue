<template>
  <d2-container>
    <div slot="header" flex="main:justify">
      <el-date-picker size="mini" type="datetime" v-model="value" placeholder="选择一个日期"/>
      <el-button size="mini" type="primary">原值 value : {{value}}</el-button>
    </div>
    <code-title title="获取" sub-title="获取日期的指定部分"/>
    <code-and-result label="date_year" :value="value|date_year"/>
    <code-and-result label="date_month" :value="value|date_month"/>
    <code-and-result label="date_date" :value="value|date_date"/>
    <code-and-result label="date_day" :value="value|date_day"/>
    <code-and-result label="date_hour" :value="value|date_hour"/>
    <code-and-result label="date_minute" :value="value|date_minute"/>
    <code-and-result label="date_second" :value="value|date_second"/>
    <code-and-result label="date_millisecond" :value="value|date_millisecond"/>
    <code-title title="设置" sub-title="设置日期指定部分的值"/>
    <code-and-result label="date_set('year', 2020)|date_format('< YYYY > - MM - DD')" :value="value|date_set('year', 2020)|date_format('< YYYY > - MM - DD')"/>
    <code-and-result label="date_set('month', 0)|date_format('YYYY - < MM > - DD')" :value="value|date_set('month', 0)|date_format('YYYY - < MM > - DD')"/>
    <code-and-result label="date_set('date', 1)|date_format('YYYY - MM - < DD >')" :value="value|date_set('date', 1)|date_format('YYYY - MM - < DD >')"/>
    <code-and-result label="date_set('hour', 0)|date_format('< HH > : mm : ss')" :value="value|date_set('hour', 0)|date_format('< HH > : mm : ss')"/>
    <code-and-result label="date_set('minute', 0)|date_format('HH : < mm > : ss')" :value="value|date_set('minute', 0)|date_format('HH : < mm > : ss')"/>
    <code-and-result label="date_set('second', 0)|date_format('HH : mm : < ss >')" :value="value|date_set('second', 0)|date_format('HH : mm : < ss >')"/>
    <code-title title="增加" sub-title="增加时间并返回一个新的 Dayjs 对象"/>
    <code-and-result label="date_add(1, 'year')|date_format('< YYYY > - MM - DD')" :value="value|date_add(1, 'year')|date_format('< YYYY > - MM - DD')"/>
    <code-and-result label="date_add(1, 'month')|date_format('YYYY - < MM > - DD')" :value="value|date_add(1, 'month')|date_format('YYYY - < MM > - DD')"/>
    <code-and-result label="date_add(1, 'day')|date_format('YYYY - MM - < DD >')" :value="value|date_add(1, 'day')|date_format('YYYY - MM - < DD >')"/>
    <code-and-result label="date_add(1, 'hour')|date_format('< HH > : mm : ss')" :value="value|date_add(1, 'hour')|date_format('< HH > : mm : ss')"/>
    <code-and-result label="date_add(1, 'minute')|date_format('HH : < mm > : ss')" :value="value|date_add(1, 'minute')|date_format('HH : < mm > : ss')"/>
    <code-and-result label="date_add(1, 'second')|date_format('HH : mm : < ss >')" :value="value|date_add(1, 'second')|date_format('HH : mm : < ss >')"/>
    <code-title title="减少" sub-title="减少时间并返回一个新的 Dayjs 对象"/>
    <code-and-result label="date_subtract(1, 'year')|date_format('< YYYY > - MM - DD')" :value="value|date_subtract(1, 'year')|date_format('< YYYY > - MM - DD')"/>
    <code-and-result label="date_subtract(1, 'month')|date_format('YYYY - < MM > - DD')" :value="value|date_subtract(1, 'month')|date_format('YYYY - < MM > - DD')"/>
    <code-and-result label="date_subtract(1, 'day')|date_format('YYYY - MM - < DD >')" :value="value|date_subtract(1, 'day')|date_format('YYYY - MM - < DD >')"/>
    <code-and-result label="date_subtract(1, 'hour')|date_format('< HH > : mm : ss')" :value="value|date_subtract(1, 'hour')|date_format('< HH > : mm : ss')"/>
    <code-and-result label="date_subtract(1, 'minute')|date_format('HH : < mm > : ss')" :value="value|date_subtract(1, 'minute')|date_format('HH : < mm > : ss')"/>
    <code-and-result label="date_subtract(1, 'second')|date_format('HH : mm : < ss >')" :value="value|date_subtract(1, 'second')|date_format('HH : mm : < ss >')"/>
    <code-title title="开头时间" sub-title="返回当前时间的开头时间的 Dayjs 对象，如月份的第一天"/>
    <code-and-result label="date_startof('year')|date_format" :value="value|date_startof('year')|date_format"/>
    <code-and-result label="date_startof('month')|date_format" :value="value|date_startof('month')|date_format"/>
    <code-and-result label="date_startof('date')|date_format" :value="value|date_startof('date')|date_format"/>
    <code-and-result label="date_startof('hour')|date_format" :value="value|date_startof('hour')|date_format"/>
    <code-and-result label="date_startof('minute')|date_format" :value="value|date_startof('minute')|date_format"/>
    <code-title title="末尾时间" sub-title="返回当前时间的末尾时间的 Dayjs 对象，如月份的最后一天"/>
    <code-and-result label="date_endof('year')|date_format" :value="value|date_endof('year')|date_format"/>
    <code-and-result label="date_endof('month')|date_format" :value="value|date_endof('month')|date_format"/>
    <code-and-result label="date_endof('date')|date_format" :value="value|date_endof('date')|date_format"/>
    <code-and-result label="date_endof('hour')|date_format" :value="value|date_endof('hour')|date_format"/>
    <code-and-result label="date_endof('minute')|date_format" :value="value|date_endof('minute')|date_format"/>
    <code-title title="显示" sub-title="格式化 Dayjs 对象并展示"/>
    <code-and-result label="date_format" :value="value|date_format"/>
    <code-and-result label="date_format('YY-MM-DD')" :value="value|date_format('YY-MM-DD')"/>
    <code-and-result label="date_format('YYYY-M-D')" :value="value|date_format('YYYY-M-D')"/>
    <code-and-result label="date_format('YYYY-M-D H:m:s')" :value="value|date_format('YYYY-M-D H:m:s')"/>
    <code-title title="时间差" sub-title="获取两个 Dayjs 对象的时间差，默认毫秒"/>
    <code-and-result label="date_diff('2012-10-31', 'year')" :value="value|date_diff('2012-10-31', 'year')"/>
    <code-and-result label="date_diff('2012-10-31', 'month')" :value="value|date_diff('2012-10-31', 'month')"/>
    <code-and-result label="date_diff('2012-10-31', 'day')" :value="value|date_diff('2012-10-31', 'day')"/>
    <code-and-result label="date_diff('2012-10-31', 'hour')" :value="value|date_diff('2012-10-31', 'hour')"/>
    <code-and-result label="date_diff('2012-10-31', 'minute')" :value="value|date_diff('2012-10-31', 'minute')"/>
    <code-and-result label="date_diff('2012-10-31', 'second')" :value="value|date_diff('2012-10-31', 'second')"/>
    <code-title title="Unix 时间戳" sub-title="返回毫秒和秒"/>
    <code-and-result label="date_value_millisecond" :value="value|date_value_millisecond"/>
    <code-and-result label="date_value_second" :value="value|date_value_second"/>
    <code-title title="月份天数" sub-title="返回传入日期月份的天数"/>
    <code-and-result label="date_days_in_month" :value="value|date_days_in_month"/>
    <code-title title="处理为其它格式" sub-title="原生的 Date 对象，数组，json，ios 标准，对象，字符串"/>
    <code-and-result label="date_to_date" :value="value|date_to_date"/>
    <code-and-result label="date_to_json" :value="value|date_to_json"/>
    <code-and-result label="date_to_iso" :value="value|date_to_iso"/>
    <code-and-result label="date_to_string" :value="value|date_to_string"/>
    <code-title title="查询" sub-title="是否之前，之后，或者相同"/>
    <code-and-result label="date_is_before('2020-1-1')" :value="value|date_is_before('2020-1-1')"/>
    <code-and-result label="date_is_after('2012-1-1')" :value="value|date_is_after('2012-1-1')"/>
    <code-and-result label="date_is_same(new Date())" :value="value|date_is_same(new Date())"/>
    <code-and-result label="date_is_same(new Date(), 'date')" :value="value|date_is_same(new Date(), 'date')"/>
    <template slot="footer">
      <d2-link-btn title="文档" link="https://doc.d2admin.fairyever.com/zh/sys-plugins/vue-filters-date.html"/>
    </template>
  </d2-container>
</template>

<script>
import codeTitle from './components/code-title'
import codeAndResult from './components/code-and-result'
export default {
  components: {
    codeTitle,
    codeAndResult
  },
  data () {
    return {
      value: new Date(),
      filename: __filename
    }
  }
}
</script>
