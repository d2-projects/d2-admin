<template>
  <d2-container type="card">
    <template slot="header">process.env</template>
    <d2-highlight :code="env"/>
  </d2-container>
</template>

<script>
export default {
  data () {
    return {
      env: JSON.stringify(process.env, null, 2)
    }
  }
}
</script>
