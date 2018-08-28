<template>
  <div class="panel-search">
    <div class="panel-search__input-group" flex="dir:top main:center cross:center">
      <el-input
        class="panel-search__input"
        ref="input"
        v-model="input"
        suffix-icon="el-icon-search"
        placeholder="搜索页面"
        @keydown.esc.native="handleEsc"/>
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
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      input: ''
    }
  },
  computed: {
    ...mapState('d2admin/search', [
      'hotkey'
    ])
  },
  methods: {
    focus () {
      this.$nextTick(() => {
        this.input = ''
        this.$refs.input.focus()
      })
    },
    handleEsc () {
      this.$emit('close')
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
      width: 300px;
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
}
</style>
