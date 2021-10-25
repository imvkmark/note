# Mac 下安装 MongoDB

![](https://file.wulicode.com/note/2021/10-25/14-16-55179.png)

## 安装和启停

**添加 mongo 仓库**

```
$ brew tap mongodb/brew
```

**安装**

```
# 安装最新版
$ brew install mongodb-community

# 安装指定版本
$ brew install mongodb-community@4.2
$ brew install mongodb-community@3.6

# 仅仅安装最新的 Shell
$ brew install mongodb-community-shell
```

**默认位置**

-   配置文件: /usr/local/etc/mongod.conf
-   日志: /usr/local/var/log/mongodb
-   数据: /usr/local/var/mongodb

**启动/停止(通过 Services)**

```
$ brew services start mongodb-community
$ brew services stop mongodb-community
```

**启动/停止(手动)**

```
$ mongod --config /usr/local/etc/mongod.conf

$ mongo admin --eval "db.shutdownServer()"
```

## 命令行

进入命令行

```sh
$ mongo
MongoDB shell version v4.2.2
```

```
# 显示数据库
mongo > show dbs;
admin   0.000GB
config  0.000GB
local   0.000GB

# 使用数据库
mongo > use local
switched to db local
```

## Faq

1. MongoDB 启动时报错：exception in initAndListen: MustDowngrade: Collection does not have UUID in KVCatalog

大概意思就是说需要降级，开始在卸载的时候数据目录并未随之删除，新版的配置文件，数据文件路径什么的都没变，很有可能是以前的历史数据造成的, 如果需要保留历史数据则需要到老版本获取备份, 如果不需要则删掉即可.
