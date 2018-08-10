<template>
  <d2-container>
    <template slot="header">header</template>
    <el-alert
      :title="alertTitle"
      type="success"
      :closable="false"
      class="d2-mb"/>
    <el-row :gutter="10">
      <el-col :span="12">
        <el-row :gutter="10">
          <el-col :span="12">
            <p class="d2-mt-0">dbName</p>
            <el-input v-model="dbName" placeholder="dbName" disabled/>
          </el-col>
          <el-col :span="12">
            <p class="d2-mt-0">path</p>
            <el-input v-model="path" placeholder="path" disabled/>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="12">
            <p>key</p>
            <el-input v-model="key" placeholder="key"/>
          </el-col>
          <el-col :span="12">
            <p>value</p>
            <el-input v-model="value" placeholder="value"/>
          </el-col>
        </el-row>
        <p>存储</p>
        <el-button @click="handleSet" class="d2-mb-10">保存 {{key}} = "{{value}}"</el-button>
        <br>
        <el-button @click="handleSetByUser">保存 {{key}} = "{{value}}" 当前用户</el-button>
        <p>取值</p>
        <el-button @click="handleGet" class="d2-mb-10">取值 key = "{{key}}"</el-button>
        <br>
        <el-button @click="handleGetByUser">取值 key = "{{key}}" 当前用户</el-button>
      </el-col>
      <el-col :span="12">
        <el-card shadow="never">
          <template slot="header">db.get('{{dbName}}').value()</template>
          <div style="height: 400px; overflow: auto;">
            <d2-highlight :code="dbData"/>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </d2-container>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'
import db from '@/libs/db.js'
export default {
  data () {
    return {
      dbName: 'db',
      path: 'sandbox.demo-playground-db-util',
      key: 'demoKey',
      value: 'demo text',
      dbData: ''
    }
  },
  mounted () {
    this.load()
  },
  computed: {
    alertTitle () {
      return `依据当前设置，数据将会在 "${this.dbName}" 数据库下的 "${this.path}.${this.key}" 路径下更新，请在右侧数据中查看`
    }
  },
  methods: {
    ...mapMutations('d2admin/db', [
      'set',
      'setByUser'
    ]),
    ...mapActions('d2admin/db', [
      'get',
      'getByUser'
    ]),
    load () {
      this.dbData = JSON.stringify(db.get(this.dbName).value(), null, 2)
    },
    handleSet () {
      this.set({
        dbName: this.dbName,
        path: `${this.path}.${this.key}`,
        value: this.value
      })
      this.load()
    },
    handleSetByUser () {
      this.setByUser({
        dbName: this.dbName,
        path: `${this.path}.${this.key}`,
        value: this.value
      })
      this.load()
    },
    async handleGet () {
      const value = await this.get({
        dbName: this.dbName,
        path: `${this.path}.${this.key}`
      })
      this.$alert(`value: ${value}`, `${this.dbName}.${this.path}.${this.key}`)
    },
    async handleGetByUser () {
      const value = await this.getByUser({
        dbName: this.dbName,
        path: `${this.path}.${this.key}`
      })
      this.$alert(`value: ${value}`, `${this.dbName}.${this.path}.${this.key}`)
    }
  }
}
</script>
