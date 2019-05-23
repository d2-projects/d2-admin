<template>
  <d2-container>
    <template slot="header">svg 图标选择器</template>
    <div class="d2-mb">
      <p class="d2-mt-0 d2-mb-10">一般用法 | {{icon || '未选择'}}</p>
      <d2-icon-svg-select v-model="icon"/>
    </div>
    <div class="d2-mb">
      <p class="d2-mt-0 d2-mb-10">用户可以输入 | {{icon2 || '未选择'}}</p>
      <d2-icon-svg-select v-model="icon2" :user-input="true"/>
    </div>
  </d2-container>
</template>

<script>
export default {
  data () {
    return {
      icon: '',
      icon2: ''
    }
  }
}
</script>
