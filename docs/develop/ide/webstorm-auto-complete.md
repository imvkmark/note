# [转+] 解决 Webstorm 不支持 nodejs 等语法提示和补全

在使用 Webstorm 写 es6、node 的时候，会出现没有语法提示甚至是产生波浪线，例如常用的 `require`, `import`

![](https://file.wulicode.com/note/2021/10-23/11-29-55367.png)


不仅是内置函数语法，不仅是 js，在一些第三方 npm 库（比如 element-ui），在 vue/html 等上也被黄色背景色标上“未知标签名”的语法提示

![](https://file.wulicode.com/note/2021/10-23/11-30-11398.png)


既影响美观，又不支持代码候选补全，实在对不起 WebStorm 前端开发利器的称号。

**解决方法**

1. 设置 Webstorm js 语法支持到 es6（或根据需要选择）

打开 :  `Preferences | Languages & Frameworks | JavaScript`

将 JavaScript Language version 更改为 项目所需要的版本,

2. 下载 node 语法库

**方法 1: 推荐**

```
$ yarn add @types/node -D
```

**方法 2: 依赖于编辑器**

打开 : `Preferences | Languages & Frameworks | JavaScript | Libraries`

![](https://file.wulicode.com/note/2021/10-23/11-30-23182.png)


选择下载, 选中 node


![](https://file.wulicode.com/note/2021/10-23/11-30-34259.png)


下载完成后 启用 `@types/node`


![](https://file.wulicode.com/note/2021/10-23/11-30-46278.png)


3. 不要过滤 `node_modules` 文件夹！

打开 `Preferences | Editor | File Types`; 取消 `node_modules` 此项

![](https://file.wulicode.com/note/2021/10-23/11-30-59075.png)


因为语法库就是在来自本机和当前项目的 `node_modules`文件夹中。

> 其实过滤 `node_modules` 文件夹是有一定道理的，它虽然总体积不大，每个文件体积也小，但是它文件数量巨大，特别是较大的项目，`node_modules` 包含的文件数量多似繁星…，如果让  Webstorm 加载进来，轻则出现一小段时间软件卡顿，重则电脑长时间崩溃，当然这和电脑的性能有关。所以有一些博客可能会建议开发者特别是初学者在设置中过滤掉 `node_modules` 文件夹。

虽然加载 `node_modules` 会让电脑卡顿一段时间，但是给 `Webstorm` 足够时间，在电脑性能不会太差的情况下还是可以加载完的，换来的编程便利还是值得的。

然后就慢慢等待加载完毕


![](https://file.wulicode.com/note/2021/10-23/11-31-14037.png)


加载完毕之后，如果当前项目下也有 node_modules，也会自动挂到 JavaScript Library 中

效果
设置后，不仅没有语法波浪线，在输入的时候已经有代码候选补全，并且按 ctrl 点击还能跳转查看源码

![](https://file.wulicode.com/note/2021/10-23/11-31-24467.png)


标签组件名也能补全

![](https://file.wulicode.com/note/2021/10-23/11-31-36678.png)


标签也不会出现语法背景黄色，并且还支持自定义属性参数的补全


![](https://file.wulicode.com/note/2021/10-23/11-31-49569.png)


## 参考文章

-   [完美解决 Webstorm 不支持 nodejs 等语法提示和补全](https://blog.csdn.net/Dobility/article/details/87563057)
