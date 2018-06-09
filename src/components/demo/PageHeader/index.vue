<template>
  <div class="d2-clearfix">
    <span v-if="title" class="d2-fl">{{title}}</span>
    <span class="d2-fr">
      <GithubLink v-if="url" :url="url"></GithubLink>
    </span>
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
