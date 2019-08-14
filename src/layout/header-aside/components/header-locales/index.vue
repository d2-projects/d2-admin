<template>
  <el-dropdown
    placement="bottom"
    size="small"
    @command="onChangeLocale">
    <el-button class="d2-mr btn-text can-hover" type="text">
      <d2-icon name="language" style="font-size: 16px;"/>
    </el-button>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="(language, index) in $languages"
        :key="index"
        :command="language.value">
        <d2-icon :name="$i18n.locale === language.value ? 'dot-circle-o' : 'circle-o'" class="d2-mr-5"/>
        {{ language.label }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  methods: {
    onChangeLocale (command) {
      this.$i18n.locale = command
      this.$notify({
        title: '提示',
        dangerouslyUseHTMLString: true,
        message: `当前语言：${this.$t('_name')} [ ${this.$i18n.locale} ]<br/>仅提供切换功能，没有具体的语言设置`
      })
    }
  }  
}
</script>
