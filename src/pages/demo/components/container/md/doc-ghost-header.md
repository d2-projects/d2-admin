## 隐形页面容器 带有头部

不显示任何背景色和边框，但是有一个和分页组件效果融合的头部，看起来更舒服一点

```
<d2-container type="ghost">
  <template slot="header">隐形页面容器头部</template>
  主体内容
</d2-container>
```

> 注意 如果设置了 header 插槽的内容，header 部分会自动具有 20px 的下外边距