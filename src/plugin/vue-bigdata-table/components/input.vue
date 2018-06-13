<template>
  <input class="v-bt-input" :value="value" @input="handleInput" />
</template>
<script>
export default {
  name: 'Input',
  props: {
    value: [String, Number]
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value);
    }
  },
  mounted () {
    this.$emit('input', this.value);
  }
};
</script>
<style lang="less">
@import '../styles/common.less';
.v-bt-input{
  box-sizing: border-box;
  width: 100%;
  height: 32px;
  line-height: 1.5;
  padding: 4px 7px;
  font-size: 12px;
  border: 1px solid #dddee1;
  border-radius: 4px;
  color: #495060;
  background-color: #fff;
  background-image: none;
  position: relative;
  cursor: text;
  outline: none;
  transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out,-webkit-box-shadow .2s ease-in-out;
  &:hover{
    border-color: @basic-blue;
  }
  &:focus{
    border-color: @basic-blue;
    box-shadow: 0 0 0 2px rgba(45,140,240,.2)
  }
}
</style>
