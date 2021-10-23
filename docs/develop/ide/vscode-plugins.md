# VSCode 插件

## 存储图片到 Aliyun(推荐)

安装插件 [Paste To Aliyun Oss](https://marketplace.visualstudio.com/items?itemName=duoli.paste-ali-oss)

安装之后可以使用 `ctrl + cmd + v` 来将图片直接粘贴到阿里云并把地址复制到 vscode 中

![](https://file.wulicode.com/static/paste-ali-oss/save-to.gif)

## 本地图片粘贴 [Paste Image]

安装插件 [Paste Image](https://marketplace.visualstudio.com/items?itemName=mushan.vscode-paste-image)

安装之后可以使用 `alt + cmd + v` 来将图片直接粘贴到编辑器中,
直接粘贴的图片默认位置和命名并不符合我们的要求, 所以需要重新进行配置

配置日期的参考文档: [Moment 格式](https://momentjs.com/docs/#/displaying/format/)

```json
{
	"settings": {
		"pasteImage.basePath": "${projectRoot}",
		"pasteImage.defaultName": "Y/MMDD/HHmmss",
		"pasteImage.prefix": ".. image:: /",
		"pasteImage.path": "${projectRoot}/_static/images/",
		"pasteImage.encodePath": "none"
	}
}
```

这样我们粘贴图片的之后就可以直接将文件粘贴到
`/_static/images/2020/0131/191053.png` 类似目录下
​

## 设置为中文语言

​
1). 查找是否安装中文插件

![](https://file.wulicode.com/note/2021/10-23/15-25-09834.png)

2). 设置选择中文语言

打开 `View -> Command Palette` 搜索 `Configure Display Language`, 选择 `zh-cn`

![](https://file.wulicode.com/note/2021/10-23/15-25-20940.png)

3. 重启, 这样显示便是中文了

![](https://file.wulicode.com/note/2021/10-23/15-25-30935.png)
