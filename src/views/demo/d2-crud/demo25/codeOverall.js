export default `<template>
  <div>
    <d2-crud
      ref="d2Crud"
      :columns="columns"
      :data="data"
      @d2-data-change="handleDataChange"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          title: '日期',
          key: 'date',
          width: '180'
        },
        {
          title: '姓名',
          key: 'name',
          width: '180'
        },
        {
          title: '地址',
          key: 'address'
        },
        {
          title: '检查状态（点击可修改）',
          key: 'check',
          component: {
            name: 'my-tag',
            props: {
              myProps: '我是通过props传过来的数据！'
            }
          }
        }
      ],
      data: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          check: true
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          check: false
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          check: true
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          check: true
        }
      ]
    }
  },
  methods: {
    handleDataChange (data) {
      console.log(data)
    }
  }
}
</script>`
