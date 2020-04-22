<template>
  <d2-container type="card">
    <!-- 证明有缓存 -->
    <p class="d2-mt-0">在下面的输入框输入任意字符后，切换到其它页面，再回到此页时输入框文字保留，证明被缓存</p>
    <el-input v-model="value" placeholder="input here"></el-input>
    <!-- 页签操作 -->
    <p>关闭标签页</p>
    <el-button-group>
      <el-button @click="handleCloseCurrent">
        <d2-icon name="times"/> 当前
      </el-button>
      <el-button @click="handleCloseLeft">
        <d2-icon name="arrow-left"/> 左侧
      </el-button>
      <el-button @click="handleCloseRight">
        右侧 <d2-icon name="arrow-right"/>
      </el-button>
      <el-button @click="handleCloseOther">
        其它 <d2-icon name="times"/>
      </el-button>
      <el-button @click="closeAll">
        全部 <d2-icon name="times-circle"/>
      </el-button>
    </el-button-group>
    <p>刷新</p>
    <el-button-group>
      <el-button @click="handleCleanCacheAndRefreshCurrent">
        <d2-icon name="refresh"/>
        清空当前页缓存并刷新
      </el-button>
      <el-button @click="handleCleanCacheAndRefreshAll">
        <d2-icon name="refresh"/>
        清空所有缓存并刷新
      </el-button>
    </el-button-group>
  </d2-container>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'demo-playground-store-page',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    ...mapMutations('d2admin/page', [
      'keepAliveRemove',
      'keepAliveClean'
    ]),
    ...mapActions('d2admin/page', [
      'close',
      'closeLeft',
      'closeRight',
      'closeOther',
      'closeAll'
    ]),
    // 关闭当前
    handleCloseCurrent () {
      this.close({
        tagName: this.$route.fullPath
      })
    },
    // 关闭左侧
    handleCloseLeft () {
      this.closeLeft({
        tagName: this.$route.fullPath
      })
    },
    // 关闭右侧
    handleCloseRight () {
      this.closeRight({
        tagName: this.$route.fullPath
      })
    },
    // 关闭其他
    handleCloseOther () {
      this.closeOther({
        tagName: this.$route.fullPath
      })
    },
    // 清空当前页缓存并刷新此页面
    async handleCleanCacheAndRefreshCurrent () {
      this.keepAliveRemove(this.$route.name)
      await this.$nextTick()
      this.$router.replace('/refresh')
    },
    // 清空所有的缓存并刷新此页面
    async handleCleanCacheAndRefreshAll () {
      this.keepAliveClean()
      await this.$nextTick()
      this.$router.replace('/refresh')
    }
  }
}
</script>
