# 前端标准化

## Web 前端

**Css 预处理器的使用**

我一直感觉 less 会笔记 sass/scss 要轻量级, 所以在系统中推荐使用 less 预处理器

**vue 项目中的 css 变量**

对于 vue3 + vite 项目, 使用 var 变量来替代 less 中的变量(暂定)

## Header 的约定

```
x-os  :  软件请求发起来源 : android/ios/h5/webapp/pc
x-ver :  软件版本号
x-id  :  软件设备号(设备自己计算出来进行唯一性认定的版本号)
x-sys-name : iOS / Android
x-sys-version : 14.6 / 7(Android)
x-sys-network : 网络类型 WiFi
x-sys-device : 设备型号 iPhone11,6 / iPad,3
x-sys-cpu : Cpu 架构信息

# Agent 信息
User-Agent : SmobaHelper/5.71.101 (iPhone; iOS 14.6; Scale/3.00)
x-k1 : 屏幕宽度
x-k2 : 屏幕高度
.....
x-k10 : 预留
```
