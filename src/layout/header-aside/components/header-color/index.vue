<template>
  <el-color-picker
    class="btn-text can-hover"
    :value="value"
    size="mini"
    @change="colorSet"/>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'd2-header-color',
  computed: {
    ...mapState('d2admin/color', [
      'value'
    ])
  },
  watch: {
    value (value) {
      this.colorSet(value)
    }
  },
  methods: {
    ...mapActions({
      colorSet: 'd2admin/color/set'
    })
  }
}
</script>
