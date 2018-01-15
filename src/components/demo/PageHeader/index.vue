<template>
  <div class="clearfix">
    <span class="fl">{{title}}</span>
    <span class="fr"><GithubLink :url="url"></GithubLink></span>
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
