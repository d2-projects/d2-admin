<template>
  <el-row :gutter="10">
    <el-col :span="8">
      <el-card class="dd-mb">
        <div class="title-group">
          <p class="title">一般用法</p>
          <p class="sub-title">
            icon = {{icon || '未选择'}}
            <i v-if="icon" :class="'fa fa-' + icon"></i>
          </p>
        </div>
        <IconSelect v-model="icon"></IconSelect>
        <div class="title-group">
          <p class="title">不可以清空</p>
          <p class="sub-title">
            icon2 = {{icon2 || '未选择'}}
            <i v-if="icon2" :class="'fa fa-' + icon2"></i>
          </p>
        </div>
        <IconSelect v-model="icon2" :clearable="false"></IconSelect>
        <div class="title-group">
          <p class="title">不自动关闭</p>
          <p class="sub-title">
            icon3 = {{icon3 || '未选择'}}
            <i v-if="icon3" :class="'fa fa-' + icon3"></i>
          </p>
        </div>
        <IconSelect v-model="icon3" :auto-close="false"></IconSelect>
        <div class="title-group">
          <p class="title">用户可以输入</p>
          <p class="sub-title">
            icon4 = {{icon4 || '未选择'}}
            <i v-if="icon4" :class="'fa fa-' + icon4"></i>
          </p>
        </div>
        <IconSelect v-model="icon4" :user-input="true"></IconSelect>
      </el-card>
    </el-col>
    <el-col :span="16">
      <el-card>
        <Markdown url="/static/markdownFiles/article/图标选择组件使用方法.md"></Markdown>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      icon: '',
      icon2: '',
      icon3: '',
      icon4: ''
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
