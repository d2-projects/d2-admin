<template>
  <d2-container :filename="filename" type="card">
    <template slot="header">process.env</template>
    <d2-highlight :code="env"/>
  </d2-container>
</template>

<script>
export default {
  data () {
    return {
      filename: __filename,
      env: JSON.stringify(process.env, null, 2)
    }
  }
}
</script>
