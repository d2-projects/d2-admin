import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
import { version } from '../../package'

const adapter = new LocalStorage(`d2admin-${version}`)
const db = low(adapter)

// 初始化数据库
db.defaults({
  themeActiveName: [],
  pageOpenedList: [],
  userInfo: [],
  isMenuAsideCollapse: [],
  database: [],
  databasePublic: {}
}).write()

export default db
