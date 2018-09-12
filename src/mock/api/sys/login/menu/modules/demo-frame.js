export default {
  path: 'demo/frame',
  name: 'demo-frame',
  meta: { title: '内嵌网页',
    icon: 'globe',
    aside: true },
  children: (pre => [
    { path: 'd2-doc', name: `${pre}d2-doc`, meta: { title: 'D2Admin 中文文档', iconSvg: 'd2-admin' } }
  ])('demo-frame-')
}
