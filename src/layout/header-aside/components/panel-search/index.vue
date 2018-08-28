<template>
  <div class="panel-search">
    <div class="panel-search__input-group" flex="main:center cross:center">
      <el-input
        class="panel-search__input"
        ref="input"
        v-model="input"
        suffix-icon="el-icon-search"
        placeholder="搜索页面"/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: ''
    }
  },
  methods: {
    focus () {
      this.$nextTick(() => {
        this.$refs.input.focus()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-search {
  margin: 20px;
  .panel-search__input-group {
    height: 200px;
    .panel-search__input {
      width: 300px;
    }
  }
}
</style>
