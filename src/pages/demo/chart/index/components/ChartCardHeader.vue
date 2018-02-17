<template>
  <div>
    {{title}}
    <span class="dd-fr">
      <Icon
        class="chart-card-header-icon"
        name="refresh"
        @click.native="handleRefresh">
      </Icon>
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
  },
  methods: {
    handleRefresh () {
      this.$emit('refresh')
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

