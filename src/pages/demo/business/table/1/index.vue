<template>
  <d2-container>
    <demo-page-header slot="header"/>
    <demo-page-main/>
    <demo-page-footer slot="footer"/>
  </d2-container>
</template>

<script>
export default {
  components: {
    'DemoPageHeader': () => import('./componnets/PageHeader'),
    'DemoPageMain': () => import('./componnets/PageMain'),
    'DemoPageFooter': () => import('./componnets/PageFooter')
  }
}
</script>
