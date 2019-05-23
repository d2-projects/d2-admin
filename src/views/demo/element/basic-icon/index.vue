<template>
  <d2-container>
    <template slot="header">图标</template>
    <h1 class="d2-mt-0">
      d2admin 已经集成 FontAwesome 图表库，提供约 1,000 个图标；并且准备好了图标组件
    </h1>
    <p>如果你愿意，你还可以随意使用 SVG 图标</p>
    <el-button-group>
      <el-button @click="$router.push({ path: '/demo/components/icon/list' })">
        <d2-icon name="link"/>
        图标列表
      </el-button>
      <el-button @click="$router.push({ path: '/demo/components/icon/icon' })">
        <d2-icon name="link"/>
        图标组件
      </el-button>
      <el-button @click="$router.push({ path: '/demo/components/icon/svg' })">
        <d2-icon name="link"/>
        svg 图标组件
      </el-button>
    </el-button-group>
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
