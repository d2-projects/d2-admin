<template>
  <Container>
    <div v-for="(item, index) in icon" :key="index">
      <h1>{{item.title}}</h1>
      <div>
        <span v-for="(iconItem, iconIndex) in item.icon" :key="iconIndex" :class="'fa fa-' + iconItem"></span>
      </div>
    </div>
  </Container>
</template>

<script>
import icon from '@/assets/library/font-awesome-4.7.0-icon/icon.js'
export default {
  data () {
    return {
      icon
    }
  }
}
</script>
