# 控制台打印优化

使用 $log 可以在控制台输出美观的日志信息

<img src="http://fairyever.qiniudn.com/20180821133308.png" style="width: 260px; border: 1px solid #eaecef;"/>

## 胶囊

此方法打印一行“胶囊”样式的信息，即上图前四条

**参数：**

$log.capsule( `左侧文字`, `右侧文字`, `主题样式` )

**示例：**

``` js
this.$log.capsule('title', 'success', 'success')
```

## 彩色文字

此方法可以随意组合打印文字的颜色顺序

``` js
this.$log.colorful([
  { text: 'H', type: 'default' },
  { text: 'e', type: 'primary' },
  { text: 'l', type: 'success' },
  { text: 'l', type: 'warning' },
  { text: 'o', type: 'danger' }
])
```

上面的代码效果为效果图中第五行

## 快速方法

* $log.default
* $log.primary
* $log.success
* $log.warning
* $log.danger

**示例：**

``` js
this.$log.primary('primary style')
```

这五个快速方法的效果为效果图中第六至十行