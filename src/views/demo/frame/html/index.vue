<template>
  <d2-container-frame :src="`${$baseUrl}html/demo.html`"/>
</template>

<script>
export default {
  data () {
    return {
      filename: __filename
    }
  }
}
</script>
