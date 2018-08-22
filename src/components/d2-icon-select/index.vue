<template>
  <div>
    <el-popover
      ref="pop"
      v-model="pop"
      :placement="placement"
      width="300"
      trigger="click">
      <div class="header d2-clearfix d2-mb-10" v-if="clearable">
        <el-button type="danger" icon="el-icon-delete" size="mini" class="d2-fr" @click="selectIcon()">清空</el-button>
      </div>
      <el-input
        v-model="searchText"
        :clearable="true"
        placeholder="搜索 比如 'plus'"
        prefix-icon="el-icon-search">
      </el-input>
      <el-collapse v-if="!searchMode" class="group" v-model="collapseActive">
        <el-collapse-item v-for="(item, index) in icon" :key="index" :title="item.title" :name="index" class="class">
          <el-row class="class-row">
            <el-col class="class-col" v-for="(iconName, iconIndex) in item.icon" :key="iconIndex" :span="4" @click.native="selectIcon(iconName)">
              <i :class="'fa fa-' + iconName"></i>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
      <div v-if="searchMode" class="group">
        <div class="class" v-for="(item, index) in iconFilted" :key="index">
          <div class="class-title">{{item.title}}</div>
          <el-row class="class-row">
            <el-col class="class-col" v-for="(iconName, iconIndex) in item.icon" :key="iconIndex" :span="4" @click.native="selectIcon(iconName)">
              <i :class="'fa fa-' + iconName"></i>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-popover>
    <!-- 允许用户输入 -->
    <el-input
      v-if="userInput"
      v-model="currentValue"
      v-bind="bind"
      style="max-width: 240px;">
      <template v-if="value" slot="prepend">
        <i :class="'fa fa-' + value"></i>
      </template>
      <el-button v-popover:pop slot="append">
        <i class="fa fa-list"></i>
      </el-button>
    </el-input>
    <!-- 不允许用户输入 -->
    <el-button v-popover:pop v-if="!userInput">
      <template v-if="value">
        <i :class="'fa fa-' + value"></i>
      </template>
      {{value ? value : placeholder}}
    </el-button>
  </div>
</template>

<script>
import icon from './data/index'
export default {
  name: 'd2-icon-select',
  props: {
    // 值
    value: {
      type: String,
      required: false,
      default: ''
    },
    // 占位符
    placeholder: {
      type: String,
      required: false,
      default: '请选择'
    },
    // 弹出界面的方向
    placement: {
      type: String,
      required: false,
      default: 'right'
    },
    // 是否可清空
    clearable: {
      type: Boolean,
      required: false,
      default: true
    },
    // 是否允许用户输入
    userInput: {
      type: Boolean,
      required: false,
      default: false
    },
    // 是否在选择后自动关闭
    autoClose: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data () {
    return {
      // 绑定弹出框
      pop: false,
      // 所有图标
      icon,
      // 组件内输入框的值
      currentValue: '',
      // 搜索的文字
      searchText: '',
      // 不是搜索的时候显示的折叠面板绑定的展开数据
      collapseActive: []
      // collapseActive: [...Array(icon.length)].map((e, i) => i)
    }
  },
  computed: {
    // 输入框上绑定的设置
    bind () {
      return {
        placeholder: this.placeholder,
        clearable: this.clearable,
        ...this.$attrs
      }
    },
    // 是否在搜索
    searchMode () {
      return !!this.searchText
    },
    // 过滤后的图标
    iconFilted () {
      return this.icon.map(iconClass => ({
        title: iconClass.title,
        icon: iconClass.icon.filter(icon => icon.indexOf(this.searchText) >= 0)
      })).filter(iconClass => iconClass.icon.length > 0)
    }
  },
  watch: {
    value (value) {
      this.currentValue = value
    },
    currentValue (value) {
      this.selectIcon(value)
    }
  },
  created () {
    this.currentValue = this.value
  },
  methods: {
    selectIcon (iconName = '') {
      this.$emit('input', iconName)
      if (iconName && this.autoClose) {
        this.pop = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.group {
  max-height: 400px;
  overflow-x: hidden;
  overflow-y: scroll;
  border-top: none;
  border-bottom: none;
  .class {
    .class-title {
      line-height: 30px;
      text-align: center;
      background-color: $color-bg;
      border-radius: 4px;
      margin: 10px 0px;
    }
    .class-row {
      .class-col {
        line-height: 40px;
        text-align: center;
        color: $color-text-sub;
        &:hover {
          color: $color-text-main;
          background-color: $color-bg;
          border-radius: 4px;
          font-size: 26px;
          box-shadow: inset 0px 0px 0px 1px $color-border-1;
        }
      }
    }
  }
}
</style>
