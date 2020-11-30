<template>
  <d2-container>
    <template slot="header">
      <el-alert
        type="success"
        :closable="false"
        title="路由存储指当前路由的存储区域，
          不同路由之间存储不会相互干扰，
          使用 await this.$store.dispatch('d2admin/db/databasePage') 获得存储实例进行操作，
          不同路由条件下获取的存储实例指向位置不同，
          可以指定路由区分依据 name | path | fullPath，
          默认根据路由的 name 区分不同的路由"/>
    </template>
    <el-row>
      <el-col :span="12">
        <p class="d2-mt-0">增加不重复字段</p>
        <el-button @click="handleSetRandom">增加</el-button>
        <p>增加自定义字段</p>
        <el-input v-model="keyNameToSet" placeholder="字段名" class="d2-mr-5" style="width: 100px;"/>
        <el-input v-model="valueToSet" placeholder="值" class="d2-mr-5" style="width: 100px;"/>
        <el-button @click="handleSet">增加</el-button>
        <p>删除字段</p>
        <el-select
          v-model="keyNameToDelete"
          placeholder="请选择要删除的 key">
          <el-option
            v-for="item in keyNameList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <p>清空当前用户数据</p>
        <el-button @click="handleClear">清空</el-button>
      </el-col>
      <el-col :span="12">
        <d2-highlight :code="dataDisplay"/>
      </el-col>
    </el-row>
  </d2-container>
</template>

<script>
import { uniqueId } from 'lodash'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      dataDisplay: '',
      keyNameToSet: '',
      valueToSet: '',
      keyNameList: [],
      keyNameToDelete: ''
    }
  },
  watch: {
    keyNameToDelete (value) {
      if (value) {
        this.handleDelete(value)
      }
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    ...mapActions('d2admin/db', [
      'databasePage',
      'databasePageClear'
    ]),
    /**
     * 加载本地数据
     */
    async load () {
      const db = await this.databasePage()
      this.dataDisplay = JSON.stringify(db.value(), null, 2)
      this.keyNameList = Object.keys(db.value()).map(k => ({
        value: k,
        label: k
      }))
    },
    /**
     * 删除一个字段
     */
    async handleDelete (name) {
      const db = await this.databasePage()
      db
        .unset(name)
        .write()
      this.load()
      this.keyNameToDelete = ''
    },
    /**
     * 清空当前用户的数据
     */
    async handleClear () {
      await this.databasePageClear()
      this.load()
    },
    /**
     * 添加一个数据
     */
    async handleSet () {
      if (this.keyNameToSet === '') {
        this.$message.error('字段名不能为空')
        return
      }
      const db = await this.databasePage()
      db
        .set(this.keyNameToSet, this.valueToSet)
        .write()
      this.load()
    },
    /**
     * 添加一个随机数据
     */
    async handleSetRandom () {
      const id = uniqueId()
      const db = await this.databasePage()
      db
        .set(`uniqueKey${id}`, `value${id}`)
        .write()
      this.load()
    }
  }
}
</script>
