export default {
  path: '/demo/playground',
  title: '功能',
  icon: 'flask',
  children: [
    { path: '/demo/playground/index', title: '功能', icon: 'home' },
    {
      title: 'svg 菜单图标',
      iconSvg: 'd2-admin',
      children: [
        { title: 'add', iconSvg: 'add' },
        { title: 'alarm', iconSvg: 'alarm' },
        { title: 'camera', iconSvg: 'camera' },
        { title: 'history', iconSvg: 'history' },
        { title: 'like', iconSvg: 'like' },
        { title: 'love', iconSvg: 'love' },
        { title: 'message', iconSvg: 'message' },
        { title: 'notice', iconSvg: 'notice' },
        { title: 'search', iconSvg: 'search' },
        { title: 'share', iconSvg: 'share' },
        { title: 'star', iconSvg: 'star' },
        { title: 'user', iconSvg: 'user' }
      ]
    },
    {
      title: '空菜单演示',
      icon: 'folder-o',
      children: [
        {
          title: '正在开发 1',
          children: [
            { title: '正在开发 1-1' },
            { title: '正在开发 1-2' }
          ]
        },
        { title: '正在开发 2' },
        { title: '正在开发 3' }
      ]
    },
    {
      path: '/demo/playground/frame',
      title: '内嵌网页',
      icon: 'globe',
      children: [
        { path: '/demo/playground/frame/d2-doc', title: 'D2Admin 中文文档', iconSvg: 'd2-admin' },
        { path: '/demo/playground/frame/html', title: '静态 HTML', icon: 'code' },
        { path: '/demo/playground/frame/report', title: '构建分析', icon: 'pie-chart' }
      ]
    },
    {
      title: '新窗口打开链接',
      icon: 'link',
      children: [
        { path: 'https://github.com/d2-projects/d2-admin', title: 'D2Admin Github', icon: 'github' },
        { path: 'https://juejin.im/user/57a48b632e958a006691b946/posts', title: '掘金', icon: 'globe' },
        { path: 'https://my.oschina.net/u/3871516', title: '开源中国', icon: 'globe' },
        { path: 'https://www.zhihu.com/people/fairy-ever/activities', title: '知乎', icon: 'globe' },
        { path: 'https://segmentfault.com/blog/liyang-note-book', title: 'segmentfault 专栏', icon: 'globe' },
        { path: 'http://www.fairyever.com/', title: 'www.fairyever.com', icon: 'globe' }
      ]
    },
    {
      path: '/demo/playground/store',
      title: '全局状态管理',
      icon: 'bolt',
      children: [
        { path: '/demo/playground/store/page', title: '多标签页控制', icon: 'window-restore' },
        { path: '/demo/playground/store/menu', title: '菜单控制', icon: 'bars' },
        { path: '/demo/playground/store/size', title: '全局尺寸', icon: 'font' },
        { path: '/demo/playground/store/ua', title: '浏览器信息', icon: 'info-circle' },
        { path: '/demo/playground/store/gray', title: '灰度模式', icon: 'eye' },
        { path: '/demo/playground/store/fullscreen', title: '全屏', icon: 'arrows-alt' },
        { path: '/demo/playground/store/theme', title: '主题', icon: 'diamond' },
        { path: '/demo/playground/store/transition', title: '页面过渡开关', icon: 'toggle-on' }
      ]
    },
    {
      path: '/demo/playground/page-cache',
      title: '页面缓存',
      icon: 'hdd-o',
      children: [
        { path: '/demo/playground/page-cache/on', title: '开启缓存' },
        { path: '/demo/playground/page-cache/off', title: '关闭缓存' },
        { path: '/demo/playground/page-cache/params/1', title: '带参路由缓存 1' },
        { path: '/demo/playground/page-cache/params/2', title: '带参路由缓存 2' }
      ]
    },
    {
      path: '/demo/playground/page-argu',
      title: '参数传递和留存',
      icon: 'assistive-listening-systems',
      children: [
        { path: '/demo/playground/page-argu/send', title: '发送' },
        { path: '/demo/playground/page-argu/get/username-from-menu?userid=userid-from-menu', title: '接收' }
      ]
    },
    {
      path: '/demo/playground/db',
      title: '数据持久化',
      icon: 'database',
      children: [
        { path: '/demo/playground/db/all', title: '总览', icon: 'table' },
        { path: '/demo/playground/db/public', title: '公共存储', icon: 'users' },
        { path: '/demo/playground/db/user', title: '私有数据', icon: 'user' },
        { path: '/demo/playground/db/page-public', title: '路由存储', icon: 'file-o' },
        { path: '/demo/playground/db/page-user', title: '私有路由存储', icon: 'file-o' },
        { path: '/demo/playground/db/page-snapshot-public', title: '路由快照', icon: 'file' },
        { path: '/demo/playground/db/page-snapshot-user', title: '私有路由快照', icon: 'file' }
      ]
    },
    {
      path: '/demo/playground/log',
      title: '日志',
      icon: 'bullseye',
      children: [
        { path: '/demo/playground/log/log', title: '日志记录', icon: 'dot-circle-o' },
        { path: '/demo/playground/log/error', title: '错误捕捉', icon: 'bug' },
        { path: '/demo/playground/log/ajax', title: 'Ajax 错误', icon: 'bug' },
        { path: '/demo/playground/log/console', title: '控制台日志', icon: 'lightbulb-o' }
      ]
    },
    {
      path: '/demo/playground/add-routes',
      title: '动态添加路由',
      icon: 'plus-square',
      children: [
        { path: '/demo/playground/add-routes/routes', title: '添加页面', icon: 'file-o' }
      ]
    },
    { path: '/demo/playground/env', title: '环境信息', icon: 'exclamation-circle' },
    { path: '/demo/playground/locales', title: '国际化', icon: 'language' }
  ]
}
