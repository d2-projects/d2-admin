const meta = { requiresAuth: true };

/**
 * 在主框架内显示
 */
const frameIn = [
  //
  {
    path: '/',
    redirect: { name: 'index' },
    component: () => import('@/components/core/d2-layout-main'),
    children: [
      {
        path: 'index',
        name: 'index',
        meta,
        component: () => import('@/pages/d2admin/index'),
      },
    ],
  },
  {
    path: '/core/setting',
    name: 'core-setting',
    meta,
    redirect: { name: 'core-setting-index' },
    component: () => import('@/components/core/d2-layout-main'),
    children: (pre => [
      {
        path: 'index', name: `${pre}index`, component: () => import('@/pages/d2admin/setting/index'), meta: { ...meta, title: '设置首页' },
      },
      {
        path: 'releases', name: `${pre}releases`, component: () => import('@/pages/d2admin/setting/releases'), meta: { ...meta, title: '版本' },
      },
    ])('core-setting-'),
  },
  {
    path: '/business/class1',
    name: 'business-class1',
    meta,
    redirect: { name: 'business-class1-index' },
    component: () => import('@/components/core/d2-layout-main'),
    children: (pre => [
      {
        path: 'index', name: `${pre}index`, component: () => import('@/pages/business/class1/index'), meta: { ...meta, title: '功能 1' },
      },
      {
        path: 'page1', name: `${pre}page1`, component: () => import('@/pages/business/class1/page1'), meta: { ...meta, title: '功能 1 页面 1' },
      },
      {
        path: 'page2', name: `${pre}page2`, component: () => import('@/pages/business/class1/page2'), meta: { ...meta, title: '功能 1 页面 2' },
      },
    ])('business-class1-'),
  },
  {
    path: '/business/class2',
    name: 'business-class2',
    meta,
    redirect: { name: 'business-class2-index' },
    component: () => import('@/components/core/d2-layout-main'),
    children: (pre => [
      {
        path: 'index', name: `${pre}index`, component: () => import('@/pages/business/class2/index'), meta: { ...meta, title: '功能 2' },
      },
      {
        path: 'class2-1/page1', name: `${pre}class2-1-page1`, component: () => import('@/pages/business/class2/class2-1/page1'), meta: { ...meta, title: '功能 2-1 页面 1' },
      },
      {
        path: 'class2-1/page2', name: `${pre}class2-1-page2`, component: () => import('@/pages/business/class2/class2-1/page2'), meta: { ...meta, title: '功能 2-1 页面 2' },
      },
      {
        path: 'page1', name: `${pre}page1`, component: () => import('@/pages/business/class2/page1'), meta: { ...meta, title: '功能 2 页面 1' },
      },
      {
        path: 'page2', name: `${pre}page2`, component: () => import('@/pages/business/class2/page2'), meta: { ...meta, title: '功能 2 页面 2' },
      },
    ])('business-class2-'),
  },
];

/**
 * 错误页面
 */
const errorPage = [
  // 404
  {
    path: '*',
    name: '404',
    component: () => import('@/pages/d2admin/404'),
  },
];

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登陆
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/d2admin/login'),
  },
];

// 导出需要显示菜单的
export const frameInRoutes = frameIn;

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage,
];
