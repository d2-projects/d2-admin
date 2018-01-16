<template>
  <div>
    <el-popover
      ref="pop"
      placement="top"
      width="160"
      v-model="popover.visible">
      <p>访问 Github</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="popover.visible = false">取消</el-button>
        <el-button type="primary" size="mini" @click="jump">确定</el-button>
      </div>
    </el-popover>
    <el-button
      v-popover:pop
      v-bind="$attrs"
      @click="popover.visible = true">
      view in
      <span class="fa fa-github"></span>
    </el-button>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: false,
      default: ''
    },
    url: {
      type: String,
      required: false,
      default: 'https://github.com/FairyEver'
    }
  },
  data () {
    return {
      popover: {
        visible: false
      }
    }
  },
  methods: {
    jump () {
      window.open(this.url)
    }
  }
}
</script>
