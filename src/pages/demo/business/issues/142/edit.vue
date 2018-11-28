<template>
  <d2-container
    type="card"
    class="demo-business-issues-142-edit">
    <template slot="header">编辑 id: {{id}}</template>
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
      class="demo-business-issues-142-edit--form">
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
import { get } from '@/api/demo/business/issues/142'
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      form: {
        name: '',
        address: ''
      }
    }
  },
  // 第一次进入或从其他组件对应路由进入时触发
  beforeRouteEnter (to, from, next) {
    const id = to.params.id
    if (id) {
      next(vm => {
        vm.resetFormData()
        vm.getFormData(id)
      })
    }
    else {
      next(new Error('未指定ID'))
    }
  },
  // 在同一组件对应的多个路由间切换时触发
  beforeRouteUpdate (to, from, next) {
    const id = to.params.id
    if (id) {
      this.resetFormData()
      this.getFormData(id)
      next()
    } else {
      next(new Error('未指定ID'))
    }
  },
  methods: {
    // [业务逻辑] 重置表单
    resetFormData () {
      this.form = {
        name: '',
        address: ''
      }
    },
    // [业务逻辑] 根据 id 获取数据
    getFormData (id) {
      get(id)
        .then(res => {
          const { name, address } = res
          this.form = { name, address }
        })
        .catch(err => {
          console.log('err', err)
        })
    },
    // [业务逻辑] 提交
    handleSubmit () {
      this.$notify({
        title: 'Submit',
        message: '提交了表单',
        type: 'success'
      })
    }
  }
}
</script>

<style lang="scss">
.demo-business-issues-142-edit {
  .demo-business-issues-142-edit--form {
    max-width: 460px;
    margin: 0px auto;
  }
}
</style>
