<template>
  <d2-container type="card">
    <template slot="header">这个页面会被 keep-alive</template>
    <h2 class="d2-mt-0">编号：{{id}}</h2>
    <p class="d2-mt-0">在下面的输入框输入任意字符后，切换到其它页面，再回到此页时输入框文字保留，证明被缓存</p>
    <!-- 使用 el-input 会出现显示值与 v-model 不一致的情况，解决问题前暂时使用 input -->
    <input v-model="data.value" placeholder="input here" />
  </d2-container>
</template>

<script>
const datas = {}

export default {
  name: 'demo-playground-page-cache-params',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    /**
     * 带参路由多组参数使用同一个组件实例，需要在组件内部对多个参数的情况进行统一处理
     * 这里简单演示如何根据 id 管理多组数据对象
     */
    data: function () {
      const id = this.id
      let data = datas[id]
      if (!data) {
        data = { value: '' }
        datas[id] = data
      }
      return data
    }
  }
}
</script>
