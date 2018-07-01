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
            :label="page.name"
            :name="page.name">
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="d2-multiple-page-control-btn">
      <el-dropdown split-button @click="handleClick">
        <d2-icon name="trash"/>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>关闭左侧</el-dropdown-item>
          <el-dropdown-item>关闭右侧</el-dropdown-item>
          <el-dropdown-item>全部关闭</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
    handleTabsEdit(tagName, action) {
      if (action === 'remove') {
        if (tagName !== 'index') {
          this.closeTag(tagName)
        }
      }
    },
    /**
     * 关闭一个指定的 tag
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
      } else {
        // 关闭的页面不是当前的页面
        // 这里暂时不需要做什么
      }
      this.$store.commit('d2adminTagClose', tagName)
      if (this.pageCurrent === tagName) {
        this.linkTo(newPage)
      }
    },
    // TODO: 需要完善赋值
    linkTo ({ name, argu, query }) {
      let routerObj = {
        name,
        params: argu || {},
        query
      }
      this.$router.push(routerObj)
    }
  }
}
</script>