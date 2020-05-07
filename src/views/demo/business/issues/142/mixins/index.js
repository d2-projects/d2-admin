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
  methods: {
    // [业务逻辑] 重置表单
    resetFormData () {
      this.form = {
        name: '',
        address: ''
      }
    },
    // [业务逻辑] 根据 id 获取数据
    async getFormData (id) {
      // 重置表单
      this.resetFormData()
      // 请求数据
      try {
        const res = await this.$api.DEMO_BUSINESS_ISSUE_142_DETAIL(id)
        const { name, address } = res
        this.form = { name, address }
        this.$message.success('getFormData')
      } catch (error) {
        console.log('error', error)
      }
    },
    // [业务逻辑] 提交
    handleSubmit () {
      this.$notify({
        title: 'Submit',
        message: '提交了表单',
        type: 'info'
      })
    }
  }
}
