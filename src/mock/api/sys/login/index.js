import Mock from 'mockjs'
import util from '@/libs/util'
import menu from './menu'

const userDB = [
  {
    username: 'admin',
    password: 'admin',
    uuid: 'admin-uuid',
    name: '管理员',
    token: 'd787syv8dys8cas80d9s0a0d8f79ads56f7s4d56f879a8as89fd980s7dg'
  },
  {
    username: 'editor',
    password: 'editor',
    uuid: 'editor-uuid',
    name: '编辑',
    token: 'd787syv8dys8cas80d9s0a0d8f79ads56f7s4d56f879a8as89fd980s7df'
  },
  {
    username: 'user1',
    password: 'user1',
    uuid: 'user1-uuid',
    name: '用户1',
    token: 'd787syv8dys8cas80d9s0a0d8f79ads56f7s4d56f879a8as89fd980s7da'
  }
]

const permissionDB = {
  admin: ['create', 'search', 'edit', 'delete'],
  editor: ['create', 'search', 'edit'],
  user1: ['search']
}

Mock.mock('/api/login', 'post', ({ url, type, body }) => {
  const bodyObj = JSON.parse(body)
  const user = userDB.find(e => e.username === bodyObj.username && e.password === bodyObj.password)
  if (user) {
    return {
      code: 0,
      msg: '登录成功',
      data: user
    }
  } else {
    return {
      code: 401,
      msg: '用户名或密码错误',
      data: {}
    }
  }
})

Mock.mock(/\/api\/user\/info\.*/, ({ url, type, body }) => {
  const { token } = util.param2Obj(url)
  const user = userDB.find(e => e.token === token)
  if (user) {
    return {
      code: 0,
      msg: '获取用户信息成功',
      data: {
        info: user,
        permission: permissionDB[user.username],
        menu
      }
    }
  } else {
    return {
      code: 401,
      msg: '用户登录过期',
      data: {}
    }
  }
})
