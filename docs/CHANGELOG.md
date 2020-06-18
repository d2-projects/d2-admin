# Changelog

All notable changes to this project will be documented in this file.

# [1.17.0](https://github.com/d2-projects/d2-admin/compare/v1.16.0...v1.17.0) (2020-06-18)


### Features

* :sparkles: 增加构建分析页面示例 ([099fde5](https://github.com/d2-projects/d2-admin/commit/099fde59e74c3aba8bef744d02a0047d48c559af))

# [1.16.0](https://github.com/d2-projects/d2-admin/compare/v1.15.0...v1.16.0) (2020-06-08)


### Features

* :sparkles: 移除对 error 的无用判断 ([079fd1c](https://github.com/d2-projects/d2-admin/commit/079fd1c2809ea7f47d3f835a65d94a39ed9a8cf6))

# [1.15.0](https://github.com/d2-projects/d2-admin/compare/v1.14.0...v1.15.0) (2020-06-08)


### Features

* :sparkles: jsx 重写 d2-container 的 render ([f64b267](https://github.com/d2-projects/d2-admin/commit/f64b267ee92172ec0b25d8b2c19294360b83ed5e))

# [1.14.0](https://github.com/d2-projects/d2-admin/compare/v1.13.0...v1.14.0) (2020-06-08)


### Bug Fixes

* :bug: d2-count-up 组件删除错误代码和无用代码 ([93414eb](https://github.com/d2-projects/d2-admin/commit/93414ebc86093fedc62eb0b8d72bf2d51ecb009c))
* :bug: 修复示例代码中错误的 required 属性 ([a657395](https://github.com/d2-projects/d2-admin/commit/a6573955335456d9de65f5ba795f9a7df8897f49))


### Features

* :art: 解决关于 error 信息的检查遗漏提示 ([b1ea3e8](https://github.com/d2-projects/d2-admin/commit/b1ea3e81a6f2de93080427c9ee648a4015e06821))
* :art: 解决关于 page 是否存在判断不合理的问题 ([7062d06](https://github.com/d2-projects/d2-admin/commit/7062d0622ea74bea1397e24ba6b318b1a4a2dbcc))
* :sparkles: menu-header 和 menu-side 组件使用 jsx 重写 render ([0e54179](https://github.com/d2-projects/d2-admin/commit/0e541795a90ebff825bf1add3a147ef46809076b))

# [1.13.0](https://github.com/d2-projects/d2-admin/compare/v1.12.1...v1.13.0) (2020-06-04)


### Features

* :arrow_up: upgrade element-ui 2.13.2 ([b43f472](https://github.com/d2-projects/d2-admin/commit/b43f472db2d5970f51a8e002d54f400e5359a01a))

## [1.12.1](https://github.com/d2-projects/d2-admin/compare/v1.12.0...v1.12.1) (2020-05-19)


### Bug Fixes

* :bug: 修复静态资源请求错误 ([1983506](https://github.com/d2-projects/d2-admin/commit/1983506e46b117a064d959ee5b189e20168b5d71)), closes [#280](https://github.com/d2-projects/d2-admin/issues/280)

# [1.12.0](https://github.com/d2-projects/d2-admin/compare/v1.11.0...v1.12.0) (2020-05-19)


### Features

* :bulb: 分离用于真实网络请求和模拟请求的 service ([d6704da](https://github.com/d2-projects/d2-admin/commit/d6704dad5c2fd4ebea611aaccd714d0003f64935))

# [1.11.0](https://github.com/d2-projects/d2-admin/compare/v1.10.0...v1.11.0) (2020-05-08)


### Features

* fuse.js from 3.6.1 to 5.2.3 & 完善页面搜索相关代码 ([79e43a6](https://github.com/d2-projects/d2-admin/commit/79e43a69d878d7b31f60d0d7a61f67c9217a4e1e))
* github-markdown-css from 3.0.1 to 4.0.0 ([46d3649](https://github.com/d2-projects/d2-admin/commit/46d3649f0096cb7752ab682cc2087536b663901b))
* highlight.js from 9.18.1 to 10.0.2 ([9e61f30](https://github.com/d2-projects/d2-admin/commit/9e61f306f20ab58af1a76f0d3d9c94f16141a860))
* marked 0.8.2 to 1.0.0 ([8968fd4](https://github.com/d2-projects/d2-admin/commit/8968fd45cb16d0d9c792dfc05e6a7bdd24e91090))
* update devDependencies ([ef9ab55](https://github.com/d2-projects/d2-admin/commit/ef9ab5545f6ceef9a19e59400b31225cce245b5f))
* 优化接口配置设计,注册的网络请求会自动注册到 vue 原型 $api 上,修改了一些旧的接口调用方式 ([28acfdb](https://github.com/d2-projects/d2-admin/commit/28acfdbb04cb12079981dc495d1f95f5c6cad0aa))
* 使用 axios 扩展的方式实现 mock 数据 ([ac9b1ea](https://github.com/d2-projects/d2-admin/commit/ac9b1ea26dc9924ac97582033df6f747579ac2f7))
* 全局错误捕捉 ([60349f0](https://github.com/d2-projects/d2-admin/commit/60349f03445c9cab21ea378a9311e6191471b835))
* 更新 eslint 后，修复新检查出的错误 ([f4a10ed](https://github.com/d2-projects/d2-admin/commit/f4a10ed3c3c28f735af9f7e3538c6cc507caa2f9))
* 移除 mockjs 以及相关示例 ([804f66e](https://github.com/d2-projects/d2-admin/commit/804f66eb0581a20c3601f17ea0e384700c114e6b))
* 简化错误捕捉插件代码 ([6628f1b](https://github.com/d2-projects/d2-admin/commit/6628f1b462733f319cbd89a7a7ddf1dc1ca745ce))
* **theme:** add element theme ([97f00c2](https://github.com/d2-projects/d2-admin/commit/97f00c21ddd678789d1b88bfe2466e2bd9cf0c81))

# [1.10.0](https://github.com/d2-projects/d2-admin/compare/v1.9.2...v1.10.0) (2020-04-26)


### Bug Fixes

* 升级 cdn 依赖版本 ([771031d](https://github.com/d2-projects/d2-admin/commit/771031d7d39a3ab2d013cbf5d8d18ee949f64b97))


### Features

* add theme chester ([e3fd543](https://github.com/d2-projects/d2-admin/commit/e3fd543573d42f2f06c0214d34dea6263f8c3294))

## [1.9.2](https://github.com/d2-projects/d2-admin/compare/v1.9.1...v1.9.2) (2020-04-25)


### Bug Fixes

* **dependencies-cdn:** 修复生产环境中 CDN 没有引用 .min 的问题 ([f1f7b91](https://github.com/d2-projects/d2-admin/commit/f1f7b91c3f0fcdceca3815b700343b38194805c9))

## [1.9.1](https://github.com/d2-projects/d2-admin/compare/v1.9.0...v1.9.1) (2020-04-23)


### Bug Fixes

* 修复"增加侧边栏菜单折叠动画效果切换与设置"提交中遗留的问题 ([0e4f61c](https://github.com/d2-projects/d2-admin/commit/0e4f61c05965411e9013dcef0281517fba7a6635))

# [1.9.0](https://github.com/d2-projects/d2-admin/compare/v1.8.5...v1.9.0) (2020-04-22)


### Bug Fixes

* **store:** 修复 keepAliveRemove 操作后不能恢复页面缓存的 bug 以及相关 demo 页面 ([d249c86](https://github.com/d2-projects/d2-admin/commit/d249c86406bd3d808a3ef83ac0fd6f8e3103e8c6))
* 修正多标签页控制演示页面的错误代码 ([c13b59e](https://github.com/d2-projects/d2-admin/commit/c13b59e5e295f41fff52627474acca23055a2308))


### Features

* **demo:** 更新色盘样式 ([32421fe](https://github.com/d2-projects/d2-admin/commit/32421fe351d47e56ed1d81e5fd8e5a17c361b1f2))
* 移除无用的 __filename 设置 ([c19ff32](https://github.com/d2-projects/d2-admin/commit/c19ff32287204db680b76999d1c4ae500a6d44a4))
* **message:** 增强 message 提示的配色对比 ([c36fd8e](https://github.com/d2-projects/d2-admin/commit/c36fd8e5a27b574180aa4f055a55a4e12960e0f5)), closes [#243](https://github.com/d2-projects/d2-admin/issues/243)
* 移除无用的 d2-crud v1 提示 ([a494560](https://github.com/d2-projects/d2-admin/commit/a494560c8a6bab6a17bce423286e5593de0f3b8f))
* **element demo:** 移除内置的 elementUI demo ([8b37d3e](https://github.com/d2-projects/d2-admin/commit/8b37d3e77ffd9d713dc8f0a18d416f5606d14c21))
* **search panel:** 关闭搜索面板中列表容器的阴影 ([eb08ca1](https://github.com/d2-projects/d2-admin/commit/eb08ca19d4db485eded5f92491b420d74d3188ef))

# [1.9.0](https://github.com/d2-projects/d2-admin/compare/v1.8.5...v1.9.0) (2020-04-21)


### Features

* **demo:** 更新色盘样式 ([32421fe](https://github.com/d2-projects/d2-admin/commit/32421fe351d47e56ed1d81e5fd8e5a17c361b1f2))
* 移除无用的 __filename 设置 ([c19ff32](https://github.com/d2-projects/d2-admin/commit/c19ff32287204db680b76999d1c4ae500a6d44a4))
* **message:** 增强 message 提示的配色对比 ([c36fd8e](https://github.com/d2-projects/d2-admin/commit/c36fd8e5a27b574180aa4f055a55a4e12960e0f5)), closes [#243](https://github.com/d2-projects/d2-admin/issues/243)
* 移除无用的 d2-crud v1 提示 ([a494560](https://github.com/d2-projects/d2-admin/commit/a494560c8a6bab6a17bce423286e5593de0f3b8f))
* **element demo:** 移除内置的 elementUI demo ([8b37d3e](https://github.com/d2-projects/d2-admin/commit/8b37d3e77ffd9d713dc8f0a18d416f5606d14c21))
* **search panel:** 关闭搜索面板中列表容器的阴影 ([eb08ca1](https://github.com/d2-projects/d2-admin/commit/eb08ca19d4db485eded5f92491b420d74d3188ef))

## [1.8.5](https://github.com/d2-projects/d2-admin/compare/v1.8.4...v1.8.5) (2020-04-21)


### Bug Fixes

* **tab:** 修复多标签页拖拽排序后首页 tab 变为可关闭的状态，并使用更合理的方法控制首页标签不可关闭 ([606e143](https://github.com/d2-projects/d2-admin/commit/606e14380d66709b0a18bfedb5dd11cf973e81f9))

## [1.8.4](https://github.com/d2-projects/d2-admin/compare/v1.8.3...v1.8.4) (2020-04-19)


### Bug Fixes

* 更新演示表格下载地址和下载方式 ([be64607](https://github.com/d2-projects/d2-admin/commit/be64607cec294337fbcbe7622550846ffcdd351a)), closes [#259](https://github.com/d2-projects/d2-admin/issues/259)

## [1.8.3](https://github.com/d2-projects/d2-admin/compare/v1.8.2...v1.8.3) (2020-04-19)


### Bug Fixes

* **menu-side:** 修复侧边栏菜单自动展开失效 ([72cc381](https://github.com/d2-projects/d2-admin/commit/72cc381a141fa7302039366ef4078ea221ba9900)), closes [#258](https://github.com/d2-projects/d2-admin/issues/258)
* 修复菜单自动折叠的 bug ([06f1acf](https://github.com/d2-projects/d2-admin/commit/06f1acf522c83b966ec244bd2c9bbd9b3972f0a5)), closes [#229](https://github.com/d2-projects/d2-admin/issues/229)


### Performance Improvements

* **menu-side:** 直接使用 $route.fullPath 决定侧边栏菜单激活 ([0ed6922](https://github.com/d2-projects/d2-admin/commit/0ed6922140f673da3a64724a47c442b2a0b9b9b1))
