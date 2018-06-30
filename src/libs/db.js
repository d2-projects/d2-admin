import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'

const adapter = new LocalStorage('d2admin')
const db = low(adapter)

db.defaults({
  themeActive: [],
  pageOpenedList: [],
  pageCacheList: []
})
  .write()

export default db
