<template>
  <d2-container type="card" class="page">
    <template slot="header">主题</template>
    <el-table :data="list" v-bind="table">
      <el-table-column prop="name" align="center" width="260"/>
      <el-table-column label="预览" width="120">
        <div
          slot-scope="scope"
          class="theme-preview"
          :style="{'backgroundImage': `url(${$baseUrl}${scope.row.preview})`}">
        </div>
      </el-table-column>
      <el-table-column prop="address" align="center">
        <template slot-scope="scope">
          <el-button v-if="activeName === scope.row.name" type="success" icon="el-icon-check" round>已激活</el-button>
          <el-button v-else round @click="handleSelectTheme(scope.row.name)">使用</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <p>尝试激活一个不存在的主题（主题不存在 <d2-icon name="arrow-right"/> 默认主题）</p>
      <el-button type="danger" @click="handleSelectTheme('err-theme')">
        <d2-icon name="hand-o-right" class="d2-mr-10"/>
        尝试激活主题 'err-theme'
      </el-button>
    </div>
    <el-button
      slot="footer"
      type="primary"
      size="small">
      当前激活主题 {{activeName}}
    </el-button>
  </d2-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
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
.page {
  .theme-preview {
    height: 50px;
    width: 100px;
    border-radius: 4px;
    background-size: cover;
    border: 1px solid $color-border-1;
  }
}
</style>
