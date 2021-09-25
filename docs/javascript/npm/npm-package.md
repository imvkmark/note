# 发布 npm 包

关于如何发布可以查看 [[译] 创建并发布一个小而美的 npm 包](https://juejin.im/post/6844903751833092104)

关于如何搭建一个 npm 包并进行单元测试, 这里有个解决方案 [jslib-base](https://github.com/yanhaijing/jslib-base/blob/master/README.zh-CN.md)

在发布包的时候遇到的常见问题如下

## 常见问题

### 1. PUT https://registry.npm.taobao.org/@... - [no_perms] Private mode enable, only admin can publish this module

使用 `npm publish` 或者使用 `yarn publish` 出现 couldn't publish package:"https://registry.npm.taobao.org/包...:unauthorized

出现原因：使用的是淘宝源 cnpm,登陆到的是 cnpm

解决方法：切换到 npmjs 的网址，代码如下

```
npm config set registry http://registry.npmjs.org/

# 切换回淘宝源
npm config set registry https://registry.npm.taobao.org/
```

### 2. You must sign up for private packages

这里代表发布的时候必须要加入 `--access public`, 因为默认的 `@` 符号开始的必须是私有包, 如果默认需要显式的传成公共方法, 则需要自己主动约定

### 3. Couldn't publish package: Scope not found"

如果是用户名, 这里不需要创建 scope, 如果是除了自己用户名之外的, 需要确认 scope 是否存在, 如果不存在, 则可以创建一个 organization

参考地址 [How to publish NPM Scoped Packages / NPM scope not found?](https://stackoverflow.com/questions/43824012/how-to-publish-npm-scoped-packages-npm-scope-not-found)

### 4. 取消发布

```
$ yarn unpublish @pkg/name --force
```

### 5. yarn upgrade 更新依赖包时 yarn.lock 更新但 package.json 不同步更新版本信息

```sh
# 需要手动选择升级的依赖包，按空格键选择，a 键切换所有，i 键反选选择
$ yarn upgrade-interactive --latest
```
