# 局部组件

局部组件是指在某个组件内注册的组件，它一般只在一个地方用到，全局无法访问

## D2MenuItem

::: tip 出现位置
src/components/core/MainLayout/components/SideMenu/index.vue
:::

该组件会根据数据渲染 `<el-menu-item>`

## D2Submenu

::: tip 出现位置
src/components/core/MainLayout/components/SideMenu/index.vue
:::

该组件会根据数据渲染 `<el-submenu>` 结构，并且在 `<el-submenu>` 中再次根据数据类型递归自身，最终生成 elementUI 的菜单组件结构，支持嵌套多级