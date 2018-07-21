<template>
  <d2-container>
    <d2-markdown :source="long"/>
  </d2-container>
</template>

<script>
import long from './md/long.md'
export default {
  data () {
    return {
      long
    }
  }
}
</script>
