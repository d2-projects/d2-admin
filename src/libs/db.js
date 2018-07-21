import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
import { version } from '../../package'

const adapter = new LocalStorage(`d2admin-${version}`)
const db = low(adapter)

db.defaults({
  themeActiveName: [],
  pageOpenedList: [],
  userInfo: []
})
  .write()

export default db
