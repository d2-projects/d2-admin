<template>
  <d2-container>
    <template slot="header">
      <el-radio-group v-model="showIndex" size="mini">
        <el-radio-button
          v-for="(item, index) in radioOptions"
          :key="index"
          :label="item.value">
          {{item.label}}
        </el-radio-button>
      </el-radio-group>
    </template>
    <el-row style="margin: -10px;">
      <el-alert title="点击图标复制代码" type="info" class="d2-m-10" style="width: auto;"/>
      <el-col v-for="(iconItem, iconIndex) in iconShow.icon" :key="iconIndex" :span="6" class="d2-p-10">
        <d2-icon-cell :icon="iconItem"/>
      </el-col>
    </el-row>
  </d2-container>
</template>

<script>
import icon from './data/index'
export default {
  components: {
    'd2-icon-cell': () => import('./components/d2-icon-cell')
  },
  data () {
    return {
      icon,
      showIndex: 12
    }
  },
  computed: {
    iconShow () {
      return this.icon[this.showIndex]
    },
    radioOptions () {
      return this.icon.map((e, index) => ({
        label: e.title,
        value: index
      }))
    }
  }
}
</script>
