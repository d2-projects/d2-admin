<template>
  <d2-container type="full" class="page-demo-playground-theme">
    <template slot="header">主题</template>
    <el-table :data="themeList" v-bind="table">
      <el-table-column prop="name" align="center" width="260"/>
      <el-table-column label="预览" width="120">
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
    <template slot="footer">
      <el-button type="primary" size="small">当前激活主题 {{themeActive.name}}</el-button>
    </template>
  </d2-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
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
.page-demo-playground-theme {
  .theme-preview {
    height: 50px;
    width: 100px;
    border-radius: 4px;
    background-size: cover;
    border: 1px solid $color-border-1;
  }
}
</style>