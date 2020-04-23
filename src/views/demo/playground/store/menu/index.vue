<template>
  <d2-container>
    <el-tabs>
      <el-tab-pane label="顶栏菜单">
        <el-button-group class="d2-mb">
          <el-button @click="handleHeaderSet">设置顶栏空菜单</el-button>
          <el-button @click="headerReset">恢复顶栏菜单</el-button>
        </el-button-group>
        <d2-highlight :code="JSON.stringify(header, null, 2)"/>
      </el-tab-pane>
      <el-tab-pane label="侧栏菜单">
        <el-button-group class="d2-mb">
          <el-button @click="handleAsideSet">设置侧栏空菜单</el-button>
          <el-button @click="asideReset">恢复侧栏菜单</el-button>
          <el-button @click="asideTransitionToggle()">{{`${asideTransition ? '关闭' : '开启'}侧栏动画效果`}}</el-button>
        </el-button-group>
        <d2-highlight :code="JSON.stringify(aside, null, 2)"/>
      </el-tab-pane>
    </el-tabs>
  </d2-container>
</template>

<script>
import { cloneDeep } from 'lodash'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
      menuEmpty: [
        {
          title: '空菜单演示',
          icon: 'folder-o',
          children: [
            {
              title: '空菜单 1',
              children: [
                { title: '空菜单 1-1' },
                { title: '空菜单 1-2' }
              ]
            },
            { title: '空菜单 2' },
            { title: '空菜单 3' }
          ]
        }
      ],
      headerChanged: false,
      asideChanged: false,
      headerBak: [],
      asideBak: []
    }
  },
  computed: {
    ...mapState('d2admin/menu', [
      'header',
      'aside',
      'asideTransition'
    ])
  },
  created () {
    this.headerBak = cloneDeep(this.header)
    this.asideBak = cloneDeep(this.aside)
  },
  beforeDestroy () {
    if (this.headerChanged && this.asideChanged) {
      this.headerSet(this.headerBak)
      this.asideSet(this.asideBak)
      this.$notify({
        title: '菜单恢复',
        message: '对侧边栏和顶栏菜单的修改已经复原',
        type: 'success'
      })
      return
    }
    if (this.headerChanged) {
      this.headerSet(this.headerBak)
      this.$notify({
        title: '菜单恢复',
        message: '对顶栏菜单的修改已经复原',
        type: 'success'
      })
      return
    }
    if (this.asideChanged) {
      this.asideSet(this.asideBak)
      this.$notify({
        title: '菜单恢复',
        message: '对侧边栏菜单的修改已经复原',
        type: 'success'
      })
    }
  },
  methods: {
    ...mapMutations('d2admin/menu', [
      'headerSet',
      'asideSet'
    ]),
    ...mapActions('d2admin/menu', [
      'asideTransitionToggle'
    ]),
    /**
     * 修改顶栏菜单
     */
    handleHeaderSet () {
      this.headerChanged = true
      this.headerSet(this.menuEmpty)
      this.$notify({
        title: '菜单修改',
        message: '对顶栏菜单的修改已经生效',
        type: 'success'
      })
    },
    /**
     * 修改侧边栏菜单
     */
    handleAsideSet () {
      this.asideChanged = true
      this.asideSet(this.menuEmpty)
      this.$notify({
        title: '菜单修改',
        message: '对侧边栏菜单的修改已经生效',
        type: 'success'
      })
    },
    /**
     * 恢复顶栏菜单
     */
    headerReset () {
      this.headerSet(this.headerBak)
      this.$notify({
        title: '菜单恢复',
        message: '对顶栏菜单的修改已经复原',
        type: 'success'
      })
    },
    /**
     * 恢复侧边栏菜单
     */
    asideReset () {
      this.asideSet(this.asideBak)
      this.$notify({
        title: '菜单恢复',
        message: '对侧边栏菜单的修改已经复原',
        type: 'success'
      })
    }
  }
}
</script>
