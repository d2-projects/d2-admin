<template>
  <Container type="ghost">
    <el-card v-for="(item, index) in icon" :key="index" :class="index === icon.length - 1 ? '' : 'dd-mb'">
      <template slot="header">{{item.title}}</template>
      <el-row style="margin: -10px;">
        <el-col
          v-for="(iconItem, iconIndex) in item.icon"
          :key="iconIndex"
          :span="6"
          class="dd-p-10">
          <el-tag type="info">
            <span :class="'fa fa-' + iconItem"></span>
          </el-tag>
          <span style="font-size: 10px;">{{iconItem}}</span>
        </el-col>
      </el-row>
    </el-card>
  </Container>
</template>

<script>
import icon from '@/assets/library/font-awesome-4.7.0-icon/icon.js'
export default {
  data () {
    return {
      icon
    }
  }
}
</script>
