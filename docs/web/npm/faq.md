# npm 常见问题

## SentryCli 安装太慢

**方式 1: ~/.npmrc**

找到并编辑 `~/.npmrc`

```
$ vim .npmrc
```

```
sentrycli_cdnurl=https://cdn.npm.taobao.org/dist/sentry-cli
```

**方式 2:~/.zshrc**

添加环境变量, 这个在安装的时候可以进行识别的

```
# @sentry/cli
export SENTRYCLI_CDNURL=https://cdn.npm.taobao.org/dist/sentry-cli
```

## node-sass 安装慢

**方式 1: 设置 npm 源**
然后在 `~/.npmrc` 加入下面内容

```
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
```

**方式 2:安装替代工具**

```
# yarn
$ yarn add node-sass-install

# npm
$ npm i node-sass-install --save-dev
$ npx node-sass-install
```

> 这个 node-sass-install 有什么神奇的魔力？其实代码很简单，甚至简单到几乎没有代码。只是在 package.json 的 dependencies 里做了配置（当然因为 npm 比较弱智，所以原项目还是额外增加了两行不太重要的代码）：

```json
{
	"dependencies": {
		"node-sass": "npm:dart-sass@latest"
	}
}
```

## node-pre-gyp ERR! build error 错误的几种处理方式

> 错误信息:
> node-pre-gyp ERR! build error  node-pre-gyp ERR! stack Error: Failed to execute ..

**解决方式(可能的解决方法)**
删除 node_modules 文件夹, 删除 yarn.lock 或者 package.lock 文件, 然后再重新安装

## 参考文章

-   [解决@sentry-cli 或 node-sass 安装太慢](https://blog.csdn.net/qq_31201781/article/details/106147842)
