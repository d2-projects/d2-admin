export default {
  path: '/demo/playground',
  title: '试验台',
  icon: 'flask',
  children: (pre => [
    { path: `${pre}index`, title: '试验台首页', icon: 'home' },
    {
      path: `${pre}page-cache`,
      title: '页面缓存',
      icon: 'hdd-o',
      children: [
        { path: `${pre}page-cache/on`, title: '开启缓存' },
        { path: `${pre}page-cache/off`, title: '关闭缓存' }
      ]
    },
    {
      path: `${pre}page-argu`,
      title: '参数传递和留存',
      icon: 'assistive-listening-systems',
      children: [
        { path: `${pre}page-argu/send`, title: '发送' },
        { path: `${pre}page-argu/get/username-from-menu?userid=userid-from-menu`, title: '接收' }
      ]
    },
    {
      path: `${pre}store`,
      title: '全局状态管理',
      icon: 'bolt',
      children: [
        { path: `${pre}store/sys`, title: '系统状态' }
      ]
    },
    { path: `${pre}theme`, title: '主题', icon: 'flask' },
    { path: `${pre}fullscreen`, title: '全屏', icon: 'arrows-alt' },
    { path: `${pre}gray`, title: '灰度模式', icon: 'eye' },
    { path: `${pre}db`, title: '数据持久化', icon: 'database' },
    { path: `${pre}env`, title: '环境信息', icon: 'microchip' },
    { path: `${pre}ua`, title: '浏览器信息', icon: 'info-circle' }
  ])('/demo/playground/')
}
