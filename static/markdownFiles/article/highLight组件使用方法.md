`highLight` 组件已经全局注册，可以直接使用

组件内部使用 `Prism` 实现代码高亮

```
<Card>
  <p slot="title">示例1</p>
  <highLight :data="test1"></highLight>
</Card>
<br>
<Card>
  <p slot="title">示例2</p>
  <highLight :data="test2"></highLight>
</Card>
<br>
<Card>
  <p slot="title">示例3</p>
  <highLight :data="test3" :stringify="false"></highLight>
</Card>
```

数据源

```
data () {
  return {
    test1: [0, 1, 2, 3],
    test2: {
      name: 'me',
      like: [
        'like1',
        'like2'
      ],
      address: [
        'address1'
      ]
    },
    test3: '<Markdown url="/static/markdownFiles/article/highLight组件使用方法.md"></Markdown>'
  }
}
```