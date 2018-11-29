<template>
  <d2-container :filename="filename" type="card">
    <d2-crud
      v-bind="crud"
      @edit="({ index, row }) => goToEditPage('demo-business-issues-142-edit', row.id)"
      @edit-cache-db="({ index, row }) => goToEditPage('demo-business-issues-142-edit-cache-db', row.id)"
      style="margin: -15px 0;"/>
    <template slot="footer">
      <d2-link-btn
        title="issue #142"
        link="https://github.com/d2-projects/d2-admin/issues/142"/>
    </template>
  </d2-container>
</template>

<script>
export default {
  data () {
    return {
      filename: __filename,
      crud: {
        columns: [
          { title: '姓名', key: 'name' },
          { title: '地址', key: 'address' }
        ],
        data: [
          { id: '1', name: '王小虎1', address: '上海市普陀区金沙江路 1518 弄' },
          { id: '2', name: '王小虎2', address: '上海市普陀区金沙江路 1517 弄' },
          { id: '3', name: '王小虎3', address: '上海市普陀区金沙江路 1519 弄' },
          { id: '4', name: '王小虎4', address: '上海市普陀区金沙江路 1516 弄' }
        ],
        options: {
          border: true,
          size: 'mini'
        },
        rowHandle: {
          align: 'center',
          custom: [
            {
              text: '无缓存编辑',
              size: 'mini',
              emit: 'edit'
            },
            {
              text: '带缓存编辑 DB',
              size: 'mini',
              emit: 'edit-cache-db'
            }
          ]
        }
      }
    }
  },
  methods: {
    goToEditPage (name, id) {
      this.$router.push({
        name,
        params: {
          id
        }
      })
    }
  }
}
</script>
