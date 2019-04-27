<template>
  <d2-container>
    <el-row>
      <el-col :span="12">

        <h1 class="d2-mt-0">基础用法</h1>
        <el-row>
          <el-checkbox v-model="checked1">备选项1</el-checkbox>
          <el-checkbox v-model="checked2">备选项2</el-checkbox>
        </el-row>

        <h1>禁用状态</h1>
        <el-row>
          <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
          <el-checkbox v-model="checked2" disabled>备选项2</el-checkbox>
        </el-row>

        <h1>多选框组</h1>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 B"></el-checkbox>
          <el-checkbox label="复选框 C"></el-checkbox>
          <el-checkbox label="禁用" disabled></el-checkbox>
          <el-checkbox label="选中且禁用" disabled></el-checkbox>
        </el-checkbox-group>

        <h1>indeterminate 状态</h1>
        <el-checkbox :indeterminate="true" label="复选框"></el-checkbox>

        <h1>可选项目数量的限制</h1>
        <el-checkbox-group
          v-model="checkedCities"
          :min="1"
          :max="2">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>

      </el-col>
      <el-col :span="12">

        <h1>按钮样式</h1>
        <div>
          <el-checkbox-group v-model="checkboxGroup1">
            <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
          </el-checkbox-group>
        </div>
        <div style="margin-top: 20px">
          <el-checkbox-group v-model="checkboxGroup1" size="medium">
            <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
          </el-checkbox-group>
        </div>
        <div style="margin-top: 20px">
          <el-checkbox-group v-model="checkboxGroup1" size="small">
            <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}</el-checkbox-button>
          </el-checkbox-group>
        </div>
        <div style="margin-top: 20px">
          <el-checkbox-group v-model="checkboxGroup1" size="mini" disabled>
            <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
          </el-checkbox-group>
        </div>

        <h1>带有边框</h1>
        <div>
          <el-checkbox v-model="checked1" label="备选项1" border></el-checkbox>
          <el-checkbox v-model="checked2" label="备选项2" border></el-checkbox>
        </div>
        <div style="margin-top: 20px">
          <el-checkbox v-model="checked1" label="备选项1" border size="medium"></el-checkbox>
          <el-checkbox v-model="checked2" label="备选项2" border size="medium"></el-checkbox>
        </div>
        <div style="margin-top: 20px">
          <el-checkbox-group v-model="checkboxGroup2" size="small">
            <el-checkbox label="备选项1" border></el-checkbox>
            <el-checkbox label="备选项2" border disabled></el-checkbox>
          </el-checkbox-group>
        </div>
        <div style="margin-top: 20px">
          <el-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
            <el-checkbox label="备选项1" border></el-checkbox>
            <el-checkbox label="备选项2" border></el-checkbox>
          </el-checkbox-group>
        </div>

      </el-col>
    </el-row>
  </d2-container>
</template>

<script>
export default {
  data () {
    return {
      checked1: true,
      checked2: false,
      checkList: ['选中且禁用', '复选框 A'],
      checkedCities: ['上海', '北京'],
      cities: ['上海', '北京', '广州', '深圳'],
      checkboxGroup1: ['上海'],
      checkboxGroup2: []
    }
  }
}
</script>
