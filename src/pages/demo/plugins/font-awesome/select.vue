<template>
  <div>
    <el-card class="dd-mb">
      <p class="dd-mt-0">禁止用户输入 可以清空 icon = {{icon}}</p>
      <IconSelect v-model="icon"></IconSelect>
      <p>禁止用户输入 不可以清空 icon2 = {{icon2}}</p>
      <IconSelect v-model="icon2" :clearable="false"></IconSelect>
      <p>用户可以输入 可以清空 icon3 = {{icon3}}</p>
      <IconSelect v-model="icon3" :user-input="true"></IconSelect>
      <p>用户可以输入 不可以清空 icon4 = {{icon4}}</p>
      <IconSelect v-model="icon4" :user-input="true" :clearable="false"></IconSelect>
    </el-card>
    <el-card>
      <Markdown url="/static/markdownFiles/article/图标选择组件使用方法.md"></Markdown>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      icon: '',
      icon2: '',
      icon3: '',
      icon4: ''
    }
  }
}
</script>

