<template>
  <d2-container type="full" :scroll="false" class="page-name">
    <template slot="header">header</template>
    this is [ page-name ]
    <template slot="footer">footer</template>
  </d2-container>
</template>

<script>
export default {
  name: 'page-name',
  data () {
    return {}
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.page-name {
  // Your page style here
  // Do not use empty rulesets
  // If the page does not need an additional definition style, please delete
}
</style>