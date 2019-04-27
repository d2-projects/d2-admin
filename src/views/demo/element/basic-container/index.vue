<template>
  <d2-container>

    <el-container class="d2-mb">
      <el-header>顶栏</el-header>
      <el-main>主体</el-main>
    </el-container>

    <el-container class="d2-mb">
      <el-header>顶栏</el-header>
      <el-main>主体</el-main>
      <el-footer>底栏</el-footer>
    </el-container>

    <el-container class="d2-mb">
      <el-aside width="200px">侧边栏</el-aside>
      <el-main>主体</el-main>
    </el-container>

    <el-container class="d2-mb">
      <el-header>顶栏</el-header>
      <el-container>
        <el-aside width="200px">侧边栏</el-aside>
        <el-main>主体</el-main>
      </el-container>
    </el-container>

    <el-container class="d2-mb">
      <el-header>顶栏</el-header>
      <el-container>
        <el-aside width="200px">侧边栏</el-aside>
        <el-container>
          <el-main>主体</el-main>
          <el-footer>底栏</el-footer>
        </el-container>
      </el-container>
    </el-container>

    <el-container class="d2-mb">
      <el-aside width="200px">侧边栏</el-aside>
      <el-container>
        <el-header>顶栏</el-header>
        <el-main>主体</el-main>
      </el-container>
    </el-container>

    <el-container>
      <el-aside width="200px">侧边栏</el-aside>
      <el-container>
        <el-header>顶栏</el-header>
        <el-main>主体</el-main>
        <el-footer>底栏</el-footer>
      </el-container>
    </el-container>

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
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
