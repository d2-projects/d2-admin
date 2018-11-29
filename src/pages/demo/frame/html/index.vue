<template>
  <d2-container-frame :filename="filename" :src="`${$baseUrl}html/demo.html`"/>
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
