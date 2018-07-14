<template>
  <div class="d2-multiple-page-control-group">
    <div class="d2-multiple-page-control-content">
      <div class="d2-multiple-page-control-content-inner">
        <el-tabs
          class="d2-multiple-page-control"
          :value="pageCurrent"
          type="card"
          :closable="true"
          @tab-click="handleClick"
          @edit="handleTabsEdit">
          <el-tab-pane
            v-for="(page, index) in pageOpenedList"
            :key="index"
            :label="page.meta.title || '未命名'"
            :name="page.name">
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="d2-multiple-page-control-btn">
      <el-dropdown
        split-button
        @click="handleControlBtnClick"
        @command="handleControlItemClick">
        <d2-icon name="times-circle"/>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="left">
            <d2-icon name="arrow-left" class="d2-mr-10"/>
            关闭左侧
          </el-dropdown-item>
          <el-dropdown-item command="right">
            <d2-icon name="arrow-right" class="d2-mr-10"/>
            关闭右侧
          </el-dropdown-item>
          <el-dropdown-item command="other">
            <d2-icon name="times" class="d2-mr-10"/>
            关闭其它
          </el-dropdown-item>
          <el-dropdown-item command="all">
            <d2-icon name="times-circle" class="d2-mr-10"/>
            全部关闭
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  computed: {
    ...mapState({
      pageOpenedList: state => state.d2admin.pageOpenedList,
      pageCurrent: state => state.d2admin.pageCurrent
    })
  },
  methods: {
    ...mapMutations([
      'd2adminTagCloseLeft',
      'd2adminTagCloseRight',
      'd2adminTagCloseOther',
      'd2adminTagCloseAll'
    ]),
    /**
     * @description 接收点击关闭控制上选项的事件
     */
    handleControlItemClick (command) {
      switch (command) {
        case 'left':
          this.d2adminTagCloseLeft()
          break
        case 'right':
          this.d2adminTagCloseRight()
          break
        case 'other':
          this.d2adminTagCloseOther()
          break
        case 'all':
          this.d2adminTagCloseAll(this)
          break
        default:
          this.$message.error('无效的操作')
          break
      }
    },
    /**
     * @description 接收点击关闭控制上按钮的事件 暂时这个按钮还只有关闭全部标签的功能
     */
    handleControlBtnClick () {
      this.d2adminTagCloseAll(this)
    },
    /**
     * @description 接收点击 tab 标签的事件
     */
    handleClick (tab, event) {
      const page = this.pageOpenedList.find(page => page.name === tab.name)
      if (page) {
        this.$router.push({
          name: page.name,
          params: page.argu,
          query: page.query
        })
      }
    },
    /**
     * @description 点击 tab 上的删除按钮后首先触发这里 首页的删除按钮已经隐藏 因此这里不用判断是 index
     */
    handleTabsEdit (tagName, action) {
      if (action === 'remove') {
        this.$store.commit('d2adminTagClose', {
          tagName,
          vm: this
        })
      }
    }
  }
}
</script>