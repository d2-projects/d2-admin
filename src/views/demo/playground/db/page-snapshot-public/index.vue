<template>
  <d2-container>
    <template slot="header">
      <el-alert
        type="success"
        :closable="false"
        title="路由快照相当于路由存储一种快捷操作，
          会将传入的 vue instance 携带的 $data 全部持久化，
          下面的表单来自 Element 的表单示例，
          在 D2Admin 的本页示例中你可以随意填写这个表单，
          表单内容会自动实时持久化，
          无论是切换标签页、重新打开标签页、刷新浏览器、重开浏览器、重开浏览器标签页等，
          该页面数据都会自动恢复到上次填写的状态，
          这些都只需要你使用 D2Admin 提供的两个方法，
          总共只需要多写十几行代码"/>
    </template>
    <el-form ref="form" :model="form" label-width="80px" style="max-width: 600px; margin: 0px auto;">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col :span="2" style="text-align: center;">-</el-col>
        <el-col :span="11">
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下活动" name="type"></el-checkbox>
          <el-checkbox label="品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <el-button
      slot="footer"
      type="danger"
      @click="handleClear">
      <d2-icon name="trash-o"/>
      删除当前页面快照
    </el-button>
  </d2-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  async created () {
    const data = await this.pageGet({ instance: this })
    for (const key in data) {
      this[key] = data[key]
    }
  },
  watch: {
    $data: {
      handler () {
        this.pageSet({ instance: this })
      },
      deep: true
    }
  },
  methods: {
    ...mapActions('d2admin/db', [
      'pageSet',
      'pageGet',
      'pageClear'
    ]),
    async handleClear () {
      await this.pageClear({ instance: this })
      this.$message.success('此页面快照已经删除，请重新进入该页面或者关闭选项卡重新打开')
    }
  }
}
</script>
