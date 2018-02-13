<template>
  <Container>
    <PageHeader
      slot="header"
      :title="`${$t('message.pub.pageHeader.demo')} 1`"
      url="http://kazupon.github.io/vue-i18n/en/">
    </PageHeader>
    <DemoI18nControl></DemoI18nControl>
    <DemoI18n></DemoI18n>
  </Container>
</template>

<script>
import DemoI18nControl from './components/DemoI18nControl'
import DemoI18n from './components/DemoI18n'
export default {
  components: {
    DemoI18nControl,
    DemoI18n
  }
}
</script>
