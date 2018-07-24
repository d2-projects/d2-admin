import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
import { version } from '../../package'

const adapter = new LocalStorage(`d2admin-${version}`)
const db = low(adapter)

console.group('db')
console.log(`db.get('themeActiveName').value()`, db.get('themeActiveName').value())
console.log(`db.get('pageOpenedList').value()`, db.get('pageOpenedList').value())
console.log(`db.get('userInfo').value()`, db.get('userInfo').value())
console.groupEnd()

// 初始化数据库
db.defaults({
  themeActiveName: [],
  pageOpenedList: [],
  userInfo: [],
  isMenuAsideCollapse: [],
  database: []
}).write()

export default db
