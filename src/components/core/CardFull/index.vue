<template>
  <div class="dd-card-full">
    <div class="dd-card-full__header" ref="header">
      <slot name="header"></slot>
    </div>
    <div class="dd-card-full__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.$refs.header.offsetHeight)
  }
}
</script>


<style lang="scss" scoped>
.dd-card-full {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  color: #303133;
  .dd-card-full__header {
    padding: 18px 20px;
    border-bottom: 1px solid #ebeef5;
    box-sizing: border-box;
  }
  .dd-card-full__body {
    padding: 20px;
  }
}
</style>

