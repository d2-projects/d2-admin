<template>
  <d2-container>
    <d2-demo-page-header slot="header" :title="`${$t('pub.pageHeader.demo')} 1`"/>
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
