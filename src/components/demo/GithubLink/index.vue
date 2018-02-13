<i18n src="./lang.json"></i18n>

<template>
  <el-tooltip :content="url" :placement="tooltipPlacement">
    <a :href="url" target="_blank" class="link">
      {{$t('label')}}
      <i class="fa fa-github"></i>
    </a>
  </el-tooltip>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: false,
      default: 'https://github.com/FairyEver'
    },
    tooltipPlacement: {
      type: String,
      required: false,
      default: 'top-end'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/unit/_color.scss';
.link {
  color: $color-primary;
}
</style>

