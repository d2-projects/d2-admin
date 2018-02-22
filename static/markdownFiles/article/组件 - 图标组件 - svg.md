## 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| name | 图标名称 | 非 | String | font-awesome 所有图标名 | font-awesome |

## 使用方法

基本

```
// 这样用没有毛病 但是也没什么用
<Icon></Icon>

// 指定图标名称
<Icon name="github"></Icon>

// 设置行内样式
<Icon name="github" style="font-size: 100px;"></Icon>

// 设置 class
<Icon name="github" class="icon-class-demo"></Icon>
```

这个组件只是简化了写法而已

```
<Icon name="github"></Icon>
// 等同于
<i class="fa fa-github" aria-hidden="true"></i>
```

## 参考

演示图表来源 [http://iconfont.cn/ @小啊小二饼 《2.5D工作日记》](http://iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=8219)