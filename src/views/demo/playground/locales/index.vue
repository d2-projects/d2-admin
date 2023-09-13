<template>
  <d2-container>
    <p class="d2-mt-0">
      <el-radio-group v-model="$i18n.locale">
        <el-radio-button
          v-for="language in $languages"
          :key="language.value"
          :label="language.value">
          {{ language.label }}
        </el-radio-button>
      </el-radio-group>
    </p>
    <el-alert
      :title="$t('page.demo.playground.locales.text')"
      type="success">
    </el-alert>
    <d2-link-btn
      slot="footer"
      title="文档"
      link="https://d2.pub/doc/d2-admin/locales"/>
  </d2-container>
</template>
