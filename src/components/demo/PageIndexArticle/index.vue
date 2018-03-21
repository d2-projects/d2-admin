<template>
  <div class="page-index-body">
    <div class="page-index-body__logo">
      <slot></slot>
    </div>
    <p class="page-index-body__title">{{title}}</p>
    <p class="page-index-body__sub-title dd-mt-0">{{subTitle}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: 'Title'
    },
    subTitle: {
      type: String,
      required: false,
      default: 'subTitle'
    }
  }
}
</script>


<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.page-index-header {
  overflow: hidden;
  .page-index-header__title {
    display: inline-block;
    padding: 12px 20px;
  }
}
.page-index-body {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  .page-index-body__logo {
    img {
      width: 200px;
    }
  }
  .page-index-body__title {
    color: $color-text-main;
  }
  .page-index-body__sub-title {
    color: $color-text-sub;
  }
}
</style>
