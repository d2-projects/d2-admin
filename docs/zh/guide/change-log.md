# 更新日志

## dev

::: tip
这是正在开发的版本，还没有正式发布
:::

* [ 修改 ] 顶栏和侧边栏菜单新的结构生成方式，新的方案使用 `数据` + `递归组件` 实现无限制多级菜单
* [ 修改 ] 路由注册回归最简单的写法
* [ 修复 ] 首次加载 loading 样式类名和程序内类名冲突，新的加载类名使用 `d2-app-loading` 前缀
* [ 修改 ] 所有类似 `dd-` 的样式前缀(包括自动注册图标的id前缀)统一改为 `d2-`
* [ 修复 ] 修复 `d2-highlight` 组件和 `d2-markdown` 组件的样式冲突
* [ 修改 ] 内置组件名称统一改为 `d2-` 前缀，统一使用横线连接 (kebab-case) 风格
* [ 修改 ] 顶栏 logo 阴影删除
* [ 新增 ] 主题系统
* [ 新增 ] 三个主题，分别为 `d2admin 经典`，`简约线条`，`流星`
* [ 修改 ] `d2-markdown` 组件 `md` 参数改名为 `source`
* [ 修改 ] 删除了 `d2-markdown` 组件中图片的白色背景
* [ 修改 ] 删除 `timeago` 插件，更换为更强大的 `dayjs`
* [ 新增 ] `Tomorrow Night Blue` 主题
* [ 修改 ] `src/assets/style/public-class.scss` 写法优化
* [ 新增 ] [vue-bigdata-table](https://github.com/lison16/vue-bigdata-table)组件
* [ 修复 ] 侧边栏内容超过一屏后显示错误
* [ 新增 ] 自定义滚动条演示页面

## v1.0.0

[https://github.com/FairyEver/d2admin-vue-element/releases/tag/v1.0.0](https://github.com/FairyEver/d2admin-vue-element/releases/tag/v1.0.0)

这是第一个版本，还有一点小问题，但是已经可用