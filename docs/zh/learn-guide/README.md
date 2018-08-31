# 介绍

D2Admin 是一个开源的管理系统前端集成方案

<div>
  <iframe src="//ghbtns.com/github-btn.html?user=d2-projects&repo=d2-admin&type=star&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="100" height="20"></iframe>
  <iframe src="//ghbtns.com/github-btn.html?user=d2-projects&repo=d2-admin&type=fork&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="100" height="20"></iframe>
</div>

![](http://fairyever.qiniudn.com/20180821142809.png)

**完整版**

[Github 仓库](https://github.com/d2-projects/d2-admin) | 
[码云仓库](https://gitee.com/fairyever/d2-admin) | 
[预览地址](https://fairyever.gitee.io/d2-admin-preview)

**简化版模板**

[Github 仓库](https://github.com/d2-projects/d2-admin-start-kit) | 
[码云仓库](https://gitee.com/fairyever/d2-admin-start-kit) | 
[预览地址](https://fairyever.gitee.io/d2-admin-start-kit-preview/#/index)

**飞冰物料**

[D2Admin ICE](https://alibaba.github.io/ice/scaffold?type=vue) | 
[介绍](https://juejin.im/post/5b6349716fb9a04f834669d6) | 
[预览地址](https://fairyever.gitee.io/d2-admin-ice-preview)

## 功能

* 使用 vue-cli3 构建
* 首屏加载等待动画 避免首次加载白屏尴尬
* 简约主题
* 每个插件和组件都配有介绍文档
* 登录和注销
* 根据路由自动生成菜单
* 可折叠侧边栏
* 方便的菜单设置
* 多国语言支持
* 富文本编辑器
* Markdown 编辑器
* 全屏功能
* Fontawesome 图标库
* 图标选择器（组件）
* 自动引入下载的 SVG 图标
* 前端假数据支持（ mock ）
* 简化剪贴板操作
* 集成图表插件
* 时间日期计算工具
* 导入 Excel （ xlsx 格式 + csv 格式 ）
* 数据导出 Excel （ xlsx 格式 + csv 格式 ）
* 数据导出文本
* 数字动画
* 可拖拽调整大小的切分布局
* 可拖拽调整大小和位置的网格布局
* 提供三种方便的页面容器组件（正常卡片，隐形容器，填满页面）
* 代码高亮显示
* 加载并解析（或者直接指定资源） markdown 文件
* GitHub 样式的 markdown 显示组件
* markdown 内代码高亮
* 为 markdown 扩展了百度云链接解析和优化显示
* 右键菜单组件
* 自定义滚动条和滚动控制
* 内置5种主题
* 公用样式抽离，方便的主题定制
* 打包后随意目录部署（已经做好兼容设置）
* 支持临时菜单配置
* 提供“试验台”功能 方便展示系统功能调用方法 `1.1.4 +`
* 多标签页模式 `1.1.4 +`
* 美化滚动条 `1.1.4 +`
* json view `1.1.4 +`
* cookie 封装 `1.1.5 +`
* 多标签页全局控制 API `1.1.5 +`
* 菜单全局控制 API `1.1.5 +`
* 多标签页关闭控制支持右键菜单 `1.1.10 +`
* 模块化全局状态管理 `1.2.0 +`
* 多种数据持久化方式：区分用户，区分路由，页面数据快照功能 `1.2.0 +`
* 支持跳出外部链接的菜单系统 `1.2.0 +`
* 支持菜单 svg 图标 `1.3.0 +`
* 日志记录和错误捕捉 `1.3.0 +`
* 全局菜单搜索 `1.3.0 +`
* 登录重定向 `1.3.0 +`

## 目录结构

<pre style="padding: 0px; font-size: 12px;">
├─ dev
│  └─ snippets 帮助开发的代码片段
├─ docs 文档
├─ public 静态资源
├─ src
│  ├─ assets 资源
│  ├─ components 组件
│  ├─ i18n 多国语
│  ├─ layout 布局
│  ├─ libs 通用库
│  ├─ menu 菜单
│  ├─ mock 模拟数据
│  ├─ pages 页面
│  ├─ plugin 插件
│  ├─ router 路由
│  ├─ store 全局状态
│  ├─ App.vue
│  ├─ main.js
│  └─ setting.js 设置
├─ tests 单元测试
├─ .env 环境变量
├─ .env.development 环境变量 开发环境
├─ .eslintignore
├─ .eslintrc.js
├─ .gitignore
├─ .postcssrc.js
├─ LICENSE
├─ README.md
├─ babel.config.js
├─ jest.config.js
├─ package.json
└─ vue.config.js 配置文件
</pre>

## Thanks

D2Admin 创建于2018年1月14日零点51分，四个月后在2018年5月26日正式发布，39天时间 star 突破 1k ，在此对所有的 D2Admin 支持者表示感谢，项目将会保持更新，如果你有想法、建议、或者问题欢迎加群讨论

—— 2018年7月5日

star 破 2k

—— 2018年8月7日