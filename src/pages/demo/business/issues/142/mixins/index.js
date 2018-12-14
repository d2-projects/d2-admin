import {
  detail
} from '@api/demo.business.issues.142'

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
    getFormData (id) {
      return new Promise((resolve, reject) => {
        // 重置表单
        this.resetFormData()
        // 请求数据
        detail(id)
          .then(res => {
            const { name, address } = res
            this.form = { name, address }
            this.$message.success('getFormData')
            resolve()
          })
          .catch(err => {
            console.log('err', err)
            reject(err)
          })
      })
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
