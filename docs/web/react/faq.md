# React 常见问题

## 1. Uncaught Error: Invariant failed

> Uncaught Error: Invariant failed , You should not use `<Route>` outside a `<Router>`
> 参考地址 : https://www.freeformatter.com/url-parser-query-string-splitter.html

出现原因: 系统中存在两个实例, 例如

```js
import { Route } from "react-router";
import { Switch } from "react-router-dom";

// 应该修改为
import { Switch, Route } from "react-router-dom";
```

## 2. 加载自定义 Url

将加载的 URL 放到 div 中, 从而实现远程地址的加载来加载变量

```js
import postscribe from "postscribe";

let script = serverUrl + "/" + apiUrl.pamWechatConfig + "?url=" + window.location.href + "&type=base";
postscribe("#J_wxAuth", '<script src="' + script + '"></script>', {
	error: (e) => {
		console.log(e);
	},
	done: (e) => {
		wx.config(window.wxAuthConfig);
	},
});
```

## 3. 关掉线上 map 生成

参考文章 : [什么时候 create-react-app 会混淆或缩小代码？](https://blog.csdn.net/hahahhahahahha123456/article/details/102901643)

如果有 map 生成, 则许多源码对外来讲便是可视化的. 例如之前的一个代练项目


![](https://file.wulicode.com/note/2021/10-22/09-18-50652.png)



项目代码一览无余, 所以对于项目上线打包的时候必须要关闭源码 map

对于 `cra` 项目, 使用了 `react-app-rewired`, 则可以在 `config-overrides.js` 中增加如下相关配置, 来关闭 sources

```diff
const {override, addLessLoader, fixBabelImports, addWebpackAlias} = require('customize-cra');
const alias = require('./alias');

+ process.env.GENERATE_SOURCEMAP = "false";

function myOverrides(config) {
	// do stuff to config
	return config
}

module.exports = override(
	myOverrides,
	addLessLoader({
		javascriptEnabled : true
	}),
	fixBabelImports('import', {
			libraryName : 'antd-mobile',
			style : true
		}
	),
	addWebpackAlias(alias.resolve.alias)
)
```


![](https://file.wulicode.com/note/2021/10-22/09-19-19921.png)


关掉 map 之后则看起来放心多了

## 4. uncaught at check call: argument [object Promise] is not a function

主要原因在 `yield call(addGroup(payload));` 的使用姿势问题，对于需要传递参数的去哪个，不能直接这么干，应该改为

```
yield call(addGroup, payload);
```
