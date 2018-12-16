<template>
  <d2-container>
    <div slot="header" flex="main:justify">
      <el-date-picker size="small" type="datetime" v-model="value" placeholder="选择一个日期"/>
      <el-button size="small" type="primary">value = {{value}}</el-button>
    </div>
    <code-title title="获取" sub-title="获取日期的指定部分"/>
    <code-and-result label="value|day_year" :value="value|day_year"/>
    <code-and-result label="value|day_month" :value="value|day_month"/>
    <code-and-result label="value|day_date" :value="value|day_date"/>
    <code-and-result label="value|day_day" :value="value|day_day"/>
    <code-and-result label="value|day_hour" :value="value|day_hour"/>
    <code-and-result label="value|day_minute" :value="value|day_minute"/>
    <code-and-result label="value|day_second" :value="value|day_second"/>
    <code-and-result label="value|day_millisecond" :value="value|day_millisecond"/>
    <code-title title="设置" sub-title="设置日期指定部分的值"/>
    <code-and-result label="value|day_set('year', 2020)|day_format('< YYYY > - MM - DD')" :value="value|day_set('year', 2020)|day_format('< YYYY > - MM - DD')"/>
    <code-and-result label="value|day_set('month', 0)|day_format('YYYY - < MM > - DD')" :value="value|day_set('month', 0)|day_format('YYYY - < MM > - DD')"/>
    <code-and-result label="value|day_set('date', 1)|day_format('YYYY - MM - < DD >')" :value="value|day_set('date', 1)|day_format('YYYY - MM - < DD >')"/>
    <code-and-result label="value|day_set('hour', 0)|day_format('< HH > : mm : ss')" :value="value|day_set('hour', 0)|day_format('< HH > : mm : ss')"/>
    <code-and-result label="value|day_set('minute', 0)|day_format('HH : < mm > : ss')" :value="value|day_set('minute', 0)|day_format('HH : < mm > : ss')"/>
    <code-and-result label="value|day_set('second', 0)|day_format('HH : mm : < ss >')" :value="value|day_set('second', 0)|day_format('HH : mm : < ss >')"/>
    <code-title title="增加" sub-title="增加时间并返回一个新的 Dayjs 对象"/>
    <code-and-result label="value|day_add(1, 'year')|day_format('< YYYY > - MM - DD')" :value="value|day_add(1, 'year')|day_format('< YYYY > - MM - DD')"/>
    <code-and-result label="value|day_add(1, 'month')|day_format('YYYY - < MM > - DD')" :value="value|day_add(1, 'month')|day_format('YYYY - < MM > - DD')"/>
    <code-and-result label="value|day_add(1, 'day')|day_format('YYYY - MM - < DD >')" :value="value|day_add(1, 'day')|day_format('YYYY - MM - < DD >')"/>
    <code-and-result label="value|day_add(1, 'hour')|day_format('< HH > : mm : ss')" :value="value|day_add(1, 'hour')|day_format('< HH > : mm : ss')"/>
    <code-and-result label="value|day_add(1, 'minute')|day_format('HH : < mm > : ss')" :value="value|day_add(1, 'minute')|day_format('HH : < mm > : ss')"/>
    <code-and-result label="value|day_add(1, 'second')|day_format('HH : mm : < ss >')" :value="value|day_add(1, 'second')|day_format('HH : mm : < ss >')"/>
    <code-title title="减少" sub-title="减少时间并返回一个新的 Dayjs 对象"/>
    <code-and-result label="value|day_subtract(1, 'year')|day_format('< YYYY > - MM - DD')" :value="value|day_subtract(1, 'year')|day_format('< YYYY > - MM - DD')"/>
    <code-and-result label="value|day_subtract(1, 'month')|day_format('YYYY - < MM > - DD')" :value="value|day_subtract(1, 'month')|day_format('YYYY - < MM > - DD')"/>
    <code-and-result label="value|day_subtract(1, 'day')|day_format('YYYY - MM - < DD >')" :value="value|day_subtract(1, 'day')|day_format('YYYY - MM - < DD >')"/>
    <code-and-result label="value|day_subtract(1, 'hour')|day_format('< HH > : mm : ss')" :value="value|day_subtract(1, 'hour')|day_format('< HH > : mm : ss')"/>
    <code-and-result label="value|day_subtract(1, 'minute')|day_format('HH : < mm > : ss')" :value="value|day_subtract(1, 'minute')|day_format('HH : < mm > : ss')"/>
    <code-and-result label="value|day_subtract(1, 'second')|day_format('HH : mm : < ss >')" :value="value|day_subtract(1, 'second')|day_format('HH : mm : < ss >')"/>
    <code-title title="开头时间" sub-title="返回当前时间的开头时间的 Dayjs 对象，如月份的第一天"/>
    <code-and-result label="value|day_startof('year')|day_format" :value="value|day_startof('year')|day_format"/>
    <code-and-result label="value|day_startof('month')|day_format" :value="value|day_startof('month')|day_format"/>
    <code-and-result label="value|day_startof('date')|day_format" :value="value|day_startof('date')|day_format"/>
    <code-and-result label="value|day_startof('hour')|day_format" :value="value|day_startof('hour')|day_format"/>
    <code-and-result label="value|day_startof('minute')|day_format" :value="value|day_startof('minute')|day_format"/>
    <code-title title="末尾时间" sub-title="返回当前时间的末尾时间的 Dayjs 对象，如月份的最后一天"/>
    <code-and-result label="value|day_endof('year')|day_format" :value="value|day_endof('year')|day_format"/>
    <code-and-result label="value|day_endof('month')|day_format" :value="value|day_endof('month')|day_format"/>
    <code-and-result label="value|day_endof('date')|day_format" :value="value|day_endof('date')|day_format"/>
    <code-and-result label="value|day_endof('hour')|day_format" :value="value|day_endof('hour')|day_format"/>
    <code-and-result label="value|day_endof('minute')|day_format" :value="value|day_endof('minute')|day_format"/>
    <code-title title="显示" sub-title="格式化 Dayjs 对象并展示"/>
    <code-and-result label="value|day_format" :value="value|day_format"/>
    <code-and-result label="value|day_format('YY-MM-DD')" :value="value|day_format('YY-MM-DD')"/>
    <code-and-result label="value|day_format('YYYY-M-D')" :value="value|day_format('YYYY-M-D')"/>
    <code-and-result label="value|day_format('YYYY-M-D H:m:s')" :value="value|day_format('YYYY-M-D H:m:s')"/>
    <code-title title="时间差" sub-title="获取两个 Dayjs 对象的时间差，默认毫秒"/>
    <code-and-result label="value|day_diff('2012-10-31', 'year')" :value="value|day_diff('2012-10-31', 'year')"/>
    <code-and-result label="value|day_diff('2012-10-31', 'month')" :value="value|day_diff('2012-10-31', 'month')"/>
    <code-and-result label="value|day_diff('2012-10-31', 'day')" :value="value|day_diff('2012-10-31', 'day')"/>
    <code-and-result label="value|day_diff('2012-10-31', 'hour')" :value="value|day_diff('2012-10-31', 'hour')"/>
    <code-and-result label="value|day_diff('2012-10-31', 'minute')" :value="value|day_diff('2012-10-31', 'minute')"/>
    <code-and-result label="value|day_diff('2012-10-31', 'second')" :value="value|day_diff('2012-10-31', 'second')"/>
    <code-title title="Unix 时间戳" sub-title="返回毫秒和秒"/>
    <code-and-result label="value|day_value_millisecond" :value="value|day_value_millisecond"/>
    <code-and-result label="value|day_value_second" :value="value|day_value_second"/>
    <code-title title="月份天数" sub-title="返回传入日期月份的天数"/>
    <code-and-result label="value|day_days_in_month" :value="value|day_days_in_month"/>
    <code-title title="处理为其它格式" sub-title="原生的 Date 对象，数组，json，ios 标准，对象，字符串"/>
    <code-and-result label="value|day_to_date" :value="value|day_to_date"/>
    <code-and-result label="value|day_to_array" :value="value|day_to_array"/>
    <code-and-result label="value|day_to_json" :value="value|day_to_json"/>
    <code-and-result label="value|day_to_iso" :value="value|day_to_iso"/>
    <code-and-result label="value|day_to_object" :value="value|day_to_object"/>
    <code-and-result label="value|day_to_string" :value="value|day_to_string"/>
    <code-title title="查询" sub-title="是否之前，之后，或者相同"/>
    <code-and-result label="value|day_is_before('2020-1-1')" :value="value|day_is_before('2020-1-1')"/>
    <code-and-result label="value|day_is_after('2012-1-1')" :value="value|day_is_after('2012-1-1')"/>
    <code-and-result label="value|day_is_same(new Date())" :value="value|day_is_same(new Date())"/>
    <code-and-result label="value|day_is_same(new Date(), 'date')" :value="value|day_is_same(new Date(), 'date')"/>
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
      value: new Date()
    }
  }
}
</script>
