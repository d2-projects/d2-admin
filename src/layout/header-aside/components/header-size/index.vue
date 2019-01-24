<template>
  <el-dropdown placement="bottom" size="small" @command="handleChange">
    <el-button class="d2-mr btn-text can-hover" type="text">
      <d2-icon name="font" style="font-size: 16px;"/>
    </el-button>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="item in options" :key="item.value" :command="item.value">
        <d2-icon :name="iconName(item.value)" class="d2-mr-5"/>{{item.label}}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'd2-header-size',
  data () {
    return {
      options: [
        { label: '默认', value: 'default' },
        { label: '中', value: 'medium' },
        { label: '小', value: 'small' },
        { label: '最小', value: 'mini' }
      ]
    }
  },
  computed: {
    ...mapState('d2admin/size', [
      'value'
    ])
  },
  watch: {
    // 注意 这里是关键
    // 因为需要访问 this.$ELEMENT 所以只能在这里使用这种方式
    value: {
      handler (val, oldVal) {
        // https://github.com/d2-projects/d2-admin/pull/129
        if (oldVal) {
          // 这个情况在已经加载完页面 用户改变了尺寸时触发
          this.$ELEMENT.size = val
          // 由于已经加载过设置 需要清空缓存设置
          this.pageKeepAliveClean()
          // 由于已经加载过设置 需要刷新此页面
          this.$router.replace('/refresh')
        } else {
          // 这个情况在刷新页面时触发
          this.$ELEMENT.size = val
        }
      },
      immediate: true
    }
  },
  methods: {
    ...mapMutations({
      pageKeepAliveClean: 'd2admin/page/keepAliveClean'
    }),
    ...mapActions({
      sizeSet: 'd2admin/size/set'
    }),
    handleChange (value) {
      this.sizeSet(value)
    },
    iconName (name) {
      return name === this.value ? 'dot-circle-o' : 'circle-o'
    }
  }
}
</script>
