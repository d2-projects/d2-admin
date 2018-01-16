在 `src/mock/demo/001.js` 配置拦截返回的数据

```
import Mock from 'mockjs'

Mock.mock('/api/demo/001', {
  'list|4-10': [{
    'id|+1': 1,
    'name': '@CNAME',
    'star|1-5': '★',
    'delFlag|1': [0, 1],
    'creatDate': '@DATE',
    'address': '@CITY',
    'zip': '@ZIP'
  }]
})
```

请求数据

```
ajax () {
  this.$axios.get('/api/demo/001')
  .then(res => {
    this.table.columns = Object.keys(res.data.list[0]).map(e => ({
      label: e,
      prop: e
    }))
    this.table.data = res.data.list
  })
}
```



