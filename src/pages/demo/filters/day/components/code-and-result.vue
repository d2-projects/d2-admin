<template>
  <div class="d2-mb-10">
    <el-button-group>
      <el-button
        class="code-and-result--button"
        size="mini">
        原值
      </el-button>
    </el-button-group>
    <d2-icon name="plus" class="code-and-result--icon"/>
    <el-button-group>
      <el-button
        v-for="(label, index) in labelList"
        :key="index"
        class="code-and-result--button"
        size="mini"
        type="primary"
        @click="handleClip(label)">
        {{label}}
      </el-button>
    </el-button-group>
    <d2-icon name="arrow-right" class="code-and-result--icon"/>
    <span class="code-and-result--value">{{value}}</span>
  </div>
</template>

<script>
import * as clipboard from 'clipboard-polyfill'
export default {
  props: {
    label: {
      default: ''
    },
    value: {
      default: ''
    }
  },
  computed: {
    labelList () {
      return this.label.split('|')
    }
  },
  methods: {
    handleClip (value) {
      clipboard.writeText(value)
      this.$notify({
        title: '成功',
        message: `${value} 已经复制到剪贴板`,
        type: 'success'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.code-and-result--button {
  padding-left: 10px;
  padding-right: 10px;
}
.code-and-result--icon {
  color: $color-info;
  margin: 0px 20px;
}
.code-and-result--value {
  font-size: 14px;
  color: $color-text-main;
}
</style>
