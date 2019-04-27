<template>
  <d2-container type="card">
    <template slot="header">基础</template>
    <v-contextmenu ref="contextmenu">
      <v-contextmenu-item @click="handleClick">菜单1</v-contextmenu-item>
      <v-contextmenu-item @click="handleClick">菜单2</v-contextmenu-item>
      <v-contextmenu-item @click="handleClick">菜单3</v-contextmenu-item>
    </v-contextmenu>
    <div class="contextmenu-pad" v-contextmenu:contextmenu>
      右键点击此区域
    </div>
  </d2-container>
</template>

<script>
export default {
  methods: {
    handleClick (instance, event) {
      this.$message({
        message: `你点击了${instance.$slots.default[0].text}`,
        type: 'info'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style/pub.scss';
</style>
