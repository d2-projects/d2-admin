<template>
  <div>
    {{title}}
    <span class="dd-fr">
      <el-tooltip effect="dark" content="刷新数据" placement="top">
        <Icon class="chart-card-header-icon" name="refresh"></Icon>
      </el-tooltip>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/public.scss';
.chart-card-header-icon {
  color: $color-text-sub;
}
</style>

