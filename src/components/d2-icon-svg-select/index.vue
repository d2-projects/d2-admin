<template>
  <span>
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
      <div class="group">
        <el-row>
          <el-col
            v-for="(item, index) in iconFilted"
            :key="index"
            class="icon-item"
            :span="4"
            @click.native="selectIcon(item)">
            <d2-icon-svg :name="item"/>
          </el-col>
        </el-row>
      </div>
    </el-popover>
    <!-- 允许用户输入 -->
    <el-input
      v-if="userInput"
      v-model="currentValue"
      v-bind="bind"
      style="max-width: 240px;">
      <template v-if="value" slot="prepend">
        <d2-icon-svg class="d2-icon-svg--input-preview" :name="value"/>
      </template>
      <el-button v-popover:pop slot="append">
        <i class="fa fa-list"></i>
      </el-button>
    </el-input>
    <!-- 不允许用户输入 -->
    <el-button v-popover:pop v-if="!userInput">
      <span flex="dir:left main:center cross:center">
        <d2-icon-svg v-if="value" class="d2-icon-svg--input-preview d2-mr-10" :name="value"/>
        <span>{{value ? value : placeholder}}</span>
      </span>
    </el-button>
  </span>
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
      return this.$IconSvg.filter(icon => icon.indexOf(this.searchText) >= 0)
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
.d2-icon-svg--input-preview {
  height: 14px;
  width: 14px;
  display: block;
}
.group {
  max-height: 400px;
  overflow-x: hidden;
  overflow-y: scroll;
  margin-top: 10px;
  .icon-item {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $color-text-sub;
    svg {
      height: 20px;
      width: 20px;
    }
    &:hover {
      color: $color-text-main;
      background-color: $color-bg;
      border-radius: 4px;
      box-shadow: inset 0px 0px 0px 1px $color-border-1;
    }
  }
}
</style>
