<template>
  <button class="v-bt-button" @click="handleClick">
    <span v-if="type === 'confirm'" class="i con-i"><i class="l con-i-l1 l1"></i><i class="l con-i-l2 l2"></i></span>
    <span v-else class="i can-i"><i class="l can-i-l1 l1"></i><i class="l can-i-l2 l2"></i></span>
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    type: String
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e);
    }
  }
};
</script>
<style lang="less">
@import '../styles/common.less';
.v-bt-button{
  padding: 2px 7px;
  width: 20px;
  background: transparent;
  border: none;
  vertical-align: middle;
  outline: none;
  transform: translateY(3px);
  cursor: pointer;
  &:hover{
    .l{
      background: @basic-blue;
      transition: background .2s ease;
    }
  }
  .i{
    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    i{
      display: inline-block;
      position: absolute;
      left: 0px;
      top: 0px;
      background: #000000;
      border-radius: 1px;
      height: 2px;
    }
  }
  .l{
    transition: background .2s ease;
  }
  .con-i{
    &-l1{
      width: 7px;
        transform: rotateZ(45deg) translate(3px, 0px);
    }
    &-l2{
      width: 10px;
      transform: rotateZ(-45deg) translate(5px, 4px);
    }
  }
  .can-i{
    &-l1{
      width: 12px;
      transform: rotateZ(45deg);
    }
    &-l2{
      width: 12px;
      transform: rotateZ(-45deg);
    }
  }
}
</style>
