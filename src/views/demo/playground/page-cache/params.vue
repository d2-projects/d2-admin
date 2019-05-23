<template>
  <d2-container type="card">
    <template slot="header">这个页面会被 keep-alive</template>
    <h2 class="d2-mt-0">编号：{{id}}</h2>
    <p class="d2-mt-0">在下面的输入框输入任意字符后，切换到其它页面，再回到此页时输入框文字保留，证明被缓存</p>
    <el-input v-model="data.value" placeholder="input here" />
    <input v-model="data.value" placeholder="input here" />
  </d2-container>
</template>

<script>
/**
 * 带参路由多组参数使用同一个组件实例，需要在组件内部对多个参数的情况进行统一处理
 * 这里简单演示如何根据 id 管理多组数据对象
 */
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
      datas: [],
      data: { value: '' }
    }
  },
  methods: {
    switchData (id) {
      let data = this.datas[id]
      if (!data) {
        data = { value: '' }
        this.datas[id] = data
      }
      this.data = data
    }
  },
  // 第一次进入或从其他组件对应路由进入时触发
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter => ', to)
    const id = to.params.id
    if (id) {
      next(instance => instance.switchData(id))
    } else {
      next(new Error('未指定ID'))
    }
  },
  // 在同一组件对应的多个路由间切换时触发
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate => ', to)
    const id = to.params.id
    if (id) {
      this.switchData(id)
      next()
    } else {
      next(new Error('未指定ID'))
    }
  }
}
</script>
