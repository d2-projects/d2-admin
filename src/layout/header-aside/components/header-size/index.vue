<template>
  <el-dropdown placement="bottom" size="small" @command="handleChange">
    <el-button class="d2-mr btn-text can-hover" type="text">
      <d2-icon name="font" style="font-size: 16px;"/>
    </el-button>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="">
        <d2-icon :name="iconName('default')" class="d2-mr-5"/>默认
      </el-dropdown-item>
      <el-dropdown-item command="medium">
        <d2-icon :name="iconName('medium')" class="d2-mr-5"/>中
      </el-dropdown-item>
      <el-dropdown-item command="small">
        <d2-icon :name="iconName('small')" class="d2-mr-5"/>小
      </el-dropdown-item>
      <el-dropdown-item command="mini">
        <d2-icon :name="iconName('mini')" class="d2-mr-5"/>最小
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'd2-size-control',
  computed: {
    ...mapState('d2admin/size', [
      'value'
    ])
  },
  watch: {
    value: {
      handler (val) {
        console.log('handler')
        this.$ELEMENT.size = val
      },
      immediate: true
    }
  },
  methods: {
    ...mapMutations('d2admin/size', [
      'set'
    ]),
    handleChange (value) {
      this.set(value)
      this.$message({
        message: `设置尺寸成功 ${value}`,
        type: 'success'
      })
    },
    iconName (name) {
      return name === this.value ? 'dot-circle-o' : 'circle-o'
    }
  }
}
</script>
