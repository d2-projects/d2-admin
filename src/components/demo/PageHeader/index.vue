<template>
  <div class="dd-clearfix">
    <span v-if="title" class="dd-fl">{{title}}</span>
    <span class="dd-fr">
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
