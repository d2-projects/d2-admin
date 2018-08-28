`D2 Crud` 组件提供了单选的支持，只需要在 `options` 对象中将 `highlightCurrentRow` 属性设为 `true` 即可实现单选。之后由 `current-change` 事件来管理选中时触发的事件，它会传入 `currentRow` 和 `oldCurrentRow`。如果需要显示索引，需要配置 `index-row` 属性。代码如下：
