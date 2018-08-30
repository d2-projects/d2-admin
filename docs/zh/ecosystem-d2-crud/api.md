# API

## 获取改变后的表格data数据
可以通过 `ref` 拿到表格实时数据，也可以通过监听 `@d2-data-change` 事件来获取表格中数据
``` vue
<template>
  <div>
    <d2-crud
      ref="d2Crud"
      :columns="columns"
      :data="data"
      @d2-data-change="handleD2DataChange"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [],
      data: []
    }
  },
  mounted () {
    console.log(this.$refs.d2Crud.d2Data) // 获取表格数据
  },
  methods: {
    handleD2DataChange (data) {
      console.log(data)
    }
  }
}
</script>
```

## 全局控制组件的默认尺寸
在 `main.js` 使用 `D2Crud` 时传入 `size` 即可（可选值：`medium` `small` `mini`）
``` js
Vue.use(d2Crud, { size: 'small' })
```

## D2 Crud 配置属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 显示的数据 | array | 无 | 无 |
| columns | 表头数据，具体配置项请参考[columns](./api.md#d2-crud-columns-配置属性) | array | 无 | 无 |
| options | 表格配置数据，具体配置项请参考[options](./api.md#d2-crud-options-配置属性) | object | 无 | 无 |
| title | 表格标题 | string | 无 | 无 |
| index-row | 索引，具体配置项请参考[index-row](./api.md#d2-crud-index-row-配置属性) | object/boolean | 无 | false |
| selection-row | 多选，具体配置项请参考[selection-row](./api.md#d2-crud-selection-row-配置属性) | object/boolean | 无 | false |
| add-mode | 新增模式 | boolean | 无 | false |
| add-button | 新增按钮配置，具体配置请参考[add-button](./api.md#d2-crud-add-button-配置属性) | object | 无 | 无 |
| form-template | 表单数据模板，具体配置请参考[form-template](./api.md#d2-crud-form-template-配置属性) | object | 无 | 无 |
| form-options | 表单配置数据，具体配置请参考[form-options](./api.md#d2-crud-form-options-配置属性) | object | 无 | 无 |
| form-rules | 表单校验，具体校验规则请参考[async-validator](https://github.com/yiminghe/async-validator) | object | 无 | 无 |

## D2 Crud 事件
| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| select | 当用户手动勾选数据行的 Checkbox 时触发的事件 | selection, row |
| select-all | 当用户手动勾选全选 Checkbox 时触发的事件 | selection |
| selection-change | 当选择项发生变化时会触发该事件 | selection |
| current-change | 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开options中的 highlight-current-row 属性 | currentRow, oldCurrentRow |
| cell-mouse-enter | 当单元格 hover 进入时会触发该事件 | row, column, cell, event |
| cell-mouse-leave | 当单元格 hover 退出时会触发该事件 | row, column, cell, event |
| cell-click | 当某个单元格被点击时会触发该事件 | row, column, cell, event |
| cell-dblclick | 当某个单元格被双击击时会触发该事件 | row, column, cell, event |
| row-click | 当某一行被点击时会触发该事件 | row, event, column |
| row-contextmenu | 当某一行被鼠标右键点击时会触发该事件 | row, event |
| row-dblclick | 当某一行被双击时会触发该事件 | row, event |
| header-click | 当某一列的表头被点击时会触发该事件 | column, event |
| header-contextmenu | 当某一列的表头被鼠标右键点击时触发该事件 | column, event |
| sort-change | 当表格的排序条件发生变化的时候会触发该事件 | { column, prop, order } |
| filter-change | 当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。 | filters |
| row-add | 当表格新增数据的时候会触发该事件 | row, done |
| row-edit | 当表格修改数据的时候会触发该事件 | index, row, done |
| dialog-cancel | 当表格取消新增或修改数据的时候会触发该事件 | done |
| row-remove | 当表格删除数据的时候会触发该事件 | index, row, done |

## D2 Crud 插槽
| name | 说明 |
| --- | --- |
| headerButton | 表格头部按钮 |

## D2 Crud `columns` 配置属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| title | 表格列名 | string | 无 | 无 |
| key | `data`中对应列的键名 | string | 无 | 无 |
| width | 对应列的宽度 | string | 无 | 无 |
| minWidth | 对应列的最小宽度，与 width 的区别是 width 是固定的，minWidth 会把剩余宽度按比例分配给设置了 minWidth 的列 | string | 无 | 无 |
| fixed | 列是否固定在左侧或者右侧，true 表示固定在左侧 | string/boolean | true/left/right | 无 |
| renderHeader | 列标题 Label 区域渲染使用的 Function | function(h, { column, $index }) | 无 | 无 |
| sortable | 对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件 | boolean/string | true, false, 'custom' | false |
| sortMethod | 对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致 | function(a, b) | 无 | 无 |
| sortBy | 指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推 | string/array/function(row, index) | 无 |
| sortOrders | 数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序 | array | 数组中的元素需为以下三者之一：ascending 表示升序，descending 表示降序，null 表示还原为原始顺序 | ['ascending', 'descending', null] |
| resizable | 对应列是否可以通过拖动改变宽度（需要在 `options` 中设置 border 属性为 true | boolean | 无 | true |
| showOverflowTooltip | 当内容过长被隐藏时显示 tooltip | boolean | 无 | false |
| align | 对齐方式 | string | left/center/right | left |
| headerAlign | 表头对齐方式，若不设置该项，则使用表格的对齐方式 | string | left/center/right | 无 |
| className | 列的 className | string | 无 | 无 |
| labelClassName | 当前列标题的自定义类名 | string | 无 | 无 |
| filters | 数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。 | array[{ text, value }] | 无 | 无 |
| filterPlacement | 过滤弹出框的定位 | string | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom |
| filterMultiple | 数据过滤的选项是否多选 | boolean | 无 | true |
| filterMethod | 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。 | function(value, row, column) | 无 | 无 |
| filteredValue | 选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。 | array | 无 | 无 |

## D2 Crud `options` 配置属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| height | 表格的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为表格的 style.height 的值，表格的高度会受控于外部样式。 | string/number | 无 | 无 |
| maxHeight | 表格的最大高度 | string/number | 无 | 无 |
| stripe | 是否为斑马纹模式 | boolean | 无 | false |
| border | 是否带有纵向边框 | boolean | 无 | false |
| size | 表格的尺寸 | string | medium/small/mini | 无 |
| fit | 列的宽度是否自撑开 | boolean | 无 | true |
| showHeader | 是否显示表头 | boolean | 无 | true |
| highlightCurrentRow | 是否要高亮当前行 | boolean | 无 | false |
| currentRowKey | 当前行的 key，只写属性 | string,number | 无 | 无 |
| rowClassName | 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。 | function({row, rowIndex})/String | 无 | 无 |
| rowStyle | 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。 | function({row, rowIndex})/object | 无 | 无 |
| cellClassName | 单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。 | function({row, column, rowIndex, columnIndex})/string | 无 | 无 |
| cellStyle | 单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。 | function({row, column, rowIndex, columnIndex})/object | 无 | 无 |
| headerRowClassName | 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。 | function({row, rowIndex})/string | 无 | 无 |
| headerRowStyle | 表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。 | function({row, rowIndex})/object | 无 | 无 |
| headerCellClassName | 表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。 | function({row, column, rowIndex, columnIndex})/string | 无 | 无 |
| headerCellStyle | 表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。 | function({row, column, rowIndex, columnIndex})/object | 无 | 无 |
| rowKey | 行数据的 Key，用来优化表格的渲染；在使用 reserveSelection 功能的情况下，该属性是必填的。类型为 string 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 function。 | function(row)/string | 无 | 无 |
| emptyText | 空数据时显示的文本内容 | string | 无 | 无 |
| defaultSort | 默认的排序列的 prop 和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序 | object | order: ascending, descending | 如果只指定了prop, 没有指定order, 则默认顺序是ascending |
| tooltipEffect | tooltip effect 属性 | string | dark/light | 无 |
| showSummary | 是否在表尾显示合计行 | boolean | 无 | false |
| sumText | 合计行第一列的文本 | string | 无 | 合计 |
| summaryMethod | 自定义的合计计算方法 | function({ columns, data }) | 无 | 无 |
| spanMethod | 合并行或列的计算方法 | function({ row, column, rowIndex, columnIndex }) | 无 | 无 |
| selectOnIndeterminate | 在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行 | boolean | 无 | true |

## D2 Crud `index-row` 配置属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| title | indexRow列名 | string | 无 | 无 |
| width | indexRow宽度 | string | 无 | 无 |
| minWidth | indexRow最小宽度，与 width 的区别是 width 是固定的，minWidth 会把剩余宽度按比例分配给设置了 minWidth 的列 | string | 无 | 无 |
| fixed | indexRow是否固定在左侧或者右侧，true 表示固定在左侧 | string/boolean | true, left, right | 无 |
| renderHeader | indexRow标题 Label 区域渲染使用的 Function | function(h, { column, $index }) | 无 | 无 |
| resizable | indexRow是否可以通过拖动改变宽度（需要在 options 中设置 border 属性为 true | fboolean | 无 | true |
| align | 对齐方式 | string | left/center/right | left |
| headerAlign | 表头对齐方式，若不设置该项，则使用表格的对齐方式 | string | left/center/right | 无 |
| className | indexRow的 className | string | 无 | 无 |
| labelClassName | indexRow标题的自定义类名 | string | 无 | 无 |

## D2 Crud `selection-row` 配置属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| title | selectionRow列名 | string | 无 | 无 |
| width | selectionRow宽度 | string | 无 | 无 |
| minWidth | selectionRow最小宽度，与 width 的区别是 width 是固定的，minWidth 会把剩余宽度按比例分配给设置了 minWidth 的列 | string | 无 | 无 |
| fixed | selectionRow是否固定在左侧或者右侧，true 表示固定在左侧 | string/boolean | true/left/right | 无 |
| renderHeader | selectionRow标题 Label 区域渲染使用的 Function | function(h, { column, $index }) | 无 | 无 |
| resizable | selectionRow是否可以通过拖动改变宽度（需要在 options 中设置 border 属性为 true | fboolean | 无 | true |
| align | 对齐方式 | string | left/center/right | left |
| headerAlign | 表头对齐方式，若不设置该项，则使用表格的对齐方式 | string | left/center/right | 无 |
| className | selectionRow的 className | string | 无 | 无 |
| labelClassName | selectionRow标题的自定义类名 | string | 无 | 无 |

## D2 Crud `row-handle` 配置属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| columnHeader | 操作列表头文字 | string | 无 | 操作 |
| width | 操作列宽度 | string | 无 | 无 |
| minWidth | 操作列最小宽度 | string | 无 | 无 |
| fixed | 操作列固定列 | string/boolean | true/left/right | 无 |
| align | 操作列对齐方式 | string | left/center/right | left |
| renderHeader | 操作列 Label 区域渲染使用的 Function | function(h, { column, $index }) | 无 | 无 |
| edit | 编辑模式 | object | 无 | 无 |
| edit.text | 编辑按钮文字 | object | 无 | 无 |
| edit.size | 编辑按钮尺寸 | string | medium / small / mini | 无 |
| edit.type | 编辑按钮类型 | string | primary / success / warning / danger / info / text | 无 |
| edit.icon | 编辑按钮图标类名 | string | 无 | 无 |
| remove | 删除模式 | object | 无 | 无 |
| remove.text | 删除按钮文字 | object | 无 | 无 |
| remove.size | 删除按钮尺寸 | string | medium / small / mini | 无 |
| remove.type | 删除按钮类型 | string | primary / success / warning / danger / info / text | 无 |
| remove.icon | 删除按钮图标类名 | string | 无 | 无 |
| custom | 自定义按钮 | object | 无 | 无 |
| custom.emit | 自定义按钮监听的事件 | string | 无 | 无 |
| custom.text | 自定义按钮文字 | object | 无 | 无 |
| custom.size | 自定义按钮尺寸 | string | medium / small / mini | 无 |
| custom.type | 自定义按钮类型 | string | primary / success / warning / danger / info / text | 无 |
| custom.icon | 自定义按钮图标类名 | string | 无 | 无 |

## D2 Crud `add-button` 配置属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| size | 尺寸 | string | medium / small / mini | 无 |
| type | 类型 | string | primary / success / warning / danger / info / text | 无 |
| plain | 是否朴素按钮 | boolean | 无 | false |
| round | 是否圆角按钮 | boolean | 无 | false |
| circle | 是否圆形按钮 | boolean | 无 | false |
| loading | 是否加载中状态 | boolean | 无 | false |
| disabled | 是否禁用状态 | boolean | 无 | false |
| icon | 图标类名 | string | 无 | 无 |

## D2 Crud `form-template` 配置属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| title | 表单 label 的名称 | string | 无 | 无 |
| value | 表单模板的默认值 | 无 | 无 | 无 |
| component.name | 表单渲染的组件名，组件样式及功能请参考 | string | `el-input` `el-input-number` `el-radio` `el-checkbox` `el-select` `el-cascader` `el-switch` `el-slider` `el-time-select` `el-time-picker` `el-date-picker` `el-rate` `el-color-picker` | 无 |
| component.span | 表单布局所占栅格数，栅格布局请参考 | number | 无 | 无 |
| component.offset | 表单布局偏移量 | number | 无 | 无 |
| component.options | `el-radio` `el-checkbox` `el-select` 中的options | array | 无 | 无 |
| component.render | 使用render函数创建组件 | function(h) | 无 | 无 |

## D2 Crud `form-options` 配置属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| labelWidth | 表单 label 宽度 | string | 无 | 无 |
| labelPosition | 表单 label 位置 | string | 无 | 无 |
| saveButtonSize | 保存按钮尺寸 | string | medium / small / mini | 无 |
| saveButtonType | 保存按钮类型 | string | primary / success / warning / danger / info / text | 无 |
| saveButtonIcon | 保存按钮图标类名 | string | 无 | 无 |
| saveLoading | 保存按钮是否加载中状态 | boolean | 无 | false |
| gutter | 表单栅格间隔 | number | 无 | 0 |
