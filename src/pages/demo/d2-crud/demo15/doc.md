通过给 `options` 传入 `spanMethod` 方法可以实现合并行，方法的参数是一个对象，里面包含当前行 `row` 、当前列 `column` 、当前行号 `rowIndex` 、当前列号 `columnIndex` 四个属性。该函数可以返回一个键名为 `rowspan` 和 `colspan` 的对象。代码如下：
