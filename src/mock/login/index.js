import Mock from 'mockjs'

const userDB = [
  {
    username: 'admin',
    password: 'admin',
    uuid: 'test-user-uuid',
    name: '管理员'
  }
]

Mock.mock('/login', 'post', ({url, type, body}) => {
  const bodyObj = JSON.parse(body)
  const user = userDB.find(e => e.username === bodyObj.username && e.password === bodyObj.password)
  if (user) {
    return {
      code: 0,
      msg: '登陆成功',
      data: {
        ...user,
        token: 'd787syv8dys8cas80d9s0a0d8f79ads56f7s4d56f879a8as89fd980s7dg'
      }
    }
  } else {
    return {
      code: 401,
      msg: '用户名或密码错误'
    }
  }
})
