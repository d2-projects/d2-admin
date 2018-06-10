<template>
  <div class="page-index-article-body">
    <div class="page-index-article-body__logo">
      <slot/>
    </div>
    <p class="page-index-article-body__title">{{title}}</p>
    <p class="page-index-article-body__sub-title d2-mt-0">{{subTitle}}</p>
    <a target="blank" href="https://github.com/FairyEver/d2admin-vue-element">
      <img
        style="position: absolute; top: 0; right: 0; border: 0;"
        src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"
        alt="Fork me on GitHub">
    </a>
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
.page-index-article-header {
  overflow: hidden;
  .page-index-article-header__title {
    display: inline-block;
    padding: 12px 20px;
  }
}
.page-index-article-body {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  .page-index-article-body__logo {
    img {
      width: 200px;
    }
  }
  .page-index-article-body__title {
    color: $color-text-main;
  }
  .page-index-article-body__sub-title {
    color: $color-text-sub;
  }
}
</style>
