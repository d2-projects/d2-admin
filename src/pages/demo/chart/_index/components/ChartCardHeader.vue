<template>
  <div>
    {{title}}
    <span class="dd-fr">
      <Icon
        class="chart-card-header-icon"
        :class="{active}"
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

