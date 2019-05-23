<template>
  <d2-container>
    <el-row>
      <el-col :span="12">

        <h1 class="d2-mt-0">基础用法</h1>
        <el-row>
          <el-radio v-model="radio" label="1">备选项</el-radio>
          <el-radio v-model="radio" label="2">备选项</el-radio>
        </el-row>

        <h1>禁用状态</h1>
        <el-row>
          <el-radio disabled v-model="radio" label="1">备选项</el-radio>
          <el-radio disabled v-model="radio" label="2">备选项</el-radio>
        </el-row>

        <h1>单选框组</h1>
        <el-row>
          <el-radio-group v-model="radio">
            <el-radio label="1">备选项1</el-radio>
            <el-radio label="2">备选项2</el-radio>
          </el-radio-group>
        </el-row>

        <h1>带有边框</h1>
        <div>
          <el-radio v-model="radio" label="1" border>备选项1</el-radio>
          <el-radio v-model="radio" label="2" border>备选项2</el-radio>
        </div>
        <div style="margin-top: 20px">
          <el-radio v-model="radio" label="1" border size="medium">备选项1</el-radio>
          <el-radio v-model="radio" label="2" border size="medium">备选项2</el-radio>
        </div>
        <div style="margin-top: 20px">
          <el-radio-group v-model="radio" size="small">
            <el-radio label="1" border>备选项1</el-radio>
            <el-radio label="2" border disabled>备选项2</el-radio>
          </el-radio-group>
        </div>
        <div style="margin-top: 20px">
          <el-radio-group v-model="radio" size="mini" disabled>
            <el-radio label="1" border>备选项1</el-radio>
            <el-radio label="2" border>备选项2</el-radio>
          </el-radio-group>
        </div>

      </el-col>
      <el-col :span="12">

        <h1>单选框组</h1>
        <div>
          <el-radio-group v-model="radio2">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
        </div>
        <div style="margin-top: 20px">
          <el-radio-group v-model="radio2" size="medium">
            <el-radio-button label="上海" ></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
        </div>
        <div style="margin-top: 20px">
          <el-radio-group v-model="radio2" size="small">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京" disabled ></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
        </div>
        <div style="margin-top: 20px">
          <el-radio-group v-model="radio2" disabled size="mini">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
        </div>

      </el-col>
    </el-row>
  </d2-container>
</template>

<script>
export default {
  data () {
    return {
      radio: '1',
      radio2: '上海'
    }
  }
}
</script>
