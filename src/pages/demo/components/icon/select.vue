<template>
  <Container type="ghost">
    <el-card class="d2-mb">
      <PageHeader
        slot="header"
        title="图标选择器"
        url="https://github.com/FairyEver/d2admin-vue-element/blob/master/src/components/core/IconSelect/index.vue">
      </PageHeader>
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
      <IconSelect v-model="icon"></IconSelect>
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
      <IconSelect v-model="icon2" :user-input="true"></IconSelect>
    </el-card>
    <el-card>
      <Markdown url="/static/md/组件 - 图标选择器.md"></Markdown>
    </el-card>
  </Container>
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
