<template>
  <d2-container :filename="filename" type="card">
    <d2-module-index :banner="banner"/>
  </d2-container>
</template>

<script>
export default {
  data () {
    return {
      filename: __filename,
      banner: {
        title: 'PLUGIN',
        subTitle: 'D2Admin 集成了许多实用插件'
      }
    }
  }
}
</script>
