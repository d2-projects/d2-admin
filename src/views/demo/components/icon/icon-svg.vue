<template>
  <d2-container>
    <template slot="header">SVG图标组件</template>
    <el-row>
      <el-col class="icon-card" :span="4" v-for="(icon, index) in $IconSvg" :key="index">
        <d2-icon-svg class="icon" :name="icon"/>
        <div class="icon-title">
          <span>{{icon}}</span>
        </div>
      </el-col>
    </el-row>
  </d2-container>
</template>

<style lang="scss" scoped>
.icon-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 150px;
  &:hover {
    .icon {
      transform: scale(1.1);
    }
    .icon-title {
      color: $color-text-main;
    }
  }
}
.icon {
  height: 80px;
  width: 80px;
  transition: all .3s;
  cursor: pointer;
}
.icon-title {
  font-size: 12px;
  margin-top: 10px;
  color: $color-text-normal;
}
</style>
