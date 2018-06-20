# 介绍

d2-admin（以下简称 d2admin）是一个开源的管理系统前端集成方案

[Github仓库](https://github.com/FairyEver/d2-admin) - [预览地址](http://d2admin.fairyever.com/)

<div>
  <iframe src="//ghbtns.com/github-btn.html?user=FairyEver&repo=d2-admin&type=star&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="100" height="20"></iframe>
  <iframe src="//ghbtns.com/github-btn.html?user=FairyEver&repo=d2-admin&type=fork&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="100" height="20"></iframe>
</div>

::: tip
因为现在集成了很多的插件和组件，首次加载会占用较多的时间，虽然已经做了首屏加载动画，还是建议您在发布的时候一定要删除没有用到的代码。比如项目没有用到图表，最好将集成的图表库以及封装的图表组件删除。
:::

## 前端兴趣交流群

欢迎加入我们的讨论

<img style="margin-top: 50px;" src="./image/qr.png">

## 功能

* 首屏加载等待动画 避免首次加载白屏尴尬
* 简约主题
* 每个插件和组件都配有介绍文档
* 图片资源 sketch 源文件（ 可以在这个文件内重新生成所有图片资源 ）
* 登陆和注销
* 根据路由自动生成菜单
* 可折叠侧边栏
* 多国语言支持
* 富文本编辑器
* Markdown 编辑器
* 全屏功能
* [Fontawesome](https://fontawesome.com/) 图标库
* [Fontawesome](https://fontawesome.com/) 图标选择器（组件）
* 自动引入下载的 SVG 图标
* 前端假数据支持（ mock ）
* 集成 [G2](http://g2.alipay.com/) 图表
* 图表自适应可拖拽大小的卡片容器（示例）
* 简化剪贴板操作
* 简化Cookie操作
* 时间日期计算工具
* 导入 Excel （ xlsx 格式 + CSV 格式 ）
* 数据导出 Excel （ xlsx 格式 + CSV 格式 ）
* 数据导出文本
* 数字动画
* 可拖拽调整大小的切分布局
* 可拖拽调整大小和位置的网格布局
* 提供三种页面容器组件（正常卡片，隐形容器，填满页面）
* 代码高亮显示
* 加载并解析 markdown 文件
* GitHub 样式的 markdown 显示组件
* markdown 内代码高亮
* 为 markdown 扩展了百度云链接解析和优化显示

## TODO

d2admin 仍然处于开发中，这里有一些计划：

* 抽离项目里的文档，集中存放在文档站点
* 对主界面进行一次完善，调整整体布局和颜色
* 切换主题功能
* 使用自定义滚动条
* 分离出简化版本
* 推出基于 [ice](https://alibaba.github.io/ice) 平台的版本
* 增加右上角通知中心
* 增加一些实例页面以提供业务页面布局建议
* 更换图表库

欢迎你为 d2admin 的开发作出贡献。

## 目录结构

```
├─ build // 打包设置
├─ config // 发布设置
├─ preview-image // github 介绍页面使用的插图 以后可能去掉
├─ src
│  ├─ assets
│  │  ├─ icons // 存放 svg 图标
│  │  ├─ image // 图片
│  │  ├─ library // 库
│  │  └─ style // 公用样式
│  ├─ components
│  │  ├─ charts // 封装图表组件
│  │  ├─ core // 核心组件
│  │  ├─ demo // 只会在示例页面中使用的组件
│  ├─ i18n // 多国语言配置
│  ├─ mock // mock 数据设置
│  ├─ pages
│  │  ├─ core // 系统页面
│  │  └─ demo // 演示页面
│  │     ├─ business // 业务页面示例
│  │     ├─ chart // 图表
│  │     ├─ components // 组件
│  │     └─ plugins // 插件
│  ├─ plugin // 插件
│  ├─ router // 路由
│  │  ├─ invisible
│  │  └─ menu
│  ├─ store // 全局状态
│  ├─ utils // 通用工具
│  ├─ App.vue
│  └─ main.js // 入口文件
├─ static
├─ .babelrc
├─ .editorconfig
├─ .eslintignore
├─ .eslintrc.js
├─ .gitignore
├─ .postcssrc.js
├─ LICENSE
├─ README.md
├─ design.sketch
├─ index.html
├─ package-lock.json
└─ package.json
```

## 使用

首先下载模板 [d2-admin/releases](https://github.com/FairyEver/d2-admin/releases)

::: tip
不要直接克隆本项目，请选择已经发行的版本，尤其不要使用 dev 分支
:::

安装依赖

```
npm i
```

运行

```
npm run dev
```

在以下环境测试可用

```
➜  ~ npm -v
5.6.0
➜  ~ node -v
v8.11.1
➜  ~ nrm -V
1.0.2
➜  ~ nrm ls
  npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
* taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  rednpm - http://registry.mirror.cqupt.edu.cn/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/
```

::: tip
推荐使用 [nrm](https://github.com/Pana/nrm) 管理 npm 源，不建议使用 cnpm
:::
