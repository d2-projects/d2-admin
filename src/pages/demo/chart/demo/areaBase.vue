<template>
  <Container type="ghost" :responsive="true">
    <ChartDemoCard></ChartDemoCard>
  </Container>
</template>

<script>
import publicMixin from './mixins/public'
export default {
  mixins: [
    publicMixin
  ]
}
</script>
