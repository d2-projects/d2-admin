<template>
  <d2-container>

    <h1 class="d2-mt-0">基础用法</h1>
    <el-input v-model="input" placeholder="请输入内容" class="input-demo-200"></el-input>

    <h1>禁用状态</h1>
    <el-input
      placeholder="请输入内容"
      v-model="input1"
      :disabled="true"
      class="input-demo-200">
    </el-input>
    <h1>可清空</h1>
    <el-input
      placeholder="请输入内容"
      v-model="input10"
      clearable
      class="input-demo-200">
    </el-input>

    <h1>带 icon 的输入框</h1>
    <el-row>
      <el-col :span="12">
        <p class="d2-mt-0">属性方式</p>
        <el-input
          placeholder="请选择日期"
          suffix-icon="el-icon-date"
          v-model="input2"
          class="input-demo-200 d2-mr-10">
        </el-input>
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="input21"
          class="input-demo-200 d2-mt-10">
        </el-input>
      </el-col>
      <el-col :span="12">
        <p class="d2-mt-0">slot 方式</p>
        <el-input
          placeholder="请选择日期"
          v-model="input22"
          class="input-demo-200 d2-mr-10">
          <i slot="suffix" class="el-input__icon el-icon-date"></i>
        </el-input>
        <el-input
          placeholder="请输入内容"
          v-model="input23"
          class="input-demo-200 d2-mt-10">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
    </el-row>

    <h1>文本域</h1>
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
      v-model="textarea"
      class="input-demo-400">
    </el-input>

    <h1>可自适应文本高度的文本域</h1>
    <div>
      <el-input
        type="textarea"
        autosize
        placeholder="请输入内容"
        v-model="textarea2"
        class="input-demo-400">
      </el-input>
    </div>
    <div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入内容"
        v-model="textarea3"
        class="d2-mt-10 input-demo-400">
      </el-input>
    </div>

    <h1>复合型输入框</h1>
    <div>
      <el-input placeholder="请输入内容" v-model="input3" class="input-demo-400">
        <template slot="prepend">Http://</template>
      </el-input>
    </div>
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" v-model="input4" class="input-demo-400">
        <template slot="append">.com</template>
      </el-input>
    </div>
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" v-model="input5" class="input-demo-400">
        <el-select v-model="select" slot="prepend" placeholder="请选择" style="width: 120px;">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>

    <h1>尺寸</h1>
    <div>
      <el-input
        placeholder="请输入内容"
        suffix-icon="el-icon-date"
        v-model="input6"
        class="input-demo-200 d2-mr-10">
      </el-input>
      <el-input
        size="medium"
        placeholder="请输入内容"
        suffix-icon="el-icon-date"
        v-model="input7"
        class="input-demo-200 d2-mr-10">
      </el-input>
      <el-input
        size="small"
        placeholder="请输入内容"
        suffix-icon="el-icon-date"
        v-model="input8"
        class="input-demo-200 d2-mr-10">
      </el-input>
      <el-input
        size="mini"
        placeholder="请输入内容"
        suffix-icon="el-icon-date"
        v-model="input9"
        class="input-demo-200">
      </el-input>
    </div>

    <h1>输入建议</h1>
    <el-row class="demo-autocomplete">
      <el-col :span="12">
        <p class="d2-mt-0">激活即列出输入建议</p>
        <el-autocomplete
          class="input-demo-200"
          v-model="state1"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          @select="handleSelect">
        </el-autocomplete>
      </el-col>
      <el-col :span="12">
        <p class="d2-mt-0">输入后匹配输入建议</p>
        <el-autocomplete
          class="input-demo-200"
          v-model="state2"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          :trigger-on-focus="false"
          @select="handleSelect">
        </el-autocomplete>
      </el-col>
    </el-row>

    <h1>自定义模板</h1>
    <el-autocomplete
      v-model="state3"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      @select="handleSelect"
      class="input-demo-400">
      <i
        class="el-icon-edit el-input__icon"
        slot="suffix"
        @click="handleIconClick">
      </i>
      <template slot-scope="{ item }">
        <div style="text-overflow: ellipsis; overflow: hidden;">{{ item.value }}</div>
        <span style="font-size: 12px; color: #b4b4b4;">{{ item.address }}</span>
      </template>
    </el-autocomplete>

    <h1>远程搜索</h1>
    <el-autocomplete
      v-model="state4"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入内容"
      @select="handleSelect"
      class="input-demo-200">
    </el-autocomplete>

  </d2-container>
</template>

<script>
export default {
  data () {
    return {
      textarea: '',
      textarea2: '',
      textarea3: '',
      input: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      input7: '',
      input8: '',
      input9: '',
      input10: '',
      input21: '',
      input22: '',
      input23: '',
      select: '',
      restaurants: [],
      state1: '',
      state2: '',
      state3: '',
      state4: '',
      timeout: null
    }
  },
  methods: {
    querySearch (queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter (queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    loadAll () {
      return [
        { value: '三全鲜食（北新泾店）', address: '长宁区新渔路144号' },
        { value: 'Hot honey 首尔炸鸡（仙霞路）', address: '上海市长宁区淞虹路661号' },
        { value: '新旺角茶餐厅', address: '上海市普陀区真北路988号创邑金沙谷6号楼113' },
        { value: '泷千家(天山西路店)', address: '天山西路438号' },
        { value: '胖仙女纸杯蛋糕（上海凌空店）', address: '上海市长宁区金钟路968号1幢18号楼一层商铺18-101' },
        { value: '贡茶', address: '上海市长宁区金钟路633号' },
        { value: '豪大大香鸡排超级奶爸', address: '上海市嘉定区曹安公路曹安路1685号' },
        { value: '茶芝兰（奶茶，手抓饼）', address: '上海市普陀区同普路1435号' },
        { value: '十二泷町', address: '上海市北翟路1444弄81号B幢-107' },
        { value: '星移浓缩咖啡', address: '上海市嘉定区新郁路817号' },
        { value: '阿姨奶茶/豪大大', address: '嘉定区曹安路1611号' },
        { value: '新麦甜四季甜品炸鸡', address: '嘉定区曹安公路2383弄55号' },
        { value: 'Monica摩托主题咖啡店', address: '嘉定区江桥镇曹安公路2409号1F，2383弄62号1F' },
        { value: '浮生若茶（凌空soho店）', address: '上海长宁区金钟路968号9号楼地下一层' },
        { value: 'NONO JUICE  鲜榨果汁', address: '上海市长宁区天山西路119号' },
        { value: 'CoCo都可(北新泾店）', address: '上海市长宁区仙霞西路' },
        { value: '快乐柠檬（神州智慧店）', address: '上海市长宁区天山西路567号1层R117号店铺' },
        { value: 'Merci Paul cafe', address: '上海市普陀区光复西路丹巴路28弄6号楼819' },
        { value: '猫山王（西郊百联店）', address: '上海市长宁区仙霞西路88号第一层G05-F01-1-306' },
        { value: '枪会山', address: '上海市普陀区棕榈路' },
        { value: '纵食', address: '元丰天山花园(东门) 双流路267号' },
        { value: '钱记', address: '上海市长宁区天山西路' },
        { value: '壹杯加', address: '上海市长宁区通协路' },
        { value: '唦哇嘀咖', address: '上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元' },
        { value: '爱茜茜里(西郊百联)', address: '长宁区仙霞西路88号1305室' },
        { value: '爱茜茜里(近铁广场)', address: '上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺' },
        { value: '鲜果榨汁（金沙江路和美广店）', address: '普陀区金沙江路2239号金沙和美广场B1-10-6' },
        { value: '开心丽果（缤谷店）', address: '上海市长宁区威宁路天山路341号' },
        { value: '超级鸡车（丰庄路店）', address: '上海市嘉定区丰庄路240号' },
        { value: '妙生活果园（北新泾店）', address: '长宁区新渔路144号' },
        { value: '香宜度麻辣香锅', address: '长宁区淞虹路148号' },
        { value: '凡仔汉堡（老真北路店）', address: '上海市普陀区老真北路160号' },
        { value: '港式小铺', address: '上海市长宁区金钟路968号15楼15-105室' },
        { value: '蜀香源麻辣香锅（剑河路店）', address: '剑河路443-1' },
        { value: '北京饺子馆', address: '长宁区北新泾街道天山西路490-1号' },
        { value: '饭典*新简餐（凌空SOHO店）', address: '上海市长宁区金钟路968号9号楼地下一层9-83室' },
        { value: '焦耳·川式快餐（金钟路店）', address: '上海市金钟路633号地下一层甲部' },
        { value: '动力鸡车', address: '长宁区仙霞西路299弄3号101B' },
        { value: '浏阳蒸菜', address: '天山西路430号' },
        { value: '四海游龙（天山西路店）', address: '上海市长宁区天山西路' },
        { value: '樱花食堂（凌空店）', address: '上海市长宁区金钟路968号15楼15-105室' },
        { value: '壹分米客家传统调制米粉(天山店)', address: '天山西路428号' },
        { value: '福荣祥烧腊（平溪路店）', address: '上海市长宁区协和路福泉路255弄57-73号' },
        { value: '速记黄焖鸡米饭', address: '上海市长宁区北新泾街道金钟路180号1层01号摊位' },
        { value: '红辣椒麻辣烫', address: '上海市长宁区天山西路492号' },
        { value: '(小杨生煎)西郊百联餐厅', address: '长宁区仙霞西路88号百联2楼' },
        { value: '阳阳麻辣烫', address: '天山西路389号' },
        { value: '南拳妈妈龙虾盖浇饭', address: '普陀区金沙江路1699号鑫乐惠美食广场A13' }
      ]
    },
    querySearchAsync (queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 3000 * Math.random())
    },
    createStateFilter (queryString) {
      return (state) => {
        return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleSelect (item) {
      console.log(item)
    },
    handleIconClick (ev) {
      console.log(ev)
    }
  },
  mounted () {
    this.restaurants = this.loadAll()
  }
}
</script>

<style lang="scss" scoped>
.page {
  .input-demo-200 {
    width: 200px;
  }
  .input-demo-400 {
    width: 400px;
  }
}
</style>
