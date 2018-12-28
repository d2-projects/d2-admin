export default {
  path: '/demo/d2-crud',
  title: 'D2 CRUD v2',
  iconSvg: 'd2-crud',
  children: (pre => [
    { path: `${pre}index`, title: 'D2 CRUD v2', icon: 'home' },
    {
      title: '基础功能',
      children: [
        { path: `${pre}demo1`, title: '基础表格' },
        { path: `${pre}demo27`, title: '加载状态' },
        { path: `${pre}demo28`, title: '自定义加载状态' },
        { path: `${pre}demo2`, title: '带斑马纹表格' },
        { path: `${pre}demo3`, title: '带边框表格' },
        { path: `${pre}demo4`, title: '带状态表格' },
        { path: `${pre}demo5`, title: '固定表头' },
        { path: `${pre}demo6`, title: '固定列' },
        { path: `${pre}demo7`, title: '流体高度' },
        { path: `${pre}demo8`, title: '多级表头' },
        { path: `${pre}demo9`, title: '单选' },
        { path: `${pre}demo10`, title: '多选' },
        { path: `${pre}demo11`, title: '排序' },
        { path: `${pre}demo12`, title: '筛选' },
        { path: `${pre}demo13`, title: '表尾合计行' },
        { path: `${pre}demo14`, title: '合并行' },
        { path: `${pre}demo15`, title: '合并列' },
        { path: `${pre}demo24`, title: '表格slot' }
      ]
    },
    {
      title: '数据操作',
      children: [
        { path: `${pre}demo29`, title: '分页' },
        { path: `${pre}demo16`, title: '新增数据' },
        { path: `${pre}demo17`, title: '修改数据' },
        { path: `${pre}demo18`, title: '删除数据' },
        { path: `${pre}demo19`, title: '自定义操作列' },
        { path: `${pre}demo20`, title: '表单组件渲染' },
        { path: `${pre}demo21`, title: '表单布局' },
        { path: `${pre}demo22`, title: '表单校验' },
        { path: `${pre}demo23`, title: '表格内编辑' },
        { path: `${pre}demo25`, title: '表格自定义组件' },
        { path: `${pre}demo30`, title: '表单事件监听' },
        { path: `${pre}demo26`, title: '表单自定义组件' },
        { path: `${pre}demo31`, title: 'CRUD事件' }
      ]
    }
  ])('/demo/d2-crud/')
}
