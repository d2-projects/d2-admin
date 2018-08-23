# D2Admin ICE 发布

# 可视化搭建前端工程 - 阿里飞冰了解一下

飞冰官方网站 [https://alibaba.github.io/ice](https://alibaba.github.io/ice)

每次新做一个项目，无论大小都要干这些事：

* 框架选型
* 初始化脚手架（比如使用 **create-react-app** 或者 **vue-cli**）
* 也可能你选择了开源脚手架，克隆仓库
* 四处找轮子
* 安装各种依赖
* 新建页面，写逻辑
* 设计菜单
* 设计路由
* 新建页面的时候去复制旧的页面修改
* 把新的页面注册路由，注册菜单
* 做完了这个页面做下个，新建文件，复制代码，注册路由...

**烦不烦？要优雅！**

今天介绍阿里的开源产品：[飞冰](https://alibaba.github.io/ice)

## 飞冰是什么

![](http://fairyever.qiniudn.com/20180803020053.png)

"海量可复用物料，通过 GUI 工具极速构建中后台应用"。

这句 slogan 还是非常准确的：

飞冰是一套综合解决方案，用来极速构建中后台应用（其实也可以做非中后台应用）。

可以做到极速是通过『海量可复用物料』和『GUI 开发工具』实现的。

使用飞冰的开发工作流是这样的：

`下载 GUI 工具并安装` => `可视化的选择我们提供的初始模板创建项目` => `可视化的创建页面并选择我们提供的 100+ 高质量可复用区块` => `生成代码进行二次开发` => `开发完成之后点击打包编译出 HTML、JS、CSS 文件` => `部署使用`

在整个流程中，你可以完全通过 GUI 工具点击操作，无需安装配置 Node 环境等前端开发工具，也无需配置 webpack 等构建脚本，我们已经按照淘宝前端最佳实践全部内置。此外，绝大部分的业务需求，我们都已经开发出对应的物料，可以通过 GUI 进行可视化的拼装，尽可能避免你去编写额外的业务逻辑。

### 物料源

下面是一张很长的图片，为了体积考虑这张图比较模糊，但是可以感受一下 ICE 的区块数量：

> 原始网页链接 [https://alibaba.github.io/ice/block](https://alibaba.github.io/ice/block)

![](http://fairyever.qiniudn.com/20180803005118.jpg)

目前为止 ICE 已经支持 react vue Angular 三大主流框架的物料资源

![](http://fairyever.qiniudn.com/20180803005219.png)

打比方我现在项目需要富文本编辑器，可以看到区块里提供了三款编辑器可供选择

![](http://fairyever.qiniudn.com/20180803005411.png)

所有的这些，都是使用 GUI 就可以加入到项目中使用的，下面将会展示如何从安装 iceworks 客户端到在项目中新建页面。

## 如何使用

### 安装

> 为了真实演示，特意删掉了以前安装的 app

演示系统为 macOS，iceworks 支持 Windows 版本。

iceworks 下载地址 [https://alibaba.github.io/ice/iceworks](https://alibaba.github.io/ice/iceworks)

![](http://fairyever.qiniudn.com/20180803005813.png)

稍微等待了一会儿，下载完成。安装后得到了这样一个 App：

![](http://fairyever.qiniudn.com/20180803010417.png)

### 上手

安装后打开看到一个很简单的界面：

![](http://fairyever.qiniudn.com/20180803010628.png)

切换到模板标签可以看到飞冰目前提供的脚手架列表：

![](http://fairyever.qiniudn.com/20180803010704.png)

区块标签可以看到区块列表

![](http://fairyever.qiniudn.com/20180803011044.gif)

插件

![](http://fairyever.qiniudn.com/20180803011128.png)

设置

![](http://fairyever.qiniudn.com/20180803011150.png)

这就是表面上所有的功能，下面我们来建一个项目体验一下

### 新建 vue 项目

飞冰是从 react 开始做的，现在 vue 和 Angular 物料源还比较少，我们切换到 vue 选项卡里...

![](http://fairyever.qiniudn.com/20180803011329.png)

**是不是混进了什么奇怪的东西！**

![](http://fairyever.qiniudn.com/20180803011519.png)

没错，D2Admin 出了 ICE 版！

在我和阿里的开发者**一个月**的对接之后，D2Admin ICE 诞生了，作为飞冰平台上第一个**非官方 vue 脚手架**，D2Admin ICE 承担的希望还是很大的！下面使用这个脚手架做演示，展示如何**不写代码**建页面，**不写代码**出图表！

选择 D2Admin ICE 作为起始模板后会让我们填写项目保存地址：

![](http://fairyever.qiniudn.com/20180803011843.png)

填写完成后开始下载模板，下载后会提示我是否要立刻安装依赖：

![](http://fairyever.qiniudn.com/20180803012018.gif)

为了避免动态图过大我没有录安装过程：

![](http://fairyever.qiniudn.com/20180803012215.png)

在写上面的时候已经提示我依赖安装完成了（很人性化有没有）：

![](http://fairyever.qiniudn.com/20180803012311.png)

![](http://fairyever.qiniudn.com/20180803012346.png)

ennn...没毛病。

### 启动项目

点击 `启动调试服务` 会在本地打开调试服务，vue 项目默认执行的是 `npm start`：

![](http://fairyever.qiniudn.com/20180803012548.gif)

打开显示的链接，可以看到项目已经稳稳地跑起来了：

![](http://fairyever.qiniudn.com/20180803012748.png)

D2Admin ICE 实质上是 [d2-admin-start-kit](https://github.com/d2-projects/d2-admin-start-kit) 的特别版本，为适应 ICE 的逻辑修改了一部分代码，可以看到模板十分干净，没有了任何完整版的示例 demo：

![](http://fairyever.qiniudn.com/20180803012914.png)

关闭 ICE 内集成的终端后可以看到项目面板，可以显示出现在有哪些页面，安装了哪些依赖等：

![](http://fairyever.qiniudn.com/20180803013159.png)

### 新建页面

点击 `新建页面` 会打开新建页面界面：

![](http://fairyever.qiniudn.com/20180803013712.png)

随便选择一个区块新建一个页面（中间的等待时间是 iceworks 在从 npm 下载区块代码）

![](http://fairyever.qiniudn.com/20180803013831.gif)

选择区块：

![](http://fairyever.qiniudn.com/20180803014037.png)

效果：

![](http://fairyever.qiniudn.com/20180803014058.png)

下面尝试一下选择多个区块：

![](http://fairyever.qiniudn.com/20180803014157.png)

![](http://fairyever.qiniudn.com/20180803014244.png)

自动生成了菜单：

![](http://fairyever.qiniudn.com/20180803014402.png)

页面效果：

![](http://fairyever.qiniudn.com/20180803014605.gif)

检查一下自动生成的代码目录：

![](http://fairyever.qiniudn.com/20180803014743.png)

自动生成的页面组件：

![](http://fairyever.qiniudn.com/20180803015016.png)

自动生成的样式文件：

![](http://fairyever.qiniudn.com/20180803015047.png)

该有的都有了，不该有的也有了，连生命周期钩子都帮你写了一遍！

## 结语

演示一遍下来后，我生成了两个页面，没有写一行代码，剩下的操作就是修修改改，把多个页面都需要的组件提取一下，做做修改工作。

D2Admin 团队也会在以后的时间里尽力和 ICE 团队合作开发 vue 公用区块，加速 ICE 的 vue 生态建设，也希望众多的 vuer 都可以参与进来，平台有了，社区繁荣起来才是对大家都有利的事情。

D2Admin ICE 将会保持和 D2Admin Start Kit 一致更新，如果你看到完整版的 D2Admin 实在喜欢，从完整版做减法也未尝不可 :）

## D2 Projects

| 地址 | 描述 |
| --- | --- |
| [团队主页](https://github.com/d2-projects) | D2Admin 所属的团队主页 |
| [中文文档](http://app.d3collection.cn/d2-admin-doc/lastest/zh/) | 中文文档 |
| [D2Admin 完整版 预览地址](https://fairyever.gitee.io/d2-admin-preview/#/index) | 完整版 预览地址 |
| [D2Admin 完整版 github](https://github.com/d2-projects/d2-admin) | 完整版 Github 仓库 |
| [D2Admin 完整版 码云](https://gitee.com/fairyever/d2-admin) | 完整版 码云镜像仓库 |
| [D2Admin 简化版 预览地址](https://fairyever.gitee.io/d2-admin-start-kit-preview/#/index) | 简化版 预览地址 |
| [D2Admin 简化版 github](https://github.com/d2-projects/d2-admin-start-kit) | 简化版 Github 仓库 |
| [D2Admin 简化版 码云](https://gitee.com/fairyever/d2-admin-start-kit) | 简化版 码云镜像仓库 |

开源项目组官方公众号

<img src="http://fairyever.qiniudn.com/20180801111123.jpg" style="width: 200px;"/>

[本文在项目文档中收录位置](http://app.d3collection.cn/d2-admin-doc/lastest/zh/article/update/ice-1.1.2.html)

在最后，如果你看完了，并且觉得还不错，希望可以到 [项目主页](https://github.com/d2-projects/d2-admin) 上点一个 **star** 作为你对这个项目的认可与支持，谢谢。