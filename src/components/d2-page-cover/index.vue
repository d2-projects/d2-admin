<template>
  <div class="d2-page-cover">
    <div class="d2-page-cover__logo">
      <slot/>
    </div>
    <p class="d2-page-cover__title">D2 Admin {{$version}}</p>
    <p class="d2-page-cover__sub-title">优雅的中后台集成方案</p>
    <p class="d2-page-cover__build-time">FINAL BUILD TIME {{$buildTime}}</p>
    <slot name="footer"/>
    <a target="blank" href="https://github.com/d2-projects/d2-admin">
      <img
        style="position: absolute; top: 0; right: 0; border: 0; width: 150px;"
        src="./image/darkblue@2x.png"
        alt="Fork me on GitHub">
    </a>
    <div class="d2-mt" id="codefund"></div>
  </div>
</template>

<script>
export default {
  mounted () {
    // 在指定环境加载 codefund 广告代码，这是 D2Admin 的一项开源收入支撑，广告只会在官方 Travis 构建和 Netlify 构建时显示，您可以删除掉这部分代码
    if (process.env.VUE_APP_CODEFUND) {
      let s = document.createElement('script')
      s.type = 'text/javascript'
      s.src = 'https://codefund.app/properties/284/funder.js'
      document.getElementsByTagName('head')[0].appendChild(s)
    }
  }
}
</script>

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
    color: $color-text-main;
  }
  .d2-page-cover__sub-title {
    margin: 0px;
    margin-bottom: 5px;
    color: $color-text-normal;
  }
  .d2-page-cover__build-time {
    margin: 0px;
    margin-bottom: 10px;
    font-size: 12px;
    color: $color-text-placehoder;
  }
}
</style>
