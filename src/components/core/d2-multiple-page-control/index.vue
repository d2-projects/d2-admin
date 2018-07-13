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
          this.handleCloseAllTagLeft()
          break
        case 'right':
          this.handleCloseAllTagRight()
          break
        case 'other':
          this.handleCloseAllTagOther()
          break
        case 'all':
          this.handleCloseAllTag()
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
      this.closeAllTag()
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
     * @description 点击 tab 上的删除按钮后首先触发这里
     */
    handleTabsEdit (tagName, action) {
      if (action === 'remove') {
        // 首页的删除按钮已经隐藏 因此这里不用判断是 index
        this.closeTag(tagName)
      }
    },
    /**
     * @description 关闭左侧的 tag
     */
    handleCloseAllTagLeft () {
      this.d2adminTagCloseLeft()
    },
    /**
     * @description 关闭右侧的 tag
     */
    handleCloseAllTagRight () {
      this.d2adminTagCloseRight()
    },
    /**
     * @description 关闭其它的 tag
     */
    handleCloseAllTagOther () {
      this.d2adminTagCloseOther()
    },
    /**
     * @description 关闭全部的 tag
     */
    handleCloseAllTag () {
      this.d2adminTagCloseAll(this)
    },
    /**
     * @description 关闭一个指定的 tag
     */
    closeTag (tagName) {
      // 下个新的页面
      let newPage = this.pageOpenedList[0]
      // 如果关闭的页面就是当前显示的页面
      if (this.pageCurrent === tagName) {
        // 去找一个新的页面
        let len = this.pageOpenedList.length
        for (let i = 1; i < len; i++) {
          if (this.pageOpenedList[i].name === tagName) {
            if (i < len - 1) {
              newPage = this.pageOpenedList[i + 1]
            } else {
              newPage = this.pageOpenedList[i - 1]
            }
            break
          }
        }
      }
      this.$store.commit('d2adminTagClose', tagName)
      if (this.pageCurrent === tagName) {
        const { name = '', argu = {}, query = {} } = newPage
        let routerObj = {
          name,
          params: argu,
          query
        }
        this.$router.push(routerObj)
      }
    }
  }
}
</script>