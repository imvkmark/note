# [原] 本地搭建 packagist 的注意事项

## 搭建本地 packagist 平台

搭建平台按照 [ 3.4. 使用 Satis 处理私有仓库](https://learnku.com/docs/composer/2018/handling-private-packages-with-satis/2092) 这个文档来进行, 因为 2.0 版本支持的是 docker 方式, 这里暂时不做赘述

## 编写代码

编写代码, 完成单元测试

创建 代码仓库

推送代码

## 更新 satis 文件

```
{
	...
	"repositories": [
		{
			"type": "vcs",
			"url": "git@codeup.aliyun.com:dadi/poppy/ext-alipay.git"
		},
		{
			"type": "vcs",
			"url": "git@codeup.aliyun.com:dadi/poppy/ext-im.git"
		}
	],
	"require": {
		"poppy/ext-alipay": "*",
		"poppy/ext-im": "*"
	},
	...
}
```

## 让服务器支持代码拉取并自动执行包命令

因为 codeup 拉取代码白名限制, 所以需要对可以拉取的代码仓库启用 key 配置
