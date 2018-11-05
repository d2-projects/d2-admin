<template>
  <d2-container type="card">
    <!-- 证明有缓存 -->
    <p class="d2-mt-0">在下面的输入框输入任意字符后，切换到其它页面，再回到此页时输入框文字保留，证明被缓存</p>
    <el-input v-model="value" placeholder="input here"></el-input>
    <!-- 页签操作 -->
    <p>页签操作</p>
    <el-button @click="closeCurrent" type="danger">
      <d2-icon name="times"/>
      关闭当前页
    </el-button>
    <p>刷新</p>
    <el-button-group>
      <el-button @click="cleanCacheAndRefreshCurrent">
        <d2-icon name="refresh"/>
        清空当前页缓存并刷新
      </el-button>
      <el-button @click="cleanCacheAndRefreshAll">
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
      'close'
    ]),
    // 关闭当前页
    closeCurrent () {
      this.close({
        tagName: this.$route.name,
        vm: this
      })
    },
    // 刷新当前页面
    refreshCurrent () {
      // const { path, query } = this.$route
      // this.$router.replace({
      //   path: '/redirect/' + JSON.stringify({ path, query })
      // })
      this.$router.replace({
        path: '/refresh'
      })
    },
    // 清空当前页缓存并刷新此页面
    cleanCacheAndRefreshCurrent () {
      this.keepAliveRemove(this.$route.name)
      this.$nextTick(this.refreshCurrent)
    },
    // 清空所有的缓存并刷新此页面
    cleanCacheAndRefreshAll () {
      this.keepAliveClean()
      this.$nextTick(this.refreshCurrent)
    }
  }
}
</script>
