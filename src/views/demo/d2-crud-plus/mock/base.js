function copyList (originList, newList, options, parentId) {
  for (const item of originList) {
    const newItem = { ...item, parentId }
    newItem.id = ++options.idGenerator
    newList.push(newItem)
    if (item.children != null) {
      newItem.children = []
      copyList(item.children, newItem.children, options, newItem.id)
    }
  }
}

function delById (req, list) {
  for (let i = 0; i < list.length; i++) {
    const item = list[i]
    if ((item.id) === parseInt(req.params.id)) {
      console.log('remove i')
      list.splice(i, 1)
      break
    }
    if (item.children != null && item.children.length > 0) {
      delById(req, item.children)
    }
  }
}
export default {
  findById (id, list) {
    for (const item of list) {
      if (item.id === id) {
        return item
      }
      if (item.children != null && item.children.length > 0) {
        const sub = this.findById(id, item.children)
        if (sub != null) {
          return sub
        }
      }
    }
  },
  buildMock (options) {
    const name = options.name
    if (options.copyTimes == null) {
      options.copyTimes = 29
    }
    const list = []
    for (let i = 0; i < options.copyTimes; i++) {
      copyList(options.list, list, options)
    }
    options.list = list
    return [
      {
        path: '/' + name + '/page',
        method: 'get',
        handle (req) {
          let data = list
          let size = 20
          let current = 1
          for (const item of list) {
            if (item.children != null && item.children.length === 0) {
              item.hasChildren = false
              item.lazy = false
            }
          }
          if (req != null && req.body != null) {
            if (req.body.size != null) {
              size = parseInt(req.body.size)
            }
            if (req.body.current != null) {
              current = parseInt(req.body.current)
            }
            const query = { ...req.body }
            delete query.current
            delete query.size
            if (Object.keys(query).length > 0) {
              data = list.filter(item => {
                let allFound = true // 是否所有条件都符合
                for (const key in query) {
                  // 判定某一个条件
                  const value = query[key]
                  if (value == null || value === '') {
                    continue
                  }
                  if (value instanceof Array) {
                    // 如果条件中的value是数组的话，只要查到一个就行
                    if (value.length === 0) {
                      continue
                    }
                    let found = false
                    for (const i of value) {
                      if (item[key] instanceof Array) {
                        for (const j of item[key]) {
                          if (i === j) {
                            found = true
                            break
                          }
                        }
                        if (found) {
                          break
                        }
                      } else if (item[key] === i || ((typeof item[key]) === 'string' && item[key].indexOf(i + '') >= 0)) {
                        found = true
                        break
                      }
                      if (found) {
                        break
                      }
                    }
                    if (!found) {
                      allFound = false
                    }
                  } else if (value instanceof Object) {
                    for (const key2 in value) {
                      const v = value[key2]
                      if (v && v !== item[key][key2]) {
                        return false
                      }
                    }
                  } else if (item[key] !== value) {
                    allFound = false
                  }
                }
                return allFound
              })
            }
          }

          const start = size * (current - 1)
          let end = size * current
          if (data.length < end) {
            end = data.length
          }
          const records = data.slice(start, end)
          const maxPage = data.length % size === 0 ? data.length / size : Math.floor(data.length / size) + 1
          if (current > maxPage) {
            current = maxPage
          }
          if (current < 1) {
            current = 1
          }
          return {
            code: 0,
            msg: 'success',
            data: {
              records: records,
              total: data.length,
              size: size,
              current: current
            }
          }
        }
      },
      {
        path: '/' + name + '/get',
        method: 'get',
        handle (req) {
          let id = req.params.id
          id = parseInt(id)
          let current = null
          for (const item of list) {
            if (item.id === id) {
              current = item
              break
            }
          }
          return {
            code: 0,
            msg: 'success',
            data: current
          }
        }
      },
      {
        path: '/' + name + '/add',
        method: 'post',
        handle (req) {
          req.body.id = ++options.idGenerator
          list.unshift(req.body)
          return {
            code: 0,
            msg: 'success',
            data: null
          }
        }
      },
      {
        path: '/' + name + '/update',
        method: 'post',
        handle (req) {
          for (const item of list) {
            if (item.id === req.body.id) {
              Object.assign(item, req.body)
              break
            }
          }
          return {
            code: 0,
            msg: 'success',
            data: null
          }
        }
      },
      {
        path: '/' + name + '/delete',
        method: 'post',
        handle (req) {
          delById(req, list)
          return {
            code: 0,
            msg: 'success',
            data: null
          }
        }
      },
      {
        path: '/' + name + '/batchDelete',
        method: 'post',
        handle (req) {
          const ids = req.body.ids
          for (let i = list.length - 1; i >= 0; i--) {
            const item = list[i]
            if (ids.indexOf(item.id) >= 0) {
              list.splice(i, 1)
            }
          }
          return {
            code: 0,
            msg: 'success',
            data: null
          }
        }
      }
    ]
  }
}
