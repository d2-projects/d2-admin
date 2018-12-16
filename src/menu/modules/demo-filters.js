export default {
  path: '/demo/filters',
  title: '内置过滤器',
  icon: 'flask',
  children: (pre => [
    { path: `${pre}index`, title: '内置过滤器', icon: 'home' },
    { path: `${pre}day`, title: '日期和时间', icon: 'calendar' }
  ])('/demo/filters/')
}
