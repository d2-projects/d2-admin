<template>
  <el-table
    :data="list"
    v-bind="table">
    <el-table-column
      prop="title"
      align="center"
      width="160"/>
    <el-table-column
      width="120"
      :label="$t('layout.header-aside.header-theme.list.column.label.preview')">
      <div
        slot-scope="scope"
        class="theme-preview"
        :style="{
          backgroundImage: `url(${$baseUrl}${scope.row.preview})`
        }">
      </div>
    </el-table-column>
    <el-table-column
      prop="address"
      align="center">
      <template slot-scope="scope">
        <el-button
          v-if="activeName === scope.row.name"
          type="success"
          icon="el-icon-check"
          round>
          {{ $t('layout.header-aside.header-theme.list.button.is-active') }}
        </el-button>
        <el-button
          v-else
          round
          @click="handleSelectTheme(scope.row.name)">
          {{ $t('layout.header-aside.header-theme.list.button.select') }}
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'd2-theme-list',
  data () {
    return {
      table: {
        showHeader: false,
        border: true
      }
    }
  },
  computed: {
    ...mapState('d2admin/theme', [
      'list',
      'activeName'
    ])
  },
  methods: {
    ...mapActions('d2admin/theme', [
      'set'
    ]),
    handleSelectTheme (name) {
      this.set(name)
    }
  }
}
</script>

<style lang="scss" scoped>
.theme-preview {
  height: 50px;
  width: 100px;
  border-radius: 4px;
  background-size: cover;
  border: 1px solid $color-border-1;
}
</style>
