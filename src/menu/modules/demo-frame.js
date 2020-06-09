export default {
  path: '/demo/frame',
  title: '内嵌网页',
  icon: 'globe',
  children: (pre => [
    { path: `${pre}index`, title: 'Frame ', icon: 'home' },
    { path: `${pre}d2-doc`, title: 'D2Admin 中文文档', iconSvg: 'd2-admin' },
    { path: `${pre}html`, title: '静态 HTML', icon: 'code' },
    { path: `${pre}report`, title: '构建分析', icon: 'pie-chart' }
  ])('/demo/frame/')
}
