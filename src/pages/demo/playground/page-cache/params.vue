<template>
  <d2-container type="card">
    <template slot="header">这个页面会被 keep-alive</template>
    <h2 class="d2-mt-0">编号：{{id}}</h2>
    <p class="d2-mt-0">在下面的输入框输入任意字符后，切换到其它页面，再回到此页时输入框文字保留，证明被缓存</p>
    <el-input v-model="value" placeholder="input here"></el-input>
  </d2-container>
</template>

<script>
export default {
  name: 'demo-playground-page-cache-params',
  props: {
    id: String
  },
  data () {
    return {
      value: ''
    }
  }
}
</script>
