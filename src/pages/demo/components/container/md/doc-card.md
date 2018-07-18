## 基础页面容器

高度根据内容适应

```
<d2-container type="card">
  主体内容
</d2-container>
```

使用 `slot`

```
<d2-container type="card">
  <template slot="header">我是插入到 header 中的内容</template>
  主体内容
</d2-container>
```