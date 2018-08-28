<template>
  <div class="panel-search" flex="dir:top">
    <div class="panel-search__input-group" flex-box="0" flex="dir:top main:center cross:center">
      <el-autocomplete
        class="panel-search__input"
        ref="input"
        v-model="input"
        suffix-icon="el-icon-search"
        placeholder="搜索页面"
        :fetch-suggestions="querySearch"
        :trigger-on-focus="false"
        :clearable="true"
        @keydown.esc.native="handleEsc"
        @select="handleSelect">
        <d2-panel-search-item slot-scope="{ item }" :item="item"/>
      </el-autocomplete>
      <div class="panel-search__tip">
        您可以使用快捷键
        <span class="panel-search__key">
          {{hotkey.open}}
        </span>
        唤醒搜索面板，按
        <span class="panel-search__key">
          {{hotkey.close}}
        </span>
        关闭
      </div>
    </div>
    <div
      v-if="results.length > 0"
      class="panel-search__results-group"
      flex-box="1">
      <el-card>
        <div class="panel-search__results-group-inner">
          <d2-panel-search-item
            v-for="(item, index) in results"
            :key="index"
            :item="item"
            :hover-mode="true"
            @click.native="handleResultsGroupItemClick(item.path)"/>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import mixin from '../mixin/menu'
export default {
  mixins: [
    mixin
  ],
  components: {
    'd2-panel-search-item': () => import('./components/panel-search-item/index.vue')
  },
  data () {
    return {
      input: '',
      results: []
    }
  },
  computed: {
    ...mapState('d2admin/search', [
      'hotkey',
      'pool'
    ])
  },
  methods: {
    querySearch (queryString, callback) {
      var pool = this.pool
      const results = (queryString ? pool : []).filter(item => {
        const path = item.path || ''
        const fullTitle = item.fullTitle || ''
        return (`${fullTitle}${path}`.toLowerCase().indexOf(queryString.toLowerCase()) >= 0)
      }).map(e => ({
        value: e.fullTitle,
        ...e
      }))
      this.results = results
      callback(results)
    },
    focus () {
      this.input = ''
      setTimeout(() => {
        this.$refs.input.focus()
      }, 500)
    },
    // 接收用户在列表中选择项目的事件
    handleResultsGroupItemClick (path) {
      // 如果用户选择的就是当前页面 就直接关闭搜索面板
      if (path === this.$route.path) {
        this.handleEsc()
        return
      }
      // 用户选择的是其它页面
      this.handleMenuSelect(path)
    },
    // 接收用户在下拉菜单中选中事件
    handleSelect ({ path }) {
      // 如果用户选择的就是当前页面 就直接关闭搜索面板
      if (path === this.$route.path) {
        this.handleEsc()
        return
      }
      // 用户选择的是其它页面
      this.$nextTick(() => {
        this.handleMenuSelect(path)
      })
    },
    closeSuggestion () {
      if (this.$refs.input.activated) {
        this.$refs.input.suggestions = []
        this.$refs.input.activated = false
      }
    },
    handleEsc () {
      this.closeSuggestion()
      this.$nextTick(() => {
        this.$emit('close')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.panel-search {
  margin: 20px;
  .panel-search__input-group {
    height: 200px;
    .panel-search__input {
      width: 500px;
    }
    .panel-search__tip {
      @extend %unable-select;
      margin-top: 20px;
      font-size: 12px;
      color: $color-text-sub;
      .panel-search__key {
        padding: 1px 5px;
        margin: 0px 2px;
        border-radius: 2px;
        background-color: $color-text-normal;
        color: $color-bg;
      }
    }
  }
  .panel-search__results-group {
    overflow: auto;
    .panel-search__results-group-inner {
      margin: -20px;
    }
  }
}
</style>
