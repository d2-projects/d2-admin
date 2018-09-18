<template>
  <d2-container type="card">
    <el-radio-group v-model="currentValue" @change="set">
      <el-radio-button label="default"></el-radio-button>
      <el-radio-button label="medium"></el-radio-button>
      <el-radio-button label="small"></el-radio-button>
      <el-radio-button label="mini"></el-radio-button>
    </el-radio-group>
  </d2-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      currentValue: ''
    }
  },
  computed: {
    ...mapState('d2admin/size', [
      'value'
    ])
  },
  watch: {
    value: {
      handler (val) {
        this.currentValue = val
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions('d2admin/size', [
      'set'
    ])
  }
}
</script>
