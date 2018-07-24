<template>
  <d2-container type="ghost">
    <template slot="header">version {{version}} [ {{releasesUpdate ? '有新版本' : '已经是最新版本'}} ]</template>
    <div class="d2-mt d2-mr">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card shadow="never" class="d2-card d2-mb">
            <template slot="header">顶栏菜单数据</template>
            <div style="height: 300px; overflow: auto;">
              <tree-view class="tree-view-small" :data="menuHeader" :options="{ rootObjectKey: 'menuHeader', maxDepth: 2 }"/>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card shadow="never" class="d2-card d2-mb">
            <template slot="header">侧边栏菜单数据</template>
            <div style="height: 300px; overflow: auto;">
              <tree-view class="tree-view-small" :data="menuAside" :options="{ rootObjectKey: 'menuAside', maxDepth: 1 }"/>
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
            <div style="height: 300px; overflow: auto;">
              {{themeActiveName}}
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="never" class="d2-card d2-mb">
            <template slot="header">已经注册的主题</template>
            <div style="height: 300px; overflow: auto;">
              <tree-view class="tree-view-small" :data="themeList" :options="{ rootObjectKey: 'themeList', maxDepth: 1 }"/>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="never" class="d2-card d2-mb">
            <template slot="header">当前主题信息</template>
            <div style="height: 300px; overflow: auto;">
              <tree-view class="tree-view-small" :data="d2adminThemeActiveSetting" :options="{ rootObjectKey: 'd2adminThemeActiveSetting', maxDepth: 1 }"/>
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
              <tree-view class="tree-view-small" :data="pagePool" :options="{ rootObjectKey: 'pagePool', maxDepth: 1 }"/>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="never" class="d2-card d2-mb">
            <template slot="header">打开的标签页</template>
            <div style="height: 300px; overflow: auto;">
              <tree-view class="tree-view-small" :data="pageOpenedList" :options="{ rootObjectKey: 'pageOpenedList', maxDepth: 1 }"/>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="never" class="d2-card d2-mb">
            <template slot="header">缓存页面</template>
            <div style="height: 300px; overflow: auto;">
              <tree-view class="tree-view-small" :data="d2adminKeepAliveInclude" :options="{ rootObjectKey: 'd2adminKeepAliveInclude', maxDepth: 1 }"/>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-card shadow="never" class="d2-card d2-mb">
        <template slot="header">最新版本数据 [ {{releasesUpdate ? '有新版本' : '已经是最新版本'}} ]</template>
        <tree-view class="tree-view-small" :data="releasesLatest" :options="{ rootObjectKey: 'releasesLatest', maxDepth: 1 }"/>
      </el-card>
    </div>
  </d2-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState({
      userInfo: state => state.d2admin.userInfo,
      version: state => state.d2admin.version,
      releasesLatest: state => state.d2admin.releasesLatest,
      releasesUpdate: state => state.d2admin.releasesUpdate,
      menuHeader: state => state.d2admin.menuHeader,
      menuAside: state => state.d2admin.menuAside,
      isFullScreen: state => state.d2admin.isFullScreen,
      isGrayMode: state => state.d2admin.isGrayMode,
      isMenuAsideCollapse: state => state.d2admin.isMenuAsideCollapse,
      themeList: state => state.d2admin.themeList,
      themeActiveName: state => state.d2admin.themeActiveName,
      pagePool: state => state.d2admin.pagePool,
      pageOpenedList: state => state.d2admin.pageOpenedList,
      pageCurrent: state => state.d2admin.pageCurrent,
      ua: state => state.d2admin.ua
    }),
    ...mapGetters([
      'd2adminThemeActiveSetting',
      'd2adminKeepAliveInclude'
    ])
  }
}
</script>
