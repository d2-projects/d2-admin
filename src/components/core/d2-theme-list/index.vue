<template>
  <el-table :data="themeList" v-bind="table">
    <el-table-column prop="name" align="center" width="160"/>
    <el-table-column label="预览" width="220">
      <div slot-scope="scope" class="theme-preview" :style="{'backgroundImage': `url(${ scope.row.preview })`}"></div>
    </el-table-column>
    <el-table-column prop="address" align="center">
      <template slot-scope="scope">
        <el-button type="primary" @click="handleSelectTheme(scope.row.value)">使用</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
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
    ...mapState({
      themeList: state => state.theme.list,
      themeName: state => state.theme.name
    })
  },
  methods: {
    ...mapMutations([
      'setTheme'
    ]),
    handleSelectTheme (themeName) {
      this.setTheme(themeName)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.theme-preview {
  height: 100px;
  width: 200px;
  border-radius: 4px;
  background-size: cover;
  border: 1px solid $color-border-1;
}
</style>
