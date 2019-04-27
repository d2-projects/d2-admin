<template>
  <d2-container type="card">
    <template slot="header">按钮组</template>
    <v-contextmenu ref="contextmenu">
      <v-contextmenu-group>
        <v-contextmenu-item>菜单1</v-contextmenu-item>
        <v-contextmenu-item>菜单2</v-contextmenu-item>
        <v-contextmenu-item>菜单3</v-contextmenu-item>
      </v-contextmenu-group>
      <v-contextmenu-item divider></v-contextmenu-item>
      <v-contextmenu-group>
        <v-contextmenu-item><d2-icon class="contextmenu-icon" name="github"/></v-contextmenu-item>
        <v-contextmenu-item><d2-icon class="contextmenu-icon" name="qq"/></v-contextmenu-item>
        <v-contextmenu-item><d2-icon class="contextmenu-icon" name="weixin"/></v-contextmenu-item>
        <v-contextmenu-item><d2-icon class="contextmenu-icon" name="google-plus"/></v-contextmenu-item>
      </v-contextmenu-group>
      <v-contextmenu-item divider></v-contextmenu-item>
      <v-contextmenu-item>菜单4</v-contextmenu-item>
      <v-contextmenu-item>菜单5</v-contextmenu-item>
    </v-contextmenu>
    <div class="contextmenu-pad" v-contextmenu:contextmenu>
      右键点击此区域
    </div>
  </d2-container>
</template>

<script>
export default {
  data () {
    return {
      filename: __filename
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style/pub.scss';
</style>
