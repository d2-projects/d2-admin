<template>
  <d2-container class="page">
    <d2-page-cover>
      <d2-icon-svg class="logo" name="d2-admin"/>
      <template slot="footer">
        <div class="btn-group">
          <span class="btn-group__btn" @click="$open('https://github.com/d2-projects')">
            {{ $t('views.system.index.page.link.text.d2-projects') }}
          </span> |
          <span class="btn-group__btn" @click="$open($t('views.system.index.page.link.href.doc'))">
            {{ $t('views.system.index.page.link.text.doc') }}
          </span> |
          <span class="btn-group__btn" @click="$open('https://github.com/d2-projects/d2-admin-start-kit')">
            {{ $t('views.system.index.page.link.text.start-kit') }}
          </span> |
          <span class="btn-group__btn" @click="$open('https://alibaba.github.io/ice/scaffold?type=vue')">
            {{ $t('views.system.index.page.link.text.ice') }}
          </span> |
          <span class="btn-group__btn" @click="$open('https://juejin.im/user/57a48b632e958a006691b946/posts')">
            {{ $t('views.system.index.page.link.text.juejin') }}
          </span> |
          <span class="btn-group__btn" @click="$open('https://daily.fairyever.com')">
            {{ $t('views.system.index.page.link.text.daily') }}
          </span> |
          <el-popover :width="172" trigger="hover">
            <p class="d2-mt-0 d2-mb-10">{{ $t('views.system.index.page.we.title') }}</p>
            <img src="./image/qr@2x.png" style="width: 172px;">
            <span slot="reference" class="btn-group__btn btn-group__btn--link">
              <d2-icon name="weixin"/>
              {{ $t('views.system.index.page.we.button') }}
            </span>
            <p style="font-size: 12px; margin-top: 0px; margin-bottom: 0px;">
              {{ $t('views.system.index.page.we.introduce') }}
            </p>
          </el-popover>
        </div>
        <d2-badge/>
        <d2-help/>
      </template>
    </d2-page-cover>
  </d2-container>
</template>

<script>
import D2Badge from './components/d2-badge'
import D2Help from './components/d2-help'
import D2PageCover from './components/d2-page-cover'
export default {
  components: {
    D2Badge,
    D2Help,
    D2PageCover
  },
  data () {
    return {
      filename: __filename
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  .logo {
    width: 120px;
  }
  .btn-group {
    color: $color-text-placehoder;
    font-size: 12px;
    line-height: 12px;
    margin-top: 0px;
    margin-bottom: 20px;
    .btn-group__btn {
      color: $color-text-sub;
      &:hover {
        color: $color-text-main;
      }
      &.btn-group__btn--link {
        color: $color-primary;
      }
    }
  }
}
</style>
