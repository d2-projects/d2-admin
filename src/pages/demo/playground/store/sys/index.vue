<template>
  <d2-container type="ghost">
    <template slot="header">version {{releasesVersion}} [ {{releasesUpdate ? '有新版本' : '已经是最新版本'}} ]</template>
    <div class="d2-mt d2-mr">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card shadow="never" class="d2-card d2-mb">
            <template slot="header">顶栏菜单数据</template>
            <div style="height: 300px; overflow: auto;">
              <tree-view
                class="tree-view-small"
                :data="menuHeader"
                :options="{ rootObjectKey: 'menuHeader', maxDepth: 2 }"/>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card shadow="never" class="d2-card d2-mb">
            <template slot="header">侧边栏菜单数据</template>
            <div style="height: 300px; overflow: auto;">
              <tree-view
                class="tree-view-small"
                :data="menuAside"
                :options="{ rootObjectKey: 'menuAside', maxDepth: 1 }"/>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card shadow="never" class="d2-card d2-mb">
            <template slot="header">全屏模式</template>
            <el-switch v-model="fullscreenActive" active-text="打开" inactive-text="关闭" disabled/>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="never" class="d2-card d2-mb">
            <template slot="header">灰度模式</template>
            <el-switch v-model="isGrayMode" active-text="打开" inactive-text="关闭" disabled/>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="never" class="d2-card d2-mb">
            <template slot="header">侧边栏折叠</template>
            <el-switch v-model="menuAsideCollapse" active-text="收缩" inactive-text="展开" disabled/>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card shadow="never" class="d2-card d2-mb">
            <template slot="header">当前主题</template>
            <div style="height: 300px; overflow: auto;">
              {{themeActiveName}}
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="never" class="d2-card d2-mb">
            <template slot="header">已经注册的主题</template>
            <div style="height: 300px; overflow: auto;">
              <tree-view
                class="tree-view-small"
                :data="themeList"
                :options="{ rootObjectKey: 'themeList', maxDepth: 1 }"/>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="never" class="d2-card d2-mb">
            <template slot="header">当前主题信息</template>
            <div style="height: 300px; overflow: auto;">
              <tree-view
                class="tree-view-small"
                :data="themeActiveSetting"
                :options="{ rootObjectKey: 'themeActiveSetting', maxDepth: 1 }"/>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-card shadow="never" class="d2-card d2-mb">
        <template slot="header">当前页面</template>
        {{pageCurrent}}
      </el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card shadow="never" class="d2-card d2-mb">
            <template slot="header">支持多页显示的页面列表</template>
            <div style="height: 300px; overflow: auto;">
              <tree-view
                class="tree-view-small"
                :data="pagePool"
                :options="{ rootObjectKey: 'pagePool', maxDepth: 1 }"/>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="never" class="d2-card d2-mb">
            <template slot="header">打开的标签页</template>
            <div style="height: 300px; overflow: auto;">
              <tree-view
                class="tree-view-small"
                :data="pageOpenedList"
                :options="{ rootObjectKey: 'pageOpenedList', maxDepth: 1 }"/>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="never" class="d2-card d2-mb">
            <template slot="header">缓存页面</template>
            <div style="height: 300px; overflow: auto;">
              <tree-view
                class="tree-view-small"
                :data="keepAliveInclude"
                :options="{ rootObjectKey: 'keepAliveInclude', maxDepth: 1 }"/>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-card shadow="never" class="d2-card d2-mb">
        <template slot="header">最新版本数据 [ {{releasesUpdate ? '有新版本' : '已经是最新版本'}} ]</template>
        <tree-view
          class="tree-view-small"
          :data="releasesLatest"
          :options="{ rootObjectKey: 'releasesLatest', maxDepth: 1 }"/>
      </el-card>
    </div>
  </d2-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState('d2admin', {
      // 用户信息
      userInfo: state => state.user.info,
      // 版本
      releasesVersion: state => state.releases.version,
      releasesLatest: state => state.releases.latest,
      releasesUpdate: state => state.releases.update,
      // 菜单
      menuHeader: state => state.menu.header,
      menuAside: state => state.menu.aside,
      menuAsideCollapse: state => state.menu.asideCollapse,
      // 主题
      themeList: state => state.theme.list,
      themeActiveName: state => state.theme.activeName,
      // 全屏
      fullscreenActive: state => state.fullscreen.active
    }),
    ...mapState('d2admin', [
      'isGrayMode',
      'pagePool',
      'pageOpenedList',
      'pageCurrent',
      'ua'
    ]),
    ...mapGetters('d2admin', {
      keepAliveInclude: 'keepAliveInclude',
      themeActiveSetting: 'theme/activeSetting'
    })
  }
}
</script>
