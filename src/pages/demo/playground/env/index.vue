<template>
  <d2-container type="card">
    <template slot="header">process.env</template>
    <p class="d2-mt-0">NODE_ENV = {{env}}</p>
    <p>BASE_URL = {{baseUrl}}</p>
    <p class="d2-mb-0">VUE_APP_TITLE = {{title}}</p>
  </d2-container>
</template>

<script>
export default {
  data () {
    return {
      env: process.env.NODE_ENV,
      baseUrl: process.env.BASE_URL,
      title: process.env.VUE_APP_TITLE
    }
  }
}
</script>
