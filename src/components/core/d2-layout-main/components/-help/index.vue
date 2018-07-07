<template>
  <div>
    <el-tooltip effect="dark" content="疑问" placement="bottom">
      <el-button class="d2-ml-0 d2-mr btn-text can-hover" type="text" @click="dialogVisible = true">
        <d2-icon name="question-circle" style="font-size: 20px"/>
      </el-button>
    </el-tooltip>
    <el-dialog title="帮助" width="600px" :visible.sync="dialogVisible">
      <div style="margin-top: -25px; margin-bottom: -25px;">
        <h1 class="d2-mt-0">如果你有问题可以加入交流群或者联系作者</h1>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-alert :closable="false" type="info" title="扫码进 QQ 群" class="d2-mb"/>
            <img class="qr" src="@/assets/image/demo/join/qq.jpg">
          </el-col>
          <el-col :span="12">
            <el-alert :closable="false" type="info" title="作者微信 加好友拉进微信群" class="d2-mb"/>
            <img class="qr" src="@/assets/image/demo/join/we.jpg">
          </el-col>
        </el-row>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
};
</script>

<style lang="scss" scoped>
img {
  &.qr {
    width: 100%;
  }
}
</style>
