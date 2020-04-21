<template>
  <d2-container type="card" class="page">
    <template slot="header">
      <div class="colorful">{{grayActive ? 'GRAY' : 'COLORFUL'}}</div>
    </template>
    <el-button-group>
      <el-button @click="grayToggle">切换灰度模式</el-button>
      <el-button @click="graySet(true)">打开灰度模式</el-button>
      <el-button @click="graySet(false)">关闭灰度模式</el-button>
      <el-button @click="dialogVisible = true">模拟报错提示框</el-button>
    </el-button-group>
    <el-dialog
      title="错误"
      :visible.sync="dialogVisible"
      :append-to-body="true"
      width="30%"
      @open="handleDialogOpen"
      @closed="handleDialogClosed">
      <div
        style="
          text-align: center;
          line-height: 100px;
          color: #FFF;
          font-size: 64px;
          font-weight: bold;
          border-radius: 4px;
          background-color: #F56C6C;
          margin: -20px 0px;
          ">
        Error
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false" style="width: 100%;">
          我看到后面的内容已经变为灰度模式
        </el-button>
      </span>
    </el-dialog>
  </d2-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      dialogVisible: false
    }
  },
  computed: {
    ...mapState('d2admin/gray', {
      grayActive: 'active'
    })
  },
  methods: {
    ...mapMutations('d2admin/gray', {
      grayToggle: 'toggle',
      graySet: 'set'
    }),
    handleDialogOpen () {
      this.graySet(true)
    },
    handleDialogClosed () {
      this.graySet(false)
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  .colorful {
    @extend %unable-select;
    line-height: 300px;
    font-size: 100px;
    font-weight: bold;
    color: #FFF;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #333;
    background-color: #ffff00;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ff8000'/%3E%3Cstop offset='1' stop-color='%23ff8000' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2300ff19'/%3E%3Cstop offset='1' stop-color='%2300ff19' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%239900ff'/%3E%3Cstop offset='1' stop-color='%239900ff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffff00'/%3E%3Cstop offset='1' stop-color='%23ffff00' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FF0000'/%3E%3Cstop offset='1' stop-color='%23FF0000' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230CF'/%3E%3Cstop offset='1' stop-color='%230CF' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
