# [译] 在 CentOS 7 上安装和配置 Redis 5.x

原文地址 : [How to Install and Configure Redis on CentOS 7](https://linuxize.com/post/how-to-install-and-configure-redis-on-centos-7/)

![](./media/15817911042617/15817918597723.jpg)


Redis是一个开源的内存型数据库。它可以用作数据库，缓存或消息代理，并支持各种数据结构，例如字符串，哈希，列表，集合等。Redis 通过 Redis Sentinel 提供高可用性，包括监视，通知，自动故障转移。它还使用 Redis Cluster 在多个 Redis 节点之间提供自动分区。

本教程说明了如何在 CentOS 7 服务器上安装和配置 Redis。

## 先决条件

在开始本教程之前，请确保您以[user with sudo privileges](https://linuxize.com/post/create-a-sudo-user-on-centos/)的身份登录。

## 在CentOS 7上安装Redis

Redis最新版软件包不包含在默认的 CentOS Repo 中。我们将从 Remi 源安装 Redis 5.x 版。

安装非常简单，只需执行以下步骤：

1). 首先在SSH终端中运行以下命令来启用 Remi 存储库：

```
$ yum install epel-release yum-utils
$ yum install http://rpms.remirepo.net/enterprise/remi-release-7.rpm
$ yum-config-manager --enable remi
```

2). 通过键入以下命令安装Redis软件包：

```
$ yum install redis
```

3). 安装完成后，启动 Redis 服务并启用以下命令使其在启动时自动启动：

```
$ systemctl start redis
$ sudo systemctl enable redis
Created symlink from /etc/systemd/system/multi-user.target.wants/redis.service to /usr/lib/systemd/system/redis.service.
```

要检查服务的状态，请输入以下命令：

```
$ systemctl status redis
```

应该看到类似以下的内容：

```
● redis.service - Redis persistent key-value database
Loaded: loaded (/usr/lib/systemd/system/redis.service; enabled; vendor preset: disabled)
Drop-In: /etc/systemd/system/redis.service.d
        └─limit.conf
Active: active (running) since Sat 2018-11-24 15:21:55 PST; 40s ago
Main PID: 2157 (redis-server)
CGroup: /system.slice/redis.service
        └─2157 /usr/bin/redis-server 127.0.0.1:6379
```

> 如果服务器上禁用了IPv6，则 Redis 服务将无法启动。

恭喜，这时已经在 CentOS 7 服务器上安装并运行了 Redis。

## 配置Redis远程访问

默认情况下，Redis不允许远程连接。只能从运行 Redis 的计算机 127.0.0.1 （localhost） 连接到Redis服务器。

仅当你要从远程主机连接到 Redis 服务器时，才执行以下步骤。如果使用单个服务器设置，并且应用程序和Redis在同一台计算机上运行，​​则不应启用远程访问。

要将Redis配置为接受远程连接，请使用文本编辑器打开Redis配置文件：

```
$ vim /etc/redis.conf
```

找到以开头的行，`bind 127.0.0.1` 然后在后面添加服务器专用IP地址 `127.0.0.1`。

**/etc/redis.conf**
```
# IF YOU ARE SURE YOU WANT YOUR INSTANCE TO LISTEN TO ALL THE INTERFACES
# JUST COMMENT THE FOLLOWING LINE.
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
bind 127.0.0.1 192.168.121.233
```

`192.168.121.233` 替换为你的地址。保存文件并关闭编辑器。

重新启动 Redis 服务以使更改生效：

```
$ systemctl restart redis
```

使用以下`ss`命令来验证Redis服务器正在 [监听](https://linuxize.com/post/check-listening-ports-linux/) 的端口 `6379`：

```
$ ss -an | grep 6379
tcp    LISTEN     0      128    192.168.121.233:6379            *:*
tcp    LISTEN     0      128    127.0.0.1:6379                  *:*
```

接下来，需要添加防火墙规则，以启用来自远程计算机上 TCP 端口上的访问 `6379`。

假设正在使用[`FirewallD`](https://linuxize.com/post/how-to-setup-a-firewall-with-firewalld-on-centos-7/) 防火墙来管理防火墙，并且希望允许从`192.168.121.0/24`子网进行访问，则可以运行以下命令：

```
$ firewall-cmd --new-zone=redis --permanent
$ firewall-cmd --zone=redis --add-port=6379/tcp --permanent
$ firewall-cmd --zone=redis --add-source=192.168.121.0/24 --permanent
$ firewall-cmd --reload
```

上面的命令创建一个名为 `redis` 的新 zone，打开端口 `6379` 并允许从专用网络进行访问。

此时，Redis 服务器将接受TCP端口 6379 上的远程连接。

确保将防火墙配置为仅接受来自受信任IP范围的连接。

要验证所有设置是否正确，您可以尝试使用 `redis-cli` 实用程序向远程计算机ping Redis服务器，该实用程序为Redis服务器提供命令行界面：

```
redis-cli -h <REDIS_IP_ADDRESS> ping
```

该命令应返回以下响应`PONG`：

```
PONG
```

## 结论

恭喜你已经在 CentOS 7 服务器上成功安装了 Redis。要了解有关如何使用 Redis 的更多信息，请访问其官方[文档](https://redis.io/documentation)。