<template>
  <d2-container type="ghost">
    <template slot="header">菜单控制试验台</template>
    <el-row :gutter="20" class="d2-mt d2-mb">
      <el-col :span="12">
        <el-card shadow="never" class="d2-card">
          <template slot="header">顶栏菜单</template>
          <el-button-group class="d2-mb">
            <el-button @click="handleHeaderSet">设置空菜单</el-button>
            <el-button @click="headerReset">恢复</el-button>
          </el-button-group>
          <div style="height: 400px; overflow: auto;">
            <d2-highlight :code="JSON.stringify(header, null, 2)"/>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="never" class="d2-card">
          <template slot="header">侧栏菜单</template>
          <el-button-group class="d2-mb">
            <el-button @click="handleAsideSet">设置空菜单</el-button>
            <el-button @click="asideReset">恢复</el-button>
          </el-button-group>
          <div style="height: 400px; overflow: auto;">
            <d2-highlight :code="JSON.stringify(aside, null, 2)"/>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </d2-container>
</template>

<script>
import clonedeep from 'lodash.clonedeep'
import { mapState, mapMutations } from 'vuex'
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
      'aside'
    ])
  },
  created () {
    this.headerBak = clonedeep(this.header)
    this.asideBak = clonedeep(this.aside)
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
