export default {
  path: '/user',
  title: '用户相关',
  icon: 'user',
  children: (pre => [
    { path: `${pre}chat`, title: '聊天', icon: 'slack' },
    { path: `${pre}new-user`, title: '新注册用户', icon: 'child' },
    { path: `${pre}renew-user`, title: '重置测试号', icon: 'refresh' }
  ])('/user/')
}
