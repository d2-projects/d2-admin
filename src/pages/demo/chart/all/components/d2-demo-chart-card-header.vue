<template>
  <div>
    {{title}}
    <span class="d2-fr">
      <d2-icon
        class="chart-card-header-icon"
        :class="{active}"
        name="refresh"
        @click.native="handleRefresh">
      </d2-icon>
    </span>
  </div>
</template>

<script>
export default {
  name: 'd2-demo-chart-card-header',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    handleRefresh () {
      this.active = true
      setTimeout(() => {
        this.active = false
      }, 1000)
      this.$emit('refresh')
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/public.scss';
.chart-card-header-icon {
  color: $color-text-sub;
  transition: all .3s;
  &.active {
    transform: rotate(360deg);
  }
}
</style>

