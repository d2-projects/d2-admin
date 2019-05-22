<template>
  <div>
    <img
      src="./image/d2-help-button@2x.png"
      style="width: 138px;"
      @click="dialogVisible = true">
    <el-dialog
      :title="$t('views.system.index.help.title')"
      width="600px"
      :visible.sync="dialogVisible"
      :append-to-body="true">
      <div style="margin-top: -25px; margin-bottom: -25px;">
        <el-button-group class="d2-mb">
          <el-button @click="$open('https://github.com/d2-projects/d2-admin')">
            <d2-icon name="github" class="d2-mr-5"/>
            {{ $t('views.system.index.help.link.text.github') }}
          </el-button>
          <el-button @click="$open($t('views.system.index.help.link.href.doc'))">
            <d2-icon name="book" class="d2-mr-5"/>
            {{ $t('views.system.index.help.link.text.doc') }}
          </el-button>
          <el-button @click="$open('https://github.com/d2-projects/d2-admin/issues')">
            <d2-icon name="question" class="d2-mr-5"/>
            {{ $t('views.system.index.help.link.text.issues') }}
          </el-button>
          <el-button @click="$open('https://github.com/d2-projects/d2-admin/issues/new/choose')">
            <d2-icon name="plus" class="d2-mr-5"/>
            {{ $t('views.system.index.help.link.text.new-issue') }}
          </el-button>
        </el-button-group>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-alert
              :closable="false"
              type="info"
              :title="$t('views.system.index.help.chat.title.qq')" class="d2-mb"/>
            <img src="./image/qq.jpg" style="width: 100%;">
          </el-col>
          <el-col :span="12">
            <el-alert
              :closable="false"
              type="info"
              :title="$t('views.system.index.help.chat.title.we')" class="d2-mb"/>
            <img src="./image/we.jpg" style="width: 100%;">
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
