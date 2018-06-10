<template>
  <div class="d2-clearfix">
    <span v-if="title" class="d2-fl">{{title}}</span>
    <span class="d2-fr"></span>
  </div>
</template>

<script>
export default {
  name: 'd2-demo-page-header',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
