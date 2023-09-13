<template>
  <div>
    <el-button type="primary" @click="dialogVisible = true" plain round>
      <d2-icon name="question-circle-o" class="d2-mr-5"/>
      需要帮助吗
    </el-button>
    <el-dialog
      title="帮助"
      width="600px"
      :visible.sync="dialogVisible"
      :append-to-body="true">
      <div style="margin-top: -25px;">
        <h2 class="d2-mt-0">
          这里有一些参考资料
        </h2>
        <el-button-group>
          <el-button @click="$open('https://d2.pub/doc/d2-admin')">
            <d2-icon name="book" class="d2-mr-5"/>
            文档
          </el-button>
          <el-button @click="$open('https://github.com/d2-projects/d2-admin/issues?q=is%3Aissue+is%3Aclosed')">
            <d2-icon name="question" class="d2-mr-5"/>
            历史提问
          </el-button>
          <el-button @click="$open('https://github.com/d2-projects/d2-admin/issues/new/choose')">
            <d2-icon name="plus" class="d2-mr-5"/>
            提交问题
          </el-button>
        </el-button-group>
        <h2>询问其它使用者或作者</h2>
        <el-row :gutter="20">
          <el-col :span="12">
            <img src="./image/qq.svg" style="width: 100%;">
            <div class="d2-help--qr-info">
              请使用手机 QQ 扫面上方二维码<br/>
              1群 806395827 (满) | 2群 592981556
            </div>
          </el-col>
          <el-col :span="12">
            <img src="./image/we.svg" style="width: 100%;">
            <div class="d2-help--qr-info">
              请使用手机微信扫面上方二维码<br/>
              添加作者微信好友，邀请加入微信群
            </div>
          </el-col>
        </el-row>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false
    }
  }
}
</script>

<style lang="scss" scoped>
.d2-help--qr-info {
  background-color: #f4f4f5;
  color: #909399;
  width: 100%;
  padding: 8px 16px;
  margin: 0;
  box-sizing: border-box;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  opacity: 1;
  display: flex;
  align-items: center;
  transition: opacity .2s;
}
</style>
