# 客户端

## Header 约定

**软件**

开发软件的相关信息

`x-os`

软件标识, 可选项为 'android/ios/h5/webapp/pc/mac/ubuntu/centos'

`x-ver`

软件版本号, 遵循语义化版本说明 [SemVer](https://semver.org/)

`x-id`

设备 ID, 唯一标示符, 如果是 h5 客户端则应当是自己计算出来的客户端标识, 如果是 android/ios, 则需要实现自己的计算方式

`x-app`

对于 os, version, id 的 json 字串信息, 以后可能会废弃(原因是 Nginx 无法解析头数据)

**系统**

系统 / 设备相关关键信息

`x-sys-name`

系统平台. 区分大小写, 例如 Android, iOS, iPad, Windows, Mac, CentOS

`x-sys-version`

系统版本号, 系统的数字标识. iOS 的可能值为 14.6, Android 可能值为 7

`x-sys-network`

系统网络类型. 可能值为 WiFi

`x-sys-device`

设备型号. iOS 可能值为 iPhone11,6 / iPad,3, Android 可能值为 HuaWei Mate P40

`x-sys-cpu`

cpu 架构类型. x86, arm64

**附加信息**

```
x-k1 : 屏幕宽度
x-k2 : 屏幕高度
.....
x-k3 ... x-k10 : 预留(如果没有值, 则应当为空)
```

**默认/重写**

`User-Agent`

用户标识头, 如果是 h5, 则取标准的 agent 浏览器/Webview 信息, 如果是 iOS/Android, 必要的数据值可能为 SmobaHelper/5.71.101 (iPhone; iOS 14.6; Scale/3.00)

**异常**

`sentry-trace`

Sentry 允许 H5 进行汇报的标识头, 对接 sentry 之后 web 默认收集信息的头信息, 无需自己设定

**Poppy Framework 快捷设置**

_config/poppy.php_

```php
return [
    'system' => [
        'cross_headers'     => [
            // sentry
            'sentry-trace',
            // app
            'x-app', 'x-os', 'x-ver', 'x-id', 
            // system
            'x-sys-name', 'x-sys-version', 
            'x-sys-network', 'x-sys-device', 'x-sys-cpu',
            // append
            'x-k1', 'x-k2', 'x-k3', 'x-k4', 'x-k5', 
            'x-k6', 'x-k7', 'x-k8', 'x-k9', 'x-k10',
        ],
    ]
]
```
