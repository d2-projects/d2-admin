export default `<template>
  <div>
    <d2-crud
      :columns="columns"
      :data="data"/>
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
          width: '180',
          fixed: true
        },
        {
          title: '姓名',
          key: 'name',
          width: '180'
        },
        {
          title: '省份',
          key: 'province',
          width: '300'
        },
        {
          title: '市区',
          key: 'city',
          width: '300'
        },
        {
          title: '地址',
          key: 'address',
          width: '300'
        },
        {
          title: '邮编',
          key: 'zip',
          fixed: 'right'
        }
      ],
      data: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ]
    }
  }
}
</script>`
