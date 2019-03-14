<template>
  <d2-container :filename="filename">
    <tree-view :data="packJson" :options="options"/>
  </d2-container>
</template>

<script>
import packJson from '../../../../../package.json'
export default {
  data () {
    return {
      filename: __filename,
      options: {
        maxDepth: 10,
        rootObjectKey: 'package.json',
        modifiable: false
      },
      packJson
    }
  }
}
</script>
