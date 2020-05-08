<template>
  <d2-container
    type="card"
    class="page">
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
      class="page--form">
      <el-form-item label="姓名">
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="地址">
        <el-input type="textarea" v-model="form.address"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">修改</el-button>
      </el-form-item>
    </el-form>
  </d2-container>
</template>

<script>
import { mapActions } from 'vuex'
import base from './mixins/index'
export default {
  mixins: [
    base
  ],
  // 第一次进入或从其他组件对应路由进入时触发
  beforeRouteEnter (to, from, next) {
    const id = to.params.id
    if (id) {
      next(async instance => {
        if (from.name === 'demo-business-issues-142') {
          await instance.getFormData(id)
          instance.saveDataToDb()
        } else {
          instance.loadDataFromDb(to)
        }
      })
    }
  },
  // 在同一组件对应的多个路由间切换时触发
  beforeRouteUpdate (to, from, next) {
    const id = to.params.id
    if (id) {
      this.loadDataFromDb(to)
      next()
    }
  },
  watch: {
    // 表单变化的时候更新持久化
    form: {
      handler () {
        this.saveDataToDb()
      },
      deep: true
    }
  },
  methods: {
    ...mapActions('d2admin/db', [
      'pageSet',
      'pageGet'
    ]),
    // 将页面数据同步到持久化存储
    saveDataToDb () {
      this.pageSet({ instance: this, user: true })
    },
    // 从持久化存储恢复数据到页面
    async loadDataFromDb (to) {
      const instance = {
        $route: {
          fullPath: to.fullPath
        },
        $data: {}
      }
      const data = await this.pageGet({
        instance,
        user: true
      })
      for (const key in data) {
        this[key] = data[key]
      }
      this.$message.success('loadDataFromDb')
    }
  }
}
</script>

<style lang="scss">
.page {
  .page--form {
    max-width: 460px;
  }
}
</style>
