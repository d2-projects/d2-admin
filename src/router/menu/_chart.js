// 工具 图表演示页面 路由生成
const maker = (title, name) => {
  return {
    title: title,
    icon: 'file-o',
    path: `demo/${name}`,
    name: `demo-chart-demo-${name}`,
    meta: {
      requiresAuth: true
    },
    component: resolve => { require([`@/pages/demo/chart/demo/${name}.vue`], resolve) }
  }
}

// [图表] 菜单
export const menu = {
  title: '图表',
  path: '/demo/chart',
  name: 'demo-chart',
  meta: {
    requiresAuth: true
  },
  component: resolve => { require(['@/components/core/MainLayout/index.vue'], resolve) },
  redirect: {
    name: 'demo-chart-index'
  },
  children: [
    // 首页
    {
      path: 'index',
      name: 'demo-chart-index',
      meta: {
        requiresAuth: true
      },
      component: resolve => { require(['@/pages/demo/chart/index/index.vue'], resolve) }
    },
    // 所有
    {
      title: '所有',
      icon: 'th',
      path: 'all',
      name: 'demo-chart-all',
      meta: {
        requiresAuth: true
      },
      component: resolve => { require(['@/pages/demo/chart/all/index.vue'], resolve) }
    },
    // 动态尺寸
    {
      title: '动态尺寸',
      icon: 'refresh',
      path: 'dynamicSize',
      name: 'demo-chart-dynamicSize',
      meta: {
        requiresAuth: true
      },
      component: resolve => { require(['@/pages/demo/chart/dynamicSize/index.vue'], resolve) }
    },
    // 单独演示
    {
      title: '单独演示',
      icon: 'bar-chart',
      children: [
        maker('面积图', 'areaBase'),
        maker('条形图', 'barBase'),
        maker('柱形图', 'columnBase'),
        maker('折线图', 'lineBase'),
        maker('阶梯折线图', 'lineStep'),
        maker('南丁格尔玫瑰图', 'nightingaleRoseBase'),
        maker('饼图', 'pieBase'),
        maker('雷达图', 'radarBase')
      ]
    }
  ]
}

// [图表] 路由设置
export const router = {
  ...menu,
  children: [].concat(...menu.children.map(e => e.children || e))
}
