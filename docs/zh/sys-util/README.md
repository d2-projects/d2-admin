---
sidebar: auto
---

# Util 实用工具

D2Admin 的 util 模块位置：`d2-admin/src/libs/util.js`

## util.cookies.set

**介绍：**

存储 cookie 值

**参数**

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| name | 名称 | 必选 | String |  |  |
| value | 值 | 必选 | String |  |  |
| setting | 设置 | 必选 | Object | [js-cookie](https://github.com/js-cookie/js-cookie#readme) | `{ expires: 1 }` |

**使用示例：**

``` js
util.cookies.set({
  name: 'name',
  value: 'value',
  setting: {
    expires: 365
  }
})
```

**为什么不直接使用 cookie：**

util.cookies 内部使用 js-cookie 进行操作，并且在 cookie 名称上多做了一层逻辑封装，例如

``` js
util.cookies.set({
  name: 'name',
  value: 'value',
  setting: {
    expires: 365
  }
})
```

实际存储的 cookie 是

`d2admin-${version}-name` : `value`

使用

``` js
util.cookies.get('name')
```

实际取的也是 `d2admin-${version}-name`

最后你的 cookie 信息实际上可能类似这样（举例）：

* `d2admin-1.1.5-name` : `FairyEver`
* `d2admin-1.1.5-uuid` : `h8dsafy98du9f6yadsyf`
* `d2admin-1.1.5-token` : `dys87f89dsafy89adsh`

这样做的好处是可以保证如果您的 D2Admin 升级到了新版本，打开时使用的数据一定是重新初始化的，而您在使用 cookie 时无论赋值还是取值，都觉察不出这层包装

::: tip
不止 cookie 这样，db 的存储逻辑也会自动根据版本区分
:::

## util.cookies.get

**介绍：**

拿到 cookie 值

**参数**

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| name | 名称 | 必选 | String |  |  |

**使用示例：**

``` js
const data = util.cookies.get('name')
```

## util.cookies.getAll

**介绍：**

拿到 cookie 全部的值

**参数**

无

**使用示例：**

``` js
const data = util.cookies.getAll()
```

## util.cookies.remove

**介绍：**

删除 cookie

**参数**

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| name | 名称 | 必选 | String |  |  |

**使用示例：**

``` js
util.cookies.remove('name')
```

## util.title

**介绍：**

更新标题

**参数**

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| titleText | title 名称 | 必选 | String |  |  |

**使用示例：**

``` js
util.title('NewTitle')
```

结果：**`${process.env.VUE_APP_TITLE}` | NewTitle**

::: tip
`process.env.VUE_APP_TITLE` 在 `d2-admin/.env` 和 `d2-admin/.env.development` 中设置
:::

## util.open

**介绍：**

打开新页面

**参数**

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| url | 新的页面地址 | 必选 | String |  |  |

**使用示例：**

``` js
util.open('http://www.xxx.com')
```

## util.ua

**介绍：**

获取所有的 UA 信息

**参数**

无

**使用示例：**

``` js
const ua = util.ua()
```

结果示例

``` js
{
  browser: {
    name: "Chrome",
    version: "67.0.3396.99",
    major: "67"
  },
  engine: {
    name: "WebKit",
    version: "537.36"
  },
  os: {
    name: "Mac OS",
    version: "10.13.4"
  },
  device: {},
  cpu: {}
}
```
