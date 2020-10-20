<template>
  <d2-container type="card">
    <template slot="header">
      <el-button
        size="mini"
        type="primary">
        props.id = {{id}}
      </el-button>
    </template>
    <p class="d2-mt-0">在下面的输入框输入任意字符后，切换到其它页面，再回到此页时输入框文字保留，证明被缓存</p>
    <p>注意：此页面根据不同 params 打开后数据不会混淆</p>
    <el-row :gutter="10">
      <el-col :span="12">
        <p>el-input</p>
        <el-input v-model="data.value" placeholder="input here" />
      </el-col>
      <el-col :span="12">
        <p>html input</p>
        <div class="el-input el-input--default">
          <input v-model="data.value" placeholder="input here" class="el-input__inner" />
        </div>
      </el-col>
    </el-row>
  </d2-container>
</template>

<script>
export default {
  name: 'demo-playground-page-cache-params',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      data: { value: '' }
    }
  }
}
</script>
