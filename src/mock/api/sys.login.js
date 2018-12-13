const userDB = [
  { username: 'admin', password: 'admin', uuid: 'admin-uuid', name: '管理员' },
  { username: 'editor', password: 'editor', uuid: 'editor-uuid', name: '编辑' },
  { username: 'user1', password: 'user1', uuid: 'user1-uuid', name: '用户1' }
]

export default [
  {
    path: '/api/login',
    method: 'post',
    handle ({ body }) {
      const user = userDB.find(e => e.username === body.username && e.password === body.password)
      if (user) {
        return {
          code: 0,
          msg: '登录成功',
          data: {
            ...user,
            token: '8dfhassad0asdjwoeiruty'
          }
        }
      } else {
        return {
          code: 401,
          msg: '用户名或密码错误',
          data: {}
        }
      }
    }
  }
]
