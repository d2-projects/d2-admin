<template>
  <d2-container type="full">
    <h1>$route.params.username: {{$route.params.username}}</h1>
    <h1>$route.query: {{$route.query}}</h1>
  </d2-container>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
