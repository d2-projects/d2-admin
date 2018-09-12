<template>
  <d2-container type="card">
    <template slot="header">ElementUI组件尺寸</template>
    <p>组件尺寸改变要刷新才有效果</p>
    <div>
      <el-radio-group v-model="size" @change="handlerSizeChange">
        <el-radio-button label="default">默认按钮</el-radio-button>
        <el-radio-button label="medium">中等按钮</el-radio-button>
        <el-radio-button label="small">小型按钮</el-radio-button>
        <el-radio-button label="mini">超小按钮</el-radio-button>
      </el-radio-group>
    </div>
  </d2-container>
</template>

<script>
import util from '@/libs/util'
export default {
  data () {
    return {
      size: util.cookies.get('size') || 'default'
    }
  },
  methods: {
    handlerSizeChange (size) {
      util.cookies.set('size', size)
    }
  }
}
</script>
