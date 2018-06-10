<template>
  <d2-container type="ghost">
    <el-card class="d2-mb">
      <d2-demo-page-header slot="header" title="图标选择器"/>
      <div class="title-group">
        <p class="title">一般用法</p>
        <p class="sub-title">
          <template v-if="icon">
            选择的图标 {{icon}}
            <i :class="'fa fa-' + icon"></i>
          </template>
          <template v-else>未选择</template>
        </p>
      </div>
      <d2-icon-select v-model="icon"/>
      <div class="title-group">
        <p class="title">用户可以输入</p>
        <p class="sub-title">
          <template v-if="icon2">
            选择的图标 {{icon2}}
            <i :class="'fa fa-' + icon2"></i>
          </template>
          <template v-else>未选择</template>
        </p>
      </div>
      <d2-icon-select v-model="icon2" :user-input="true"/>
    </el-card>
    <el-card>
      <d2-markdown url="/static/md/组件 - 图标选择器.md"/>
    </el-card>
  </d2-container>
</template>

<script>
export default {
  data () {
    return {
      icon: '',
      icon2: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.title-group {
  margin-top: $margin;
  margin-bottom: $margin / 2;
  &:first-child {
    margin-top: 0px;
  }
  .title {
    margin: 0px;
  }
  .sub-title {
    margin: 0px;
    color: $color-text-sub;
    font-size: 10px;
  }
}
</style>
