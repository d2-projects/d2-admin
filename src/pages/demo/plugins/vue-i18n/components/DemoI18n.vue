<i18n src="./lang.json"></i18n>

<template>
  <div>
    <p>{{$t('subtitle')}}</p>
    <el-tag>{{$t('hello')}}</el-tag>
    <p>{{$t('vue')}}</p>
    <p>{{$t('check.title')}}</p>
    <el-checkbox-group v-model="check">
      <el-checkbox label="a">{{$t('check.label.Beijing')}}</el-checkbox>
      <el-checkbox label="b">{{$t('check.label.Tokyo')}}</el-checkbox>
      <el-checkbox label="c">{{$t('check.label.NewYork')}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      check: ['a', 'b']
    }
  }
}
</script>

