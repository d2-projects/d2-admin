<template>
  <Container type="ghost">
    <el-card>
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
        <el-col v-for="(iconItem, iconIndex) in iconShow.icon" :key="iconIndex" :span="6" class="dd-p-10">
          <IconCell :icon="iconItem"></IconCell>
        </el-col>
      </el-row>
    </el-card>
  </Container>
</template>

<script>
import icon from '@/assets/library/font-awesome-4.7.0-icon/icon.js'
import IconCell from './components/IconCell'
export default {
  components: {
    IconCell
  },
  data () {
    return {
      icon,
      showIndex: 0
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
