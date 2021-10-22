# 开发流程

## 代码

### 版本约定

开发时候需要对项目设定版本号, 版本号遵循以下开源规则, 版本号不是十进制, 版本号在 gitflow 流程中可以得到很好的应用, 如果版本遵循 git flow 流程, 则无需打 `xx_last` 版本

参考文档 [语义化版本 2.0.0](https://semver.org/lang/zh-CN/)

版本约定: `Major.Minor.Patch`

```
Major : 主版本(上一版兼容)
Minor : 小版本
Patch : 补丁版本
```

### 开发流程

**注释格式**

```
release # 2.28.0
- 功能 : 更新内容 1
- 优化 : 优化内容 1

hotfix # 2.28.1
- 修复 : 更新内容 1
- 修复 : 更新内容 2
```

**功能开发**

更新 develop 代码, 保证 develop 代码最新, 特性分支命名建议为版本号 x.x 不携带小版本号

```
# 开始开发
$ git checkout develop && git pull
$ git flow feature start 1.5
```

feature 分支已经开发完毕, 需要合并到 develop, 并检查远程 feature 分支是否删除, 如果没有, 则需要删除, 保证分支纯洁性

```
$ git flow feature finish 2.1
```

**发布**

开启 Release, 增加 build 文件描述, 修改版本号, 如果是前端项目需要修改 `package.json` 文件中的版本号, 这里的版本号是完整的版本, 发布之后将修改的内容发送给测试, 由测试统一汇总发送通知

```
$ git flow release start 2.1.0

# 结束 release, 合并代码
$ git flow release finish 2.1.0
```

**Hotfix 开发**

查看最新版本, 创建 hotfix, 版本号在 patch 版本号后递增.

```
# 查看版本
$ git tag|sort -V

# 开启修复分支
$ git flow hotfix start 2.28.1


# 完成分支
$ git flow hotfix finish 2.28.1
```

完成之后推送分支到 master & develop 分支, 发布之后将修改的内容发送给测试, 由测试统一汇总发送通知

**通知格式**

在项目的开发过程中进行通知. 通知格式如下

```
项目(环境) - 版本发布/更新
- 功能 : 增加功能 XX
- 优化 : 优化功能 XX
- 修复 : 修复 XX 问题
```

**线上更新**

> 线上如果运行队列的, 则需要重启队列

```
# 更新一下 develop 分支和 master 分支
# 查看版本并对之前的版本打标签, 避免更新错漏进行回滚, 若严格执行git flow 流程, 则无需进行 tag 标签
git tag |sort -V
git tag 2.0_last


# 线上更新
git checkout master &&\
git reset --hard &&\
git pull &&\
.. 项目操作
```
