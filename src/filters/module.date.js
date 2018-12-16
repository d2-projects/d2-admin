// 日期时间相关 filter
// https://github.com/iamkun/dayjs/blob/master/docs/zh-cn/API-reference.md

import dayjs from 'dayjs'

// 对象代理
const P = Day => {
  return new Proxy(Day, {
    get (target, key) {
      if (dayjs.isDayjs(target)) {
        // 是 Dayjs 对象，正常返回
        return target[key]
      } else {
        // 不是 Dayjs 对象
        if (dayjs(target).isValid()) {
          // 尝试帮用户解析成 Dayjs 对象
          return dayjs(target)[key]
        } else {
          // 无法解析
          return function () {
            return '无效日期'
          }
        }
      }
    },
    set (target, key, value) {
      target[key] = value
    }
  })
}

const filters = {
  // ---------- [ dayjs 解析 ] ----------
  // 时间字符串 | Date 对象 | Unix 时间戳 (毫秒)
  day: value => dayjs(value),
  // Unix 时间戳 (秒)
  day_unix: value => dayjs.unix(value),
  // ---------- [ 获取 ] ----------
  day_year: Day => P(Day).year(),
  day_month: Day => P(Day).month(),
  day_date: Day => P(Day).date(),
  day_day: Day => P(Day).day(),
  day_hour: Day => P(Day).hour(),
  day_minute: Day => P(Day).minute(),
  day_second: Day => P(Day).second(),
  day_millisecond: Day => P(Day).millisecond(),
  // ---------- [ 设置 ] ----------
  // date | day | month | year | hour | minute | second | millisecond
  // 对大小写不敏感
  day_set: (Day, unit, value) => P(Day).set(unit, value),
  // ---------- [ 操作 ] ----------
  // 增加
  day_add: (Day, value, unit) => P(Day).add(value, unit),
  // 减少
  day_subtract: (Day, value, unit) => P(Day).subtract(value, unit),
  // 开头时间
  day_startof: (Day, unit) => P(Day).startOf(unit),
  // 末尾时间
  day_endof: (Day, unit) => P(Day).endOf(unit),
  // ---------- [ 显示 ] ----------
  // 格式化
  day_format: (Day, setting = 'YYYY-MM-DD HH:mm:ss') => P(Day).format(setting),
  // 时间差
  day_diff: (Day, Day2 = '', unit = 'millisecond', accurate = false) => P(Day).diff(dayjs(Day2), unit, accurate),
  // Unix 时间戳 (毫秒)
  day_value_millisecond: Day => P(Day).valueOf(),
  // Unix 时间戳 (秒)
  day_value_second: Day => P(Day).unix(),
  // 月份的天数
  day_days_in_month: Day => P(Day).daysInMonth(),
  // Date 对象
  day_to_date: Day => P(Day).toDate(),
  // 数组
  day_to_array: Day => P(Day).toArray(),
  // JSON
  day_to_json: Day => P(Day).toJSON(),
  // ISO8601 格式
  day_to_iso: Day => P(Day).toISOString(),
  // 对象
  day_to_object: Day => P(Day).toObject(),
  // 字符
  day_to_string: Day => P(Day).toString(),
  // ---------- [ 查询 ] ----------
  // 是否之前
  day_is_before: (Day, Day2, unit = 'millisecond') => P(Day).isBefore(dayjs(Day2), unit),
  // 是否之后
  day_is_after: (Day, Day2, unit = 'millisecond') => P(Day).isAfter(dayjs(Day2), unit),
  // 是否相同
  day_is_same: (Day, Day2, unit = 'millisecond') => P(Day).isSame(dayjs(Day2), unit)
}

export default {
  install: function (Vue) {
    Object.keys(filters).forEach(name => {
      Vue.filter(name, filters[name])
    })
  }
}
