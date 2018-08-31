export default {
  path: '/demo/frame',
  title: '内嵌网页',
  icon: 'globe',
  children: (pre => [
    { path: `${pre}d2-doc`, title: 'D2Admin 中文文档', iconSvg: 'd2-admin' }
  ])('/demo/frame/')
}
