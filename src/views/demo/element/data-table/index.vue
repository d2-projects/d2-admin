<template>
  <d2-container type="ghost">
    <template slot="header">表格组件</template>
    <div class="d2-mt d2-mr">
      <el-card
        v-for="(table, index) in tableList"
        :key="index"
        shadow="never"
        class="d2-card d2-mb">
        <template slot="header">{{table.title}}</template>
        <component :is="table.component"/>
      </el-card>
    </div>
  </d2-container>
</template>

<script>
import { sortBy } from 'lodash'
const req = context => context.keys().map(context)
const tables = req(require.context('./components', true, /\.vue$/))
const components = {}
const tableList = []
sortBy(tables.map(e => ({
  component: e.default,
  index: e.default.index
})), ['index']).forEach((table, index) => {
  components[`d2-demo-el-table-${index + 1}`] = table.component
  tableList.push({
    title: table.component.title,
    component: `d2-demo-el-table-${index + 1}`
  })
})
export default {
  components,
  data () {
    return {
      tableList
    }
  }
}
</script>
