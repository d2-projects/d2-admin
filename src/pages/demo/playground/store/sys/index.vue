<template>
  <d2-container type="ghost">
    <template slot="header">version {{version}}</template>
    <div class="d2-mt d2-mr">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card shadow="never" class="d2-card d2-mb">
            <template slot="header">顶栏菜单数据</template>
            <div style="height: 300px; overflow: auto;">
              <tree-view :data="menusHeader" :options="{ rootObjectKey: 'menusHeader', maxDepth: 2 }"/>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card shadow="never" class="d2-card d2-mb">
            <template slot="header">侧边栏菜单数据</template>
            <div style="height: 300px; overflow: auto;">
              <tree-view :data="menusAside" :options="{ rootObjectKey: 'menusAside', maxDepth: 1 }"/>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card shadow="never" class="d2-card d2-mb">
            <template slot="header">全屏模式</template>
            <el-switch v-model="isFullScreen" active-text="打开" inactive-text="关闭" disabled/>
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
            <el-switch v-model="isMenuAsideCollapse" active-text="收缩" inactive-text="展开" disabled/>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card shadow="never" class="d2-card d2-mb">
            <template slot="header">当前主题</template>
            <div style="height: 150px; overflow: auto;">
              {{themeActiveName}}
            </div>
          </el-card>
        </el-col>
        <el-col :span="16">
          <el-card shadow="never" class="d2-card d2-mb">
            <template slot="header">当前主题信息</template>
            <div style="height: 150px; overflow: auto;">
              <tree-view :data="themeActiveSetting" :options="{ rootObjectKey: 'themeActiveSetting', maxDepth: 1 }"/>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card shadow="never" class="d2-card d2-mb">
            <template slot="header">当前页面</template>
            <div style="height: 300px; overflow: auto;">
              {{pageCurrent}}
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="never" class="d2-card d2-mb">
            <template slot="header">打开的标签页</template>
            <div style="height: 300px; overflow: auto;">
              <tree-view :data="pageOpenedList" :options="{ rootObjectKey: 'pageOpenedList', maxDepth: 1 }"/>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="never" class="d2-card d2-mb">
            <template slot="header">缓存页面</template>
            <div style="height: 300px; overflow: auto;">
              <tree-view :data="d2adminKeepAliveInclude" :options="{ rootObjectKey: 'd2adminKeepAliveInclude', maxDepth: 1 }"/>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-card shadow="never" class="d2-card d2-mb">
        <template slot="header">最新版本数据 [ {{releasesUpdate ? '有新版本' : '已经是最新版本'}} ]</template>
        <tree-view :data="releasesLatest" :options="{ rootObjectKey: 'releasesLatest', maxDepth: 1 }"/>
      </el-card>
    </div>
  </d2-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState({
      version: state => state.d2admin.version,
      releasesLatest: state => state.d2admin.releasesLatest,
      releasesUpdate: state => state.d2admin.releasesUpdate,
      menusHeader: state => state.d2admin.menusHeader,
      menusAside: state => state.d2admin.menusAside,
      isFullScreen: state => state.d2admin.isFullScreen,
      isGrayMode: state => state.d2admin.isGrayMode,
      isMenuAsideCollapse: state => state.d2admin.isMenuAsideCollapse,
      themeActiveName: state => state.d2admin.themeActiveName,
      pageOpenedList: state => state.d2admin.pageOpenedList,
      pageCurrent: state => state.d2admin.pageCurrent
    }),
    ...mapGetters([
      'themeActiveSetting',
      'd2adminKeepAliveInclude'
    ])
  }
}
</script>
