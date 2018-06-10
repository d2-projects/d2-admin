<template>
  <div class="d2-clearfix">
    <span v-if="title" class="d2-fl">{{title}}</span>
    <span class="d2-fr"></span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
