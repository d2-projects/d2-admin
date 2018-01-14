<template>
  <el-tooltip :content="url" :placement="tooltipPlacement">
    <a :href="url" target="_blank">
      View in Github
      <span class="fa fa-github"></span>
    </a>
  </el-tooltip>
</template>

<script>
export default {
  props: {
    url: {
      default: 'https://github.com/FairyEver'
    },
    tooltipPlacement: {
      default: 'top-end'
    }
  }
}
</script>

