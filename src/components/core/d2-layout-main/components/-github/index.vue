<template>
  <div>
    <el-tooltip effect="dark" placement="bottom">
      <div slot="content">
        <a class="link" :href="url" target="_blank">转到 Github</a>
      </div>
      <el-button class="d2-ml-0 d2-mr btn-text can-hover" type="text" @click="handleClick">
        <d2-icon name="github" style="font-size: 20px"/>
      </el-button>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: 'https://github.com/FairyEver/d2-admin'
    }
  },
  methods: {
    handleClick () {
      window.open(this.url)
    }
  }
}
</script>


<style lang="scss" scoped>
.link {
  color: #FFF;
  text-decoration: none;
}
</style>
