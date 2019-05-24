<template>
  <el-tooltip
    effect="dark"
    :content="tooltipContent"
    placement="bottom">
    <el-button
      class="d2-ml-0 d2-mr btn-text can-hover"
      type="text"
      @click="handleClick">
      <el-badge
        v-if="logLength > 0"
        :max="99"
        :value="logLengthError"
        :is-dot="logLengthError === 0">
        <d2-icon
          :name="logLengthError === 0 ? 'dot-circle-o' : 'bug'"
          style="font-size: 20px"/>
      </el-badge>
      <d2-icon
        v-else
        name="dot-circle-o"
        style="font-size: 20px"/>
    </el-button>
  </el-tooltip>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters('d2admin', {
      logLength: 'log/length',
      logLengthError: 'log/lengthError'
    }),
    tooltipContent () {
      return this.logLength === 0
        ? this.$t('layout.header-aside.header-log.empty')
        : `${this.$t('layout.header-aside.header-log.log-length', { length: this.logLength })}${this.logLengthError > 0
          ? ` | ${this.$t('layout.header-aside.header-log.error-length', { length: this.logLengthError })}`
          : ''}`
    }
  },
  methods: {
    ...mapMutations('d2admin/log', [
      'clean'
    ]),
    handleClick () {
      this.$router.push({
        name: 'log'
      })
    }
  }
}
</script>
