<template>
  <div class="d2-page-cover">
    <div class="d2-page-cover__logo">
      <slot/>
    </div>
    <p class="d2-page-cover__title">{{ $t('views.system.index.cover.title') }} {{$version}}</p>
    <p class="d2-page-cover__sub-title">{{ $t('views.system.index.cover.sub-title') }}</p>
    <p class="d2-page-cover__build-time">{{ $t('views.system.index.cover.build-time') }} {{$buildTime}}</p>
    <slot name="footer"/>
    <a target="blank" href="https://github.com/d2-projects/d2-admin">
      <img
        style="position: absolute; top: 0; right: 0; border: 0; width: 150px;"
        src="./image/darkblue@2x.png"
        :alt="$t('views.system.index.cover.github-fork-alt')">
    </a>
  </div>
</template>

<style lang="scss" scoped>
.d2-page-cover {
  @extend %full;
  @extend %unable-select;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  .d2-page-cover__logo {
    img {
      width: 200px;
    }
  }
  .d2-page-cover__title {
    margin: 0px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    color: $color-text-main;
  }
  .d2-page-cover__sub-title {
    margin: 0px;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 14px;
    color: $color-text-normal;
  }
  .d2-page-cover__build-time {
    margin: 0px;
    margin-bottom: 10px;
    font-size: 12px;
    line-height: 12px;
    color: $color-text-placehoder;
  }
}
</style>
