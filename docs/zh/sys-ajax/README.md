---
sidebar: auto
---

# 异步请求

D2Admin 使用 [axios](https://github.com/axios/axios) 作为异步请求工具，并做了一些封装。

| axios | 地址 |
| --- | --- |
| Github | [https://github.com/axios/axios](https://github.com/axios/axios) |
| npm | [https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios) |
| 中文文档 | [https://www.kancloud.cn/yunye/axios/234845](https://www.kancloud.cn/yunye/axios/234845) |

## 介绍

Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

* 支持浏览器和node.js
* 支持promise
* 能拦截请求和响应
* 能转换请求和响应数据
* 能取消请求
* 自动转换JSON数据
* 浏览器端支持防止CSRF(跨站请求伪造)

## 浏览器支持

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |

[![Browser Matrix](https://saucelabs.com/open_sauce/build_matrix/axios.svg)](https://saucelabs.com/u/axios)

## 使用方式

axios 默认的使用方式在这里不做介绍，D2Admin 推荐在您的项目中使用下面的方式获取数据：

### 设置接口地址

默认的请求地址在 `d2-admin/.env`

```
VUE_APP_API=/api/
```

上述设置将在您访问 `/demo/a` 时实际去访问 `/api/demo/a`

### 区分不同环境设置接口地址

如果您希望不同的环境使用不同的请求地址，可以在 `d2-admin/.env.development` 中添加设置（示例）：

```
VUE_APP_API=/api-dev/
```

这样您在开发环境和正式环境就有了不同的公共请求地址，在开发环境访问 `/demo/a` 时实际去访问 `/api-dev/demo/a`

### 通用配置

您在开始使用 D2Admin 开发您的项目之前，应该首先修改 `d2-admin/src/plugin/axios/index.js` 下的设置。

默认的设置需要遵循下面的数据返回格式约定：

``` js
{
  // 和后台约定的状态码
  code: 0,
  // 后台返回请求状态信息
  msg: '返回信息',
  // data 内才是真正的返回数据
  data: {
    list: [
      ...
    ]
  }
}
```

在响应拦截器中处理完数据后将会返回：

``` js
{
  list: [
    ...
  ]
}
```

### 业务错误

当发生错误时返回的数据示例：

``` js
{
  // 和后台约定的状态码
  code: 'unlogin',
  // 后台返回请求状态信息
  msg: '用户没有登录'
}
```

如果针对某个错误指定处理方法，应该在响应拦截器中加入对应的代码：

``` js
service.interceptors.response.use(
  response => {
    // 成功返回数据，在这里判断和后台约定的状态标识
  }
)
```

### http 错误

如果需要针对某个 http 错误指定处理方法，应该在响应拦截器中第二个参数中添加对应的代码。

``` js
service.interceptors.response.use(
  response => {},
  error => {
    // 发生 http 错误，在这里判断状态码
  }
)
```

### 不返回 code

在默认的设置中，如果您的接口没有返回 code 字段，将不会进行状态（非 http 状态，而是和后台约定好的状态类型）判断，直接返回 axios 请求返回的数据。

例如接口返回如下数据：

``` js
{
  list: [
    ...
  ]
}
```

在响应拦截器中判断该接口没有返回 code 字段，将会直接将返回：

``` js
{
  list: [
    ...
  ]
}
```

### 设计 API

假设您有一个返回数据的 API 接口，想访问它，您首先应该在 `d2-admin/src/api` 文件夹内创建合适的文件目录，例如：`d2-admin/src/api/demo/business/table/1/index.js`，这个文件中应该导出一个或者多个请求：

``` js
import request from '@/plugin/axios'

export function BusinessTable1List (data) {
  return request({
    url: '/demo/business/table/1',
    method: 'post',
    data
  })
}
```

### 使用 API 获取数据

在上面的步骤中创建了 API 文件，您应该在页面中这样使用：

``` vue
<script>
import { BusinessTable1List } from '@/api/demo/business/table/1'
export default {
  methods: {
    handleSubmit (form) {
      BusinessTable1List({
        name: ''
      })
        .then(res => {
          // 返回数据
        })
        .catch(err => {
          // 异常情况
        })
    }
  }
}
</script>
```

而不是在页面中直接调用 axios。

::: tip
虽然没有强制规定，请注意您的 API 文件夹结构规律性
:::