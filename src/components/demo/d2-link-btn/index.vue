<template>
  <el-button-group>
    <el-button v-if="title" size="mini" @click="$open(link)">{{title}}</el-button>
    <el-button size="mini" @click="$open(link)">
      <d2-icon :name="icon"/>
      {{link}}
    </el-button>
  </el-button-group>
</template>

<script>
export default {
  name: 'd2-link-btn',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    icon: {
      type: String,
      required: false,
      default: 'link'
    },
    link: {
      type: String,
      required: false,
      default: 'https://github.com/d2-projects'
    }
  }
}
</script>
