<template>
  <d2-container type="card">
    <template slot="header">这个页面不会被 keep-alive</template>
    <p class="d2-mt-0">在下面的输入框输入任意字符后，切换到其它页面，再回到此页时输入框文字消失，证明没有被缓存</p>
    <el-input v-model="value" placeholder="input here"></el-input>
  </d2-container>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>
