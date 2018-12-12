import d2Mock from './d2-mock'

// 导入所有的接口
const req = context => context.keys().map(context)
const arr = req(require.context('./api/', true, /\.js$/))
  .filter(e => e.default)
  .map(e => e.default)

d2Mock.load(arr)
