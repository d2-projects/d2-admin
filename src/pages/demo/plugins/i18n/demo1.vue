<template>
  <d2-container>
    <PageHeader
      slot="header"
      :title="`${$t('pub.pageHeader.demo')} 1`"
      url="http://kazupon.github.io/vue-i18n/en/">
    </PageHeader>
    <DemoI18nControl></DemoI18nControl>
    <DemoI18n></DemoI18n>
  </d2-container>
</template>

<script>
export default {
  components: {
    DemoI18nControl: () => import('./components/DemoI18nControl'),
    DemoI18n: () => import('./components/DemoI18n')
  }
}
</script>
