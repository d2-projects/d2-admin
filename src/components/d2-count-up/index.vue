<template>
  <span></span>
</template>

<script>
// https://github.com/inorganik/CountUp.js
import { CountUp } from 'countup.js'
export default {
  name: 'd2-count-up',
  props: {
    start: {
      type: [Number, String],
      default: 0
    },
    end: {
      type: [Number, String],
      default: 0
    },
    decimals: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 2
    },
    options: {
      type: Object,
      default: () => ({})
    },
    callback: {
      type: Function
    }
  },
  data () {
    return {
      c: null
    }
  },
  watch: {
    end (value) {
      if (this.c && this.c.update) this.c.update(value)
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      if (!this.c) {
        this.c = new CountUp(this.$el, this.end, {
          startVal: this.start,
          decimalPlaces: this.decimals,
          duration: this.duration,
          ...this.options
        })
        this.c.start(() => {
          if (this.callback) this.callback(this.c)
        })
      }
    }
  }
}
</script>
