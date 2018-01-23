import Mock from 'mockjs'

const userDB = [
  {
    username: 'admin',
    password: 'admin'
  },
  {
    username: 'FairyEver',
    password: '000000'
  },
  {
    username: 'user1',
    password: '111111'
  },
  {
    username: 'user2',
    password: '222222'
  }
]

Mock.mock('/login', 'post', ({url, type, body}) => {
  const bodyObj = JSON.parse(body)
  const user = userDB.find(e => e.username === bodyObj.username && e.password === bodyObj.password)
  if (user) {
    return {
      code: 0,
      msg: '登陆成功'
    }
  } else {
    return {
      code: 500,
      msg: '用户名或密码错误'
    }
  }
})
