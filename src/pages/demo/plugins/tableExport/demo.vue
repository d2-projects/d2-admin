<template>
  <Container>
    <PageHeader
      slot="header"
      title="基本示例">
    </PageHeader>
    <el-table v-bind="table" style="width: 100%" class="dd-mb">
      <el-table-column
        v-for="(item, index) in table.columns"
        :key="index"
        :prop="item.prop"
        :label="item.label">
      </el-table-column>
    </el-table>
  </Container>
</template>

<script>
import table from './data'
export default {
  data () {
    return {
      table: {
        columns: table.columns,
        data: table.data,
        size: 'mini',
        stripe: true,
        border: true
      }
    }
  }
}
</script>
