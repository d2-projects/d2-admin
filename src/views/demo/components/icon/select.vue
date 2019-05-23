<template>
  <d2-container>
    <template slot="header">图标选择器</template>
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
.title-group {
  margin-top: 20px;
  margin-bottom: 10px;
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
