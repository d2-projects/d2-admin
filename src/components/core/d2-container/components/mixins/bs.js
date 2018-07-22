import BScroll from 'better-scroll'
export default {
  props: {
    scrollOptions: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  data () {
    return {
      BS: null
    }
  },
  mounted () {
    this.scrollInit()
  },
  beforeDestroy () {
    this.scrollDestroy()
  },
  methods: {
    scrollInit () {
      this.BS = new BScroll(this.$refs.wrapper, Object.assign({
        mouseWheel: true,
        scrollbar: {
          fade: true,
          interactive: false
        }
      }, this.scrollOptions))
    },
    scrollDestroy () {
      if (this.BS) {
        this.BS.destroy()
      }
    }
  }
}
