<template>
  <d2-container class="page">
    <template slot="header">持久化存储公用数据（所有用户共享）</template>
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
import day from 'dayjs'
import { mapMutations } from 'vuex'
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
    ...mapMutations([
      'd2adminUtilDatabase',
      'd2adminUtilDatabaseClear'
    ]),
    /**
     * 加载本地数据
     */
    load () {
      this.d2adminUtilDatabase(database => {
        this.dataDisplay = JSON.stringify(database.value(), null, 2)
        this.keyNameList = Object.keys(database.value()).map(k => ({
          value: k,
          label: k
        }))
      })
    },
    /**
     * 删除一个字段
     */
    handleDelete (name) {
      this.d2adminUtilDatabase(database => {
        database
          .unset(name)
          .write()
      })
      this.load()
      this.keyNameToDelete = ''
    },
    /**
     * 清空当前用户的数据
     */
    handleClear () {
      this.d2adminUtilDatabaseClear()
      this.load()
    },
    /**
     * 添加一个数据
     */
    handleSet () {
      if (this.keyNameToSet === '') {
        this.$message.error('字段名不能为空')
        return
      }
      this.d2adminUtilDatabase(database => {
        database
          .set(this.keyNameToSet, this.valueToSet)
          .write()
      })
      this.load()
    },
    /**
     * 添加一个随机数据
     */
    handleSetRandom () {
      this.d2adminUtilDatabase(database => {
        const id = day().valueOf()
        database
          .set(id, Math.round(id * Math.random()))
          .write()
      })
      this.load()
    }
  }
}
</script>
