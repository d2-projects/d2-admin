<template>
  <div class="d2-source">
    <d2-icon name="code"/> SourceCode
  </div>
</template>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.d2-source {
  $borderRadius: 4px;
  $paddingLR: 15px;
  $paddingTB: 7px;
  $fontSize: 12px;
  position: absolute;
  right: - $borderRadius;
  bottom: 20px;
  font-size: $fontSize;
  line-height: $fontSize;
  font-weight: bold;
  border-radius: $borderRadius;
  padding: $paddingTB $paddingLR;
  padding-right: $borderRadius + $paddingLR;
  background-color: rgba(#000, .7);
  border: 1px solid #000;
  color: #FFF;
  transition: all .3s;
  @extend %unable-select;
  &:hover {
    background-color: rgba(#000, .9);
  }
}
</style>
