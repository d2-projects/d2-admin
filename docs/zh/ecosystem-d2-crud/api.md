---
sidebarDepth: 2
---

# API

## 配置

### data

* 说明: 显示的数据
* 类型: array
* 可选值: 无
* 默认值: 无

### columns

* 说明: 表头数据，具体配置项请参考 [columns](#配置-columns)
* 类型: array
* 可选值: 无
* 默认值: 无

### options

* 说明: 表格配置数据，具体配置项请参考 [options](#配置-options)
* 类型: Object
* 可选值: 无
* 默认值: 无

### title

* 说明: 表格标题
* 类型: String
* 可选值: 无
* 默认值: 无

### index-row

* 说明: 索引，具体配置项请参考 [index-row](#配置-index-row)
* 类型: Object / Boolean
* 可选值: 无
* 默认值: false

### selection-row

* 说明: 多选，具体配置项请参考 [selection-row](#配置-selection-row)
* 类型: Object / Boolean
* 可选值: 无
* 默认值: false

### add-mode

* 说明: 新增模式
* 类型: Boolean
* 可选值: 无
* 默认值: false

### add-button

* 说明: 新增按钮配置，具体配置请参考 [add-button](#配置-add-button)
* 类型: Object
* 可选值: 无
* 默认值: 无

### form-template

* 说明: 表单数据模板，具体配置请参考 [form-template](#配置-form-template)
* 类型: Object
* 可选值: 无
* 默认值: 无

### form-options

* 说明: 表单配置数据，具体配置请参考 [form-options](#配置-form-options)
* 类型: Object
* 可选值: 无
* 默认值: 无

### form-rules

* 说明: 表单校验，具体校验规则请参考 [async-validator](https://github.com/yiminghe/async-validator)
* 类型: Object
* 可选值: 无
* 默认值: 无


## 事件

### select

* 说明: 当用户手动勾选数据行的 Checkbox 时触发的事件
* 参数: selection, row

### select-all

* 说明: 当用户手动勾选全选 Checkbox 时触发的事件
* 参数: selection

### selection-change

* 说明: 当选择项发生变化时会触发该事件
* 参数: selection

### current-change

* 说明: 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开 options 中的 highlight-current-row 属性
* 参数: currentRow, oldCurrentRow

### cell-mouse-enter

* 说明: 当单元格 hover 进入时会触发该事件
* 参数: row, column, cell, event

### cell-mouse-leave

* 说明: 当单元格 hover 退出时会触发该事件
* 参数: row, column, cell, event

### cell-click

* 说明: 当某个单元格被点击时会触发该事件
* 参数: row, column, cell, event

### cell-dblclick

* 说明: 当某个单元格被双击击时会触发该事件
* 参数: row, column, cell, event

### row-click

* 说明: 当某一行被点击时会触发该事件
* 参数: row, event, column

### row-contextmenu

* 说明: 当某一行被鼠标右键点击时会触发该事件
* 参数: row, event

### row-dblclick

* 说明: 当某一行被双击时会触发该事件
* 参数: row, event

### header-click

* 说明: 当某一列的表头被点击时会触发该事件
* 参数: column, event

### header-contextmenu

* 说明: 当某一列的表头被鼠标右键点击时触发该事件
* 参数: column, event

### sort-change

* 说明: 当表格的排序条件发生变化的时候会触发该事件
* 参数: { column, prop, order }

### filter-change

* 说明: 当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。
* 参数: filters

### row-add

* 说明: 当表格新增数据的时候会触发该事件
* 参数: row, done

### row-edit

* 说明: 当表格修改数据的时候会触发该事件
* 参数: index, row, done

### dialog-cancel

* 说明: 当表格取消新增或修改数据的时候会触发该事件
* 参数: done

### row-remove

* 说明: 当表格删除数据的时候会触发该事件
* 参数: index, row, done

## 插槽

### headerButton

* 说明: 表格头部按钮

## 配置: columns

### title

* 说明: 表格列名
* 类型: String
* 可选值: 无
* 默认值: 无

### key

* 说明: data 中对应列的键名
* 类型: String
* 可选值: 无
* 默认值: 无

### width

* 说明: 对应列的宽度
* 类型: String
* 可选值: 无
* 默认值: 无

### minWidth

* 说明: 对应列的最小宽度，与 width 的区别是 width 是固定的，minWidth 会把剩余宽度按比例分配给设置了 minWidth 的列
* 类型: String
* 可选值: 无
* 默认值: 无

### fixed

* 说明: 列是否固定在左侧或者右侧，true 表示固定在左侧
* 类型: String / Boolean
* 可选值: true / left / right
* 默认值: 无

### renderHeader

* 说明: 列标题 Label 区域渲染使用的 Function
* 类型: function (h, { column, $index })
* 可选值: 无
* 默认值: 无

### sortable

* 说明: 对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件
* 类型: Boolean / String
* 可选值: true, false, 'custom'
* 默认值: false

### sortMethod

* 说明: 对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致
* 类型: function (a, b)
* 可选值: 无
* 默认值: 无

### sortBy

* 说明: 指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推
* 类型: String / array / function (row, index)
* 可选值: 无
* 默认值: 无

### sortOrders

* 说明: 数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序
* 类型: array
* 可选值: 数组中的元素需为以下三者之一：ascending 表示升序，descending 表示降序，null 表示还原为原始顺序
* 默认值: ['ascending', 'descending', null]

### resizable

* 说明: 对应列是否可以通过拖动改变宽度（需要在 `options` 中设置 border 属性为 true
* 类型: Boolean
* 可选值: 无
* 默认值: true

### showOverflowTooltip

* 说明: 当内容过长被隐藏时显示 tooltip
* 类型: Boolean
* 可选值: 无
* 默认值: false

### align

* 说明: 对齐方式
* 类型: String
* 可选值: left / center / right
* 默认值: left

### headerAlign

* 说明: 表头对齐方式，若不设置该项，则使用表格的对齐方式
* 类型: String
* 可选值: left / center / right
* 默认值: 无

### className

* 说明: 列的 className
* 类型: String
* 可选值: 无
* 默认值: 无

### labelClassName

* 说明: 当前列标题的自定义类名
* 类型: String
* 可选值: 无
* 默认值: 无

### filters

* 说明: 数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。
* 类型: array[{ text, value }]
* 可选值: 无
* 默认值: 无

### filterPlacement

* 说明: 过滤弹出框的定位
* 类型: String
* 可选值: top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end
* 默认值: bottom

### filterMultiple

* 说明: 数据过滤的选项是否多选
* 类型: Boolean
* 可选值: 无
* 默认值: true

### filterMethod

* 说明: 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。
* 类型: function (value, row, column)
* 可选值: 无
* 默认值: 无

### filteredValue

* 说明: 选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。
* 类型: array
* 可选值: 无
* 默认值: 无

## 配置: options

### height

* 说明: 表格的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 String 类型，则这个高度会设置为表格的 style.height 的值，表格的高度会受控于外部样式。
* 类型: String / number
* 可选值: 无
* 默认值: 无

### maxHeight

* 说明: 表格的最大高度
* 类型: String / number
* 可选值: 无
* 默认值: 无

### stripe

* 说明: 是否为斑马纹模式
* 类型: Boolean
* 可选值: 无
* 默认值: false

### border

* 说明: 是否带有纵向边框
* 类型: Boolean
* 可选值: 无
* 默认值: false

### size

* 说明: 表格的尺寸
* 类型: String
* 可选值: medium / small / mini
* 默认值: 无

### fit

* 说明: 列的宽度是否自撑开
* 类型: Boolean
* 可选值: 无
* 默认值: true

### showHeader

* 说明: 是否显示表头
* 类型: Boolean
* 可选值: 无
* 默认值: true

### highlightCurrentRow

* 说明: 是否要高亮当前行
* 类型: Boolean
* 可选值: 无
* 默认值: false

### currentRowKey

* 说明: 当前行的 key，只写属性
* 类型: String / number
* 可选值: 无
* 默认值: 无

### rowClassName

* 说明: 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。
* 类型: function ({row, rowIndex}) / String
* 可选值: 无
* 默认值: 无

### rowStyle

* 说明: 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。
* 类型: function ({row, rowIndex}) / Object
* 可选值: 无
* 默认值: 无

### cellClassName

* 说明: 单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。
* 类型: function ({row, column, rowIndex, columnIndex}) / String
* 可选值: 无
* 默认值: 无

### cellStyle

* 说明: 单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。
* 类型: function ({row, column, rowIndex, columnIndex}) / Object
* 可选值: 无
* 默认值: 无

### headerRowClassName

* 说明: 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。
* 类型: function ({row, rowIndex}) / String
* 可选值: 无
* 默认值: 无

### headerRowStyle

* 说明: 表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。
* 类型: function ({row, rowIndex}) / Object
* 可选值: 无
* 默认值: 无

### headerCellClassName

* 说明: 表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。
* 类型: function ({row, column, rowIndex, columnIndex}) / String
* 可选值: 无
* 默认值: 无

### headerCellStyle

* 说明: 表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。
* 类型: function ({row, column, rowIndex, columnIndex}) / Object
* 可选值: 无
* 默认值: 无

### rowKey

* 说明: 行数据的 Key，用来优化表格的渲染；在使用 reserveSelection 功能的情况下，该属性是必填的。类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 function。
* 类型: function (row) / String
* 可选值: 无
* 默认值: 无

### emptyText

* 说明: 空数据时显示的文本内容
* 类型: String
* 可选值: 无
* 默认值: 无

### defaultSort

* 说明: 默认的排序列的 prop 和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序
* 类型: Object
* 可选值: order: ascending / descending
* 默认值: 如果只指定了 prop, 没有指定order, 则默认顺序是 ascending

### tooltipEffect

* 说明: tooltip effect 属性
* 类型: String
* 可选值: dark / light
* 默认值: 无

### showSummary

* 说明: 是否在表尾显示合计行
* 类型: Boolean
* 可选值: 无
* 默认值: false

### sumText

* 说明: 合计行第一列的文本
* 类型: String
* 可选值: 无
* 默认值: 合计

### summaryMethod

* 说明: 自定义的合计计算方法
* 类型: function ({ columns, data })
* 可选值: 无
* 默认值: 无

### spanMethod

* 说明: 合并行或列的计算方法
* 类型: function ({ row, column, rowIndex, columnIndex })
* 可选值: 无
* 默认值: 无

### selectOnIndeterminate

* 说明: 在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行
* 类型: Boolean
* 可选值: 无
* 默认值: true

## 配置: index-row

### title

* 说明: indexRow 列名
* 类型: String
* 可选值: 无
* 默认值: 无

### width

* 说明: indexRow 宽度
* 类型: String
* 可选值: 无
* 默认值: 无

### minWidth

* 说明: indexRow 最小宽度，与 width 的区别是 width 是固定的，minWidth 会把剩余宽度按比例分配给设置了 minWidth 的列
* 类型: String
* 可选值: 无
* 默认值: 无

### fixed

* 说明: indexRow 是否固定在左侧或者右侧，true 表示固定在左侧
* 类型: String / Boolean
* 可选值: true / left / right
* 默认值: 无

### renderHeader

* 说明: indexRow 标题 Label 区域渲染使用的 Function
* 类型: function (h, { column, $index })
* 可选值: 无
* 默认值: 无

### resizable

* 说明: indexRow 是否可以通过拖动改变宽度（需要在 options 中设置 border 属性为 true
* 类型: Boolean
* 可选值: 无
* 默认值: true

### align

* 说明: 对齐方式
* 类型: String
* 可选值: left / center / right
* 默认值: left

### headerAlign

* 说明: 表头对齐方式，若不设置该项，则使用表格的对齐方式
* 类型: String
* 可选值: left / center / right
* 默认值: 无

### className

* 说明: indexRow 的 className
* 类型: String
* 可选值: 无
* 默认值: 无

### labelClassName

* 说明: indexRow 标题的自定义类名
* 类型: String
* 可选值: 无
* 默认值: 无

## 配置: selection-row

### title

* 说明: selectionRow列名
* 类型: String
* 可选值: 无
* 默认值: 无

### width

* 说明: selectionRow宽度
* 类型: String
* 可选值: 无
* 默认值: 无

### minWidth

* 说明: selectionRow 最小宽度，与 width 的区别是 width 是固定的，minWidth 会把剩余宽度按比例分配给设置了 minWidth 的列
* 类型: String
* 可选值: 无
* 默认值: 无

### fixed

* 说明: selectionRow 是否固定在左侧或者右侧，true 表示固定在左侧
* 类型: String / Boolean
* 可选值: true / left / right
* 默认值: 无

### renderHeader

* 说明: selectionRow 标题 Label 区域渲染使用的 Function
* 类型: function (h, { column, $index })
* 可选值: 无
* 默认值: 无

### resizable

* 说明: selectionRow 是否可以通过拖动改变宽度（需要在 options 中设置 border 属性为 true
* 类型: fBoolean
* 可选值: 无
* 默认值: true

### align

* 说明: 对齐方式
* 类型: String
* 可选值: left / center / right
* 默认值: left

### headerAlign

* 说明: 表头对齐方式，若不设置该项，则使用表格的对齐方式
* 类型: String
* 可选值: left / center / right
* 默认值: 无

### className

* 说明: selectionRow 的 className
* 类型: String
* 可选值: 无
* 默认值: 无

### labelClassName

* 说明: selectionRow 标题的自定义类名
* 类型: String
* 可选值: 无
* 默认值: 无

## 配置: row-handle

### columnHeader

* 说明: 操作列表头文字
* 类型: String
* 可选值: 无
* 默认值: 操作

### width

* 说明: 操作列宽度
* 类型: String
* 可选值: 无
* 默认值: 无

### minWidth

* 说明: 操作列最小宽度
* 类型: String
* 可选值: 无
* 默认值: 无

### fixed

* 说明: 操作列固定列
* 类型: String / Boolean
* 可选值: true / left / right
* 默认值: 无

### align

* 说明: 操作列对齐方式
* 类型: String
* 可选值: left / center / right
* 默认值: left

### renderHeader

* 说明: 操作列 Label 区域渲染使用的 Function
* 类型: function (h, { column, $index })
* 可选值: 无
* 默认值: 无

### edit

* 说明: 编辑模式
* 类型: Object
* 可选值: 无
* 默认值: 无

### edit.text

* 说明: 编辑按钮文字
* 类型: Object
* 可选值: 无
* 默认值: 无

### edit.size

* 说明: 编辑按钮尺寸
* 类型: String
* 可选值: medium / small / mini
* 默认值: 无

### edit.type

* 说明: 编辑按钮类型
* 类型: String
* 可选值: primary / success / warning / danger / info / text
* 默认值: 无

### edit.icon

* 说明: 编辑按钮图标类名
* 类型: String
* 可选值: 无
* 默认值: 无

### remove

* 说明: 删除模式
* 类型: Object
* 可选值: 无
* 默认值: 无

### remove.text

* 说明: 删除按钮文字
* 类型: Object
* 可选值: 无
* 默认值: 无

### remove.size

* 说明: 删除按钮尺寸
* 类型: String
* 可选值: medium / small / mini
* 默认值: 无

### remove.type

* 说明: 删除按钮类型
* 类型: String
* 可选值: primary / success / warning / danger / info / text
* 默认值: 无

### remove.icon

* 说明: 删除按钮图标类名
* 类型: String
* 可选值: 无
* 默认值: 无

### custom

* 说明: 自定义按钮
* 类型: Object
* 可选值: 无
* 默认值: 无

### custom.emit

* 说明: 自定义按钮监听的事件
* 类型: String
* 可选值: 无
* 默认值: 无

### custom.text

* 说明: 自定义按钮文字
* 类型: Object
* 可选值: 无
* 默认值: 无

### custom.size

* 说明: 自定义按钮尺寸
* 类型: String
* 可选值: medium / small / mini
* 默认值: 无

### custom.type

* 说明: 自定义按钮类型
* 类型: String
* 可选值: primary / success / warning / danger / info / text
* 默认值: 无

### custom.icon

* 说明: 自定义按钮图标类名
* 类型: String
* 可选值: 无
* 默认值: 无

## 配置: add-button

### size

* 说明: 尺寸
* 类型: String
* 可选值: medium / small / mini
* 默认值: 无

### type

* 说明: 类型
* 类型: String
* 可选值: primary / success / warning / danger / info / text
* 默认值: 无

### plain

* 说明: 是否朴素按钮
* 类型: Boolean
* 可选值: 无
* 默认值: false

### round

* 说明: 是否圆角按钮
* 类型: Boolean
* 可选值: 无
* 默认值: false

### circle

* 说明: 是否圆形按钮
* 类型: Boolean
* 可选值: 无
* 默认值: false

### loading

* 说明: 是否加载中状态
* 类型: Boolean
* 可选值: 无
* 默认值: false

### disabled

* 说明: 是否禁用状态
* 类型: Boolean
* 可选值: 无
* 默认值: false

### icon

* 说明: 图标类名
* 类型: String
* 可选值: 无
* 默认值: 无

## 配置: form-template

### title

* 说明: 表单 label 的名称
* 类型: String
* 可选值: 无
* 默认值: 无

### value

* 说明: 表单模板的默认值
* 类型: 无
* 可选值: 无
* 默认值: 无

### component.name

* 说明: 表单渲染的组件名，组件请参考 [组件](http://element-cn.eleme.io/#/zh-CN/component)
* 类型: String
* 可选值: el-input / el-input-number / el-radio / el-checkbox / el-select / el-cascader / el-switch / el-slider / el-time-select / el-time-picker / el-date-picker / el-rate / el-color-picker
* 默认值: 无

### component.span

* 说明: 表单布局所占栅格数，栅格布局请参考 [Layout 布局](http://element-cn.eleme.io/#/zh-CN/component/layout)
* 类型: number
* 可选值: 无
* 默认值: 无

### component.offset

* 说明: 表单栅格布局偏移量，栅格布局请参考 [Layout 布局](http://element-cn.eleme.io/#/zh-CN/component/layout)
* 类型: number
* 可选值: 无
* 默认值: 无

### component.options

* 说明: el-radio / el-checkbox / el-select 中的 options
* 类型: array
* 可选值: 无
* 默认值: 无

### component.render

* 说明: 使用render函数创建组件
* 类型: function (h)
* 可选值: 无
* 默认值: 无

## 配置: form-options

### labelWidth

* 说明: 表单 label 宽度
* 类型: String
* 可选值: 无
* 默认值: 无

### labelPosition

* 说明: 表单 label 位置
* 类型: String
* 可选值: 无
* 默认值: 无

### saveButtonSize

* 说明: 保存按钮尺寸
* 类型: String
* 可选值: medium / small / mini
* 默认值: 无

### saveButtonType

* 说明: 保存按钮类型
* 类型: String
* 可选值: primary / success / warning / danger / info / text
* 默认值: 无

### saveButtonIcon

* 说明: 保存按钮图标类名
* 类型: String
* 可选值: 无
* 默认值: 无

### saveLoading

* 说明: 保存按钮是否加载中状态
* 类型: Boolean
* 可选值: 无
* 默认值: false

### gutter

* 说明: 表单栅格间隔
* 类型: number
* 可选值: 无
* 默认值: 0