import '@/views/demo/d2-crud-plus/install'
export default {
  path: '/demo/d2-crud-plus',
  title: 'D2 CRUD PLUS',
  iconSvg: 'd2-crud-plus',
  children: (pre => [
    { path: `${pre}index`, title: 'D2 CRUD PLUS', icon: 'home' },
    {
      title: '简单示例',
      path: `${pre}demo`
    },
    {
      title: '表单分组',
      path: `${pre}group`
    },
    {
      title: '综合示例',
      path: `${pre}synthesize`
    },
    {
      title: '更多示例',
      icon: 'link',
      path: 'http://qiniu.veryreader.com/D2CrudPlusExample/'
    },
    {
      title: '帮助文档',
      icon: 'link',
      path: 'http://greper.gitee.io/d2-crud-plus/'
    }

  ])('/demo/d2-crud-plus/')
}
