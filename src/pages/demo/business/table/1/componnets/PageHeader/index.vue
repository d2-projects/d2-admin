<template>
  <el-form
    :inline="true"
    :model="form"
    :rules="rules"
    ref="form"
    size="mini"
    style="margin-bottom: -18px;">

    <el-form-item label="状态" prop="type">
      <el-select
        v-model="form.type"
        placeholder="状态选择"
        style="width: 100px;">
        <el-option label="状态 1" value="1"/>
        <el-option label="状态 2" value="2"/>
        <el-option label="状态 3" value="3"/>
        <el-option label="状态 4" value="4"/>
        <el-option label="状态 5" value="5"/>
      </el-select>
    </el-form-item>

    <el-form-item label="用户" prop="user">
      <el-input
        v-model="form.user"
        placeholder="用户"
        style="width: 100px;"/>
    </el-form-item>

    <el-form-item label="卡密" prop="key">
      <el-input
        v-model="form.key"
        placeholder="卡密"
        style="width: 120px;"/>
    </el-form-item>

    <el-form-item label="备注" prop="note">
      <el-input
        v-model="form.note"
        placeholder="备注"
        style="width: 120px;"/>
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        @click="handleFormSubmit">
        <d2-icon name="search"/>
        查询
      </el-button>
    </el-form-item>

    <el-form-item>
      <el-button
        @click="handleFormReset">
        <d2-icon name="refresh"/>
        重置
      </el-button>
    </el-form-item>

  </el-form>
</template>

<script>
export default {
  data () {
    return {
      form: {
        type: '1',
        user: 'FairyEver',
        key: '',
        note: ''
      },
      rules: {
        type: [ { required: true, message: '请选择一个状态', trigger: 'change' } ],
        user: [ { required: true, message: '请输入用户', trigger: 'change' } ]
      }
    }
  },
  methods: {
    handleFormSubmit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$emit('submit', this.form)
        } else {
          this.$notify.error({
            title: '错误',
            message: '表单校验失败'
          })
          return false
        }
      })
    },
    handleFormReset () {
      this.$refs.form.resetFields()
    }
  }
}
</script>
