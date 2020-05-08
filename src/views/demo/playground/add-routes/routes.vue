<template>
  <d2-container>
    <el-alert
      title="由于演示功能特殊，请注意在需要时刷新您的浏览器（以重置路由设置）查看效果"
      type="warning"
      show-icon/>
    <d2-highlight :code="dataView"/>
    <el-form label-position="top">
      <el-form-item label="创建路由（你可以假设上面是接口数据）">
        <el-button-group>
          <el-button
            v-for="item in setting"
            :key="item.component"
            @click="onClick(item)">
            {{item.title}}
          </el-button>
        </el-button-group>
      </el-form-item>
    </el-form>
  </d2-container>
</template>

<script>
import { cloneDeep } from 'lodash'
import { mapState, mapMutations } from 'vuex'
import { frameInRoutes } from '@/router/routes'
import layoutHeaderAside from '@/layout/header-aside'
export default {
  data () {
    return {
      title: '',
      setting: [
        { title: '追加页面 1', name: 'add-routes-1', path: 'add-routes/1', component: '1' },
        { title: '追加页面 2', name: 'add-routes-2', path: 'add-routes/2', component: '2' },
        { title: '追加页面 3', name: 'add-routes-3', path: 'add-routes/3', component: '3' }
      ]
    }
  },
  computed: {
    ...mapState('d2admin/menu', [
      'header'
    ]),
    dataView () {
      return JSON.stringify(this.setting, null, 2)
    }
  },
  methods: {
    ...mapMutations({
      pageInit: 'd2admin/page/init',
      headerSet: 'd2admin/menu/headerSet'
    }),
    onClick ({ title, name, path, component }) {
      // vue router 的设计暂时不能支持在路由示例上访问动态添加的路由
      // 目前可行的解决方法是自行维护一个存储路由数据的位置
      // https://github.com/vuejs/vue-router/issues/1234
      // https://github.com/vuejs/vue-router/issues/1859
      // https://github.com/vuejs/vue-router/issues/1955
      // https://github.com/vuejs/vue-router/issues/2454
      // https://github.com/vuejs/vue-router/issues/2280
      // 所以暂时先不做对路由已经存在的判断
      const route = [
        {
          path: '/demo/playground',
          component: layoutHeaderAside,
          children: [
            {
              path,
              name,
              component: () => import('@/views/demo/playground/add-routes/alternates/' + component + '.vue'),
              meta: {
                title
              }
            }
          ]
        }
      ]
      this.$router.addRoutes(route)
      // 更新标签页池
      this.pageInit([
        ...frameInRoutes,
        ...route
      ])
      // 演示更新菜单
      const menuGroup = {
        title: '临时菜单',
        icon: 'plus-square',
        children: []
      }
      const menu = {
        path: `/demo/playground/${path}`,
        title,
        icon: 'file-o'
      }
      const header = cloneDeep(this.header)
      const menuGroupIndex = header.findIndex(e => e.title === menuGroup.title)
      // 如果顶栏菜单已经有这个组，就在组里添加项目，反之新建一个菜单组
      if (menuGroupIndex >= 0) {
        header[menuGroupIndex].children.push(menu)
      } else {
        menuGroup.children.push(menu)
        header.push(menuGroup)
      }
      this.headerSet(header)
      // 跳转
      this.$router.push({ name })
    }
  }
}
</script>
