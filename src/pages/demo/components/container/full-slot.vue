<template>
  <d2-container>
    <template slot="header">header</template>
    <d2-markdown :source="long"/>
    <template slot="footer">footer</template>
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
