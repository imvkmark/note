# 开发

## 版本

开发时候需要对项目设定版本号, 版本号遵循以下开源规则, 版本号不是十进制, 版本号在 gitflow 流程中可以得到很好的应用, 如果版本遵循 git flow 流程, 则无需打 `xx_last` 版本

参考文档 [语义化版本 2.0.0](https://semver.org/lang/zh-CN/)

版本约定: `Major.Minor.Patch`

```
Major : 主版本(上一版兼容)
Minor : 小版本
Patch : 补丁版本
```

## 流程

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

## 环境

对于环境, 项目开发分为 local, test, develop, pre, production

**local(本地开发)**

开发者部署在本机, 数据库共用 test 服务器数据库, 本地环境配置为 local

**test(本地测试)**

开发者代码合并并提交到 test 服务器, 供前端/测试在开发过程中进行联合调试和部分测试工作, 为了避免因为环境不一致导致的数据一致性问题, 用户 ID 起始为 1, 用户名默认前缀为 test

**develop(正式测试/dev 环境)**

开发者将开发内容开发完毕之后将开发内容部署到 dev 环境, 供测试进行测试, dev 环境数据库在测试过程中保持结构和 test 环境一致, 为了避免数据一致性导致的问题, 用户起始 ID 为 50000, 用户名默认前缀为 develop

**pre(预发环境)**

此环境和线上环境使用同样数据库, 主要为了验证版本之间的兼容性和数据一致性问题

**production(线上/生产环境)**

线上环境, 独立数据库, 运维进行数据管理, 生产环境用户 ID 应该从 100000 开始, 避免数据一致导致的问题

## 代码

### 变量

对于使用 `#` 进行注释的分组, 我们建议使用如下样式进行分组, 例如 `.env` 文件, `nginx.conf` 配置文件

```env
# Database
# -----------------------------------------
DB_HOST=127.0.0.1
DB_DATABASE=db-name
DB_USERNAME=db-user
DB_PASSWORD=db-password
```

## nginx

### 上传图片的大小约定

上传图片应当服务端 / 客户端均进行统一的大小限制, 所需要的结果是

1. 客户端无法选择(提示超出大小限制)
2. 提交到服务端之后客户端根据错误码进行正确的错误提示, 客户端做二次保障, 例如服务端返回 413, 客户端应当给出说明, 上传文件超出大小限制

### 日志

**搜集**

日志使用 logtail 进行搜集/分析, 搜集的目的是找出来当前的性能瓶颈并进行跟踪, 对于 大于 200ms 的接口, 根据频次, 速度进行合理安排跟进

对于资源文件可以不进行搜集

> tip : 可能需要补充

```
js/css/ico/png/jpeg/gif
```

搜集 header 头信息参考 [客户端标准化 header 定义](./client.md)

**切割**

日志的切割应当遵循, 不要因为服务器日志的访问的增加, 导致磁盘过满并进行人工干预

**静态资源的缓存访问**

对于静态资源, 本地缓存 + 服务端变动验证

资料参考 : [Nginx 的静态页面刷新&缓存的解决方案](../../nginx/example/static-expired.md)

_conf.d/{proj}.conf_

```
location ~* \.(jpg|gif|png|jpeg|bmp|svg|eot|woff|woff2|ico)$
{
    access_log off;
    expires 30d;
    add_header Cache-Control "public, max-age=0, must-revalidate";
}

location ~* \.(js|css)?$
{
    access_log off;
    expires 1d;
    add_header Cache-Control "public, max-age=0, must-revalidate";
}
```

**位置**

日志的位置应当放置在 `/webdata/logs/{project}/` 目录下, 对于不同的应用区别对待

```
# nginx
web.access.log
web.error.log
# supervisor / queue
job.web.log
job.socket.log
```

### IP 访问

IP 不允许直接访问网站

原因:

1. 工信部要求, 域名必须备案才能进行访问, 防止未备案的域名指向过来造成麻烦
2. 允许 IP 直接访问会导致恶意解析, 任何人都可以解析域名到这个网站, 导致运营风险

## QA

**数据一致性导致的问题**

数据一致性导致的问题一般为对接的三方数据, 未提供开发环境, 我们再对接的过程中, 使用真实的数据和三方进行对接, 但对方仅仅使用我们提供的用户 ID 值作为唯一识别值, 这样相同的 ID 在使用的过程中会出现混淆的问题, 未避免此问题可以将各环境的 ID 进行下区分
