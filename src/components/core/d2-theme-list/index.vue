<template>
  <el-table :data="themeList" v-bind="table">
    <el-table-column prop="name" align="center" width="160"/>
    <el-table-column label="预览" width="220">
      <div
        slot-scope="scope"
        class="theme-preview"
        :style="{'backgroundImage': `url(${$assetsPublicPath}${scope.row.preview})`}">
      </div>
    </el-table-column>
    <el-table-column prop="address" align="center">
      <template slot-scope="scope">
        <el-button v-if="themeActive.value === scope.row.value" type="success" icon="el-icon-check" round>已激活</el-button>
        <el-button v-else round @click="handleSelectTheme(scope.row.value)">使用</el-button>
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
      themeList: state => state.d2admin.themeList,
      themeActive: state => state.d2admin.themeActive
    })
  },
  methods: {
    ...mapMutations([
      'd2adminThemeSet'
    ]),
    handleSelectTheme (value) {
      this.d2adminThemeSet(value)
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
