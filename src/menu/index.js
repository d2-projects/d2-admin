const businessClass1 = {
  path: '/business/class1',
  title: '功能 1',
  icon: 'cube',
  children: (pre => [
    { path: `${pre}index`, title: '首页', icon: 'home' },
    { path: `${pre}page1`, title: '页面 1', icon: 'paperclip' },
    { path: `${pre}page2`, title: '页面 2', icon: 'paperclip' },
  ])('/business/class1/'),
};

const businessClass2 = {
  path: '/business/class2',
  title: '功能 2',
  icon: 'cube',
  children: (pre => [
    { path: `${pre}index`, title: '首页', icon: 'home' },
    {
      title: '功能 2-1',
      icon: 'cube',
      children: [
        { path: `${pre}class2-1/page1`, title: '页面 1', icon: 'paperclip' },
        { path: `${pre}class2-1/page2`, title: '页面 2', icon: 'paperclip' },
      ],
    },
    { path: `${pre}page1`, title: '页面 1', icon: 'paperclip' },
    { path: `${pre}page2`, title: '页面 2', icon: 'paperclip' },
  ])('/business/class2/'),
};

const setting = {
  path: '/core/setting',
  title: '设置',
  icon: 'cog',
  children: (pre => [
    { path: `${pre}index`, title: '设置首页', icon: 'home' },
    { path: `${pre}releases`, title: '版本', icon: 'info-circle' },
  ])('/core/setting/'),
};

// 菜单 侧边栏
export const side = [
  businessClass1,
  businessClass2,
  setting,
];

// 菜单 顶栏
export default [
  {
    path: '/index',
    title: '首页',
    icon: 'home',
  },
  businessClass1,
  businessClass2,
  setting,
];
