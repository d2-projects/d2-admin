<template>
  <div>
    <el-popover
      ref="pop"
      placement="top"
      width="160"
      v-model="popover.visible">
      <p class="d2-mt-0 d2-mb-10">
        <i class="fa fa-github"></i>
        github
      </p>
      <p class="d2-mt-0 d2-mb-10" style="font-size: 10px;">{{name}}</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="popover.visible = false">
          取消
        </el-button>
        <el-button type="primary" size="mini" @click="jump">
          确定
        </el-button>
      </div>
    </el-popover>
    <el-button
      v-popover:pop
      v-bind="$attrs">
      <i class="fa fa-github"></i>
      {{name}}
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
