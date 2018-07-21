<template>
  <div>
    <d2-markdown :source="long"/>
  </div>
</template>

<script>
import long from '../md/long'
export default {
  data () {
    return {
      long
    }
  }
}
</script>
