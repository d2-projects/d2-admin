/* eslint-disable */
import Mock from 'mockjs'
export default {
  data () {
    return {
      // 测试函数
      fn: {
        title: '函数',
        code: `{
  "name": "FairyEver",
  "say": function() {
    return 'I AM ' + this.name
  }
}`,
        json: {
          "name": "FairyEver",
          "say": function() {
            return 'I AM ' + this.name
          }
        },
        mocked: ''
      }
    }
  },
  methods: {
    fnMock () {
      this.fn.mocked = JSON.stringify(Mock.mock(this.fn.json), null, 2)
    }
  }
}
