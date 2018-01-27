import Mock from 'mockjs'

const userDB = [
  {
    username: 'admin',
    password: 'admin',
    avatar: 'http://fairyever.qiniudn.com/d2-admin-user.jpg'
  },
  {
    username: 'user1',
    password: '111111',
    avatar: 'http://fairyever.qiniudn.com/d2-admin-user-2.jpg'
  },
  {
    username: 'user2',
    password: '222222',
    avatar: ''
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
        token: '1234567890'
      }
    }
  } else {
    return {
      code: 401,
      msg: '用户名或密码错误'
    }
  }
})
