export default `<template>
  <div>
    <d2-crud
      :columns="columns"
      :data="data"
      :options="options"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          title: 'ID',
          key: 'id'
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '数值 1',
          key: 'amount1'
        },
        {
          title: '数值 2',
          key: 'amount2'
        },
        {
          title: '数值 3',
          key: 'amount3'
        }
      ],
      data: [
        {
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        },
        {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        },
        {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        },
        {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        },
        {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }
      ],
      options: {
        showSummary: true,
        summaryMethod (param) {
          const { columns, data } = param
          const sums = []
          columns.forEach((column, index) => {
            if (index === 0) {
              sums[index] = '总价'
              return
            }
            const values = data.map(item => Number(item[column.property]))
            if (!values.every(value => isNaN(value))) {
              sums[index] = values.reduce((prev, curr) => {
                const value = Number(curr)
                if (!isNaN(value)) {
                  return prev + curr
                } else {
                  return prev
                }
              }, 0)
              sums[index] += ' 元'
            } else {
              sums[index] = 'N/A'
            }
          })

          return sums
        }
      }
    }
  }
}
</script>`
