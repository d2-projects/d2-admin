<template>
  <Container>
    <PageHeader
      slot="header"
      :title="`${$t('pub.pageHeader.demo')} 2`"
      url="http://kazupon.github.io/vue-i18n/en/">
    </PageHeader>
    <DemoI18nControl></DemoI18nControl>
    <DemoI18n></DemoI18n>
  </Container>
</template>

<script>
export default {
  components: {
    DemoI18nControl: () => import('../../components/DemoI18nControl'),
    DemoI18n: () => import('../../components/DemoI18n')
  }
}
</script>
