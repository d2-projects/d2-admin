<template>
  <el-card>
    <el-button @click="$emit('sync')">
      <Icon name="refresh"></Icon>
      重新载入数据
    </el-button>
    <p>改变容器高度</p>
    <el-radio-group v-model="currentHeight" size="small">
      <el-radio-button v-for="(item, index) in heightOptions" :key="index" :label="item">{{item}}</el-radio-button>
    </el-radio-group>
  </el-card>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data () {
    return {
      heightOptions: [300, 400, 500, 600],
      currentHeight: 0
    }
  },
  created () {
    this.currentHeight = this.height
  },
  watch: {
    currentHeight (value) {
      if (value !== this.height) {
        this.$emit('update:height', value)
      }
    }
  }
}
</script>

