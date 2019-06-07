<template>
  <el-color-picker :value="value" size="small" @change="changeColor"></el-color-picker>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import client from 'webpack-theme-color-replacer/client'
import forElementUI from 'webpack-theme-color-replacer/forElementUI'

export default {
  name: 'd2-header-color',
  computed: {
    ...mapState('d2admin/color', [
      'value'
    ])
  },
  watch: {
    value (val, old) {
      this.changeThemeColor(old, val)
    }
  },
  created () {
    this.changeThemeColor(process.env.VUE_APP_ELEMENT_COLOR, this.value)
  },
  methods: {
    ...mapActions({
      colorSet: 'd2admin/color/set'
    }),
    changeColor (newColor) {
      this.colorSet(newColor)
    },
    changeThemeColor (curColor, newColor) {
      var options = {
        oldColors: [...forElementUI.getElementUISeries(curColor)],
        newColors: [...forElementUI.getElementUISeries(newColor)]
      }
      client.changer.changeColor(options, Promise)
    }
  }
}
</script>
