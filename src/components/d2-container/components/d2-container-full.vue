<template>
  <div class="d2-container-full">
    <div v-if="$slots.header" class="d2-container-full__header" ref="header">
      <slot name="header"/>
    </div>
    <div class="d2-container-full__body" ref="body">
      <slot/>
    </div>
    <div v-if="$slots.footer" class="d2-container-full__footer" ref="footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script>
import scroll from './mixins/scroll.normal'
export default {
  name: 'd2-container-full',
  mixins: [
    scroll({
      ref: 'body'
    })
  ]
}
</script>
