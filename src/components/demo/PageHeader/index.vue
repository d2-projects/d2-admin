<template>
  <div class="dd-clearfix">
    <span v-if="title" class="dd-fl">{{title}}</span>
    <span v-if="url" class="dd-fr"><GithubLink :url="url"></GithubLink></span>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: false,
      default: ''
    },
    title: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
