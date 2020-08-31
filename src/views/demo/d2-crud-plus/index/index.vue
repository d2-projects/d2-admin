<template>
  <d2-container type="ghost">
    <d2-module-index-banner slot="header" v-bind="banner"/>
<!--    <d2-module-index-menu :menu="menu"/>-->

    <div class="exampleBox d2-mt-20 ">
      <div class="left">
        <d2-highlight :code="helper.crud" lang="javascript"/>
      </div>
      <div class="icon">
        <i class="el-icon-right"></i>
      </div>
      <div class="right">
        <img src="./image/gif.webp">
      </div>
    </div>
  </d2-container>
</template>

<script>
import helper from './helper'

export default {
  data () {
    return {
      helper,
      banner: {
        title: 'D2 CRUD PLUS',
        subTitle: 'D2 Crud Plus 是一个面向配置的Crud开发框架，辅助d2-crud和d2-crud-x，让开发crud更简单',
        link: 'https://github.com/greper/d2-crud-plus'
      }
    }
  }
}
</script>

<style lang="scss">
.exampleBox{
  display: flex;
  align-items:center;
  height:420px;
  width:90%;
  padding:5px;
  margin:auto;
  justify-content: center;
.left{
  height:100%;
  overflow-y: hidden;
  border: 1px solid #aaa;
}
.icon{
  width:120px;
  display: flex;
  flex-direction:  column;
  align-items:center;
  i{font-size: 50px;}
}
.right{
  height:100%;
img{
  height:100%;
}
}
.d2-highlight{
  font-size: 8px;
}
}

</style>
