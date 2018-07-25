<template>
  <pre class="d2-highlight" v-html="highlightHTML"></pre>
</template>

<script>
// https://highlightjs.org/usage/
// http://highlightjs.readthedocs.io/en/latest/api.html#configure-options
import './styles/atom-one-light.css'
import htmlFormat from './libs/htmlFormat'
import highlight from 'highlight.js'
export default {
  name: 'd2-highlight',
  props: {
    code: {
      type: String,
      required: false,
      default: `console.log('you lost code prop')`
    },
    formatHtml: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      highlightHTML: ''
    }
  },
  mounted () {
    this.highlight()
  },
  watch: {
    code () {
      this.highlight()
    }
  },
  methods: {
    highlight () {
      const code = this.formatHtml ? htmlFormat(this.code) : this.code
      this.highlightHTML = highlight.highlightAuto(code).value
    }
  }
}
</script>

<style lang="scss" scoped>
.d2-highlight {
  margin: 0px;
  border-radius: 4px;
}
</style>
