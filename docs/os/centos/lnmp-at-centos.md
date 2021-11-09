# CentOS 7 安装 nginx, php, mysql, redis, supervisor 套件

## 初始化系统

这里设置的用户是 `duoli`

在此之前现需要对 [CentOS 进行服务器完善和升级](./system-install.md)

### 设置软件源

-   mysql

```
# 由于mysql 版权方面的限制, centos 7 没有内置mysql 服务器, 必须从mysql 官方进行安装
$ yum install http://dev.mysql.com/get/mysql57-community-release-el7-8.noarch.rpm
```

-   设置 nginx 源

**方式一:(安装 rpm:推荐)**

```
$ yum install http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
```

**方式二:(手动创建)**

源地址: [nginx: Linux packages](http://nginx.org/en/linux_packages.html)
创建 vim `/etc/yum.repos.d/nginx.repo` , 并且填充以下内容来安装 yum repository 库

```nginx
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key

[nginx-mainline]
name=nginx mainline repo
baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
gpgcheck=1
enabled=0
gpgkey=https://nginx.org/keys/nginx_signing.key
```

默认情况下，使用稳定 `nginx` 仓库包。如果您想使用 `mainline nginx` 包，运行以下命令

```
$ sudo yum-config-manager --enable nginx-mainline
```

### 安装基础软件

```sh
# 安装常用软件
$ yum install vim git yum-utils
$ yum install redis --enablerepo=remi
```

## 安装软件以及配置

### 安装并配置 Mysql 数据库

```sh
# 安装 mysql server
$ yum install mysql-server
```

**启动 mysql 并且获取密码**

```
$ systemctl start mysqld

# mysql 5.7 在安装完成的时候会生成一个临时密码, 我们需要找到错误日志 `/var/log/mysqld.log`来获取这个临时密码
# use below command to see the password:
$ grep 'temporary password' /var/log/mysqld.log
[Note] A temporary password is generated for root@localhost: m#mMbdga&9Zn
```

**初始化 mysql**

```
$ mysql_secure_installation
Securing the MySQL server deployment.
Enter password for user root: ******

New password: ******

Re-enter new password: ******

The 'validate_password' plugin is installed on the server.
The subsequent steps will run with the existing configuration
of the plugin.
Using existing password for root.

Estimated strength of the password: 100
Change the password for root ? ((Press y|Y for Yes, any other key for No) : *

Estimated strength of the password: 100
Do you wish to continue with the password provided?(Press y|Y for Yes, any other key for No) : y
By default, a MySQL installation has an anonymous user,
allowing anyone to log into MySQL without having to have
a user account created for them. This is intended only for
testing, and to make the installation go a bit smoother.
You should remove them before moving into a production
environment.
Remove anonymous users? (Press y|Y for Yes, any other key for No) :  Y

Success.


Normally, root should only be allowed to connect from
'localhost'. This ensures that someone cannot guess at
the root password from the network.

Disallow root login remotely? (Press y|Y for Yes, any other key for No) : N


... skipping.
By default, MySQL comes with a database named 'test' that
anyone can access. This is also intended only for testing,
and should be removed before moving into a production
environment.


Remove test database and access to it? (Press y|Y for Yes, any other key for No) : N

 ... skipping.
Reloading the privilege tables will ensure that all changes
made so far will take effect immediately.

Reload privilege tables now? (Press y|Y for Yes, any other key for No) : Y

Success.

All done!
```

设置密码的方法

```sh
$ mysql -uroot -p******
mysql> set password for 'root'@'localhost' = password('markzhao123456');
mysql> exit
```

**配置数据库用户**

```
CREATE USER 'remote'@'%' IDENTIFIED WITH mysql_native_password AS 'U*OSy)iKk$XO9dMB';
GRANT ALL PRIVILEGES ON *.* TO 'remote'@'%' REQUIRE NONE WITH GRANT OPTION MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;
GRANT ALL PRIVILEGES ON `1dailian\_v2`.* TO 'remote'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES
```

**让用户可以远程访问**
在 my.conf 中 [mysqld] 部分增加以下行并重启 mysqld

```
bind-address=0.0.0.0
```

**开机自启动**

```
$ systemctl enable mysqld
```

### 安装并配置 nginx

**安装 Nginx**

```sh
# 安装 nginx
$ yum install nginx --enablerepo=nginx
```

**配置 nginx 时候的运行组**

```nginx
# /etc/nginx/nginx.conf
user duoli;

# max upload setting
http {
    # http level
    client_max_body_size 20m;

    server{
        # server level
        client_max_body_size 20m;
    }

}
```

这里需要注意 nginx 缓存目录的权限需要和运行用户一致

```bash
# 目录位置
/var/cache/nginx
/var/lib/nginx
/var/log/nginx
```

**配置 nginx 虚拟主机**

```nginx
server{
    listen 80;
    # 如果这里是 IP, 则才会允许访问, 否则, 扯破牛蛋也访问不到
    server_name www.domain.com ;
    index index.php index.html;
    root /webdata/www/domain/public;

	# 这里注意和服务器自带不同的是
	# fastcgi_param  SCRIPT_FILENAME  /scripts/$fastcgi_script_name;
	# fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
	# 会导致 FastCGI sent in stderr: "Primary script unknown" while reading response header from upstream
    location ~ \.php$ {
        fastcgi_pass   127.0.0.1:9000;
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ .*\.(js|css)?$ {
        expires 12h;
    }


    access_log /webdata/logs/domain.access.log main;
    error_log /webdata/logs/domain.error.log;
}
```

### 安装并配置 php

```sh
# 安装 php 基于 remi , 所以需要安装 remi 源
# 如果需要安装其他版本, 则需要将 repo=remi-php7x
$ yum install --enablerepo=remi-php74 php php-pdo php-fpm php-mbstring php-pecl-mcrypt php-gd php-mysqli php-zip php-bcmath php-xml
```

**配置 php-fpm 权限**

```
# /etc/php-fpm.d/www.conf
user = duoli
group = duoli
```

**配置 php.ini**

```ini
# 时区
date.timezone = Asia/Shanghai
# upload
post_max_size       = 20M
upload_max_filesize = 20M
```

**配置 session 是可写状态**

```sh
$ chown -R duoli:duoli /var/lib/php/
```

### 配置系统端口允许访问并加入自启动

配置的端口有 9023/9024/80/3306 等

```sh
# 配置 http
$ firewall-cmd --permanent --zone=public --add-service=http
# 配置 3306
$ firewall-cmd --permanent --zone=public --add-port=3306/tcp
# 重启 防火墙
$ firewall-cmd --reload

# 如未启动服务, 可启动服务
$ systemctl start php-fpm mysqld nginx supervisord redis
# 开机启动
$ systemctl enable php-fpm mysqld nginx supervisord redis
```

## 补充

### 下载安装 mysql

获取最新下载地址:
[http://dev.mysql.com/downloads/mysql/](http://dev.mysql.com/downloads/mysql/)

```
# 下载
$ wget http://dev.mysql.com/get/Downloads/MySQL-5.7/mysql-community-client-5.7.*-1.el7.i686.rpm
$ wget http://dev.mysql.com/get/Downloads/MySQL-5.7/mysql-community-server-5.7.*-1.el7.i686.rpm

# 安装
yum localinstall mysql-community-client**.rpm
yum localinstall mysql-community-server**.rpm
```

### Centos 进行 Php 升级(使用 remi-php 源)

安装启用 remi 的工具包

```
# 安装 util 工具
$ yum install yum-utils

# 启用相应的源
$ yum-config-manager --enable remi-php74
```

进行 PHP 升级

```
$ yum upgrade php
```

升级之后权限会进行重置

_/var/lib/php/_

```
drwxrwx--- 2 root apache 4096 10月 20 14:03 opcache
drwxrwx--- 2 root apache 4096 10月 20 14:03 session
drwxrwx--- 2 root apache 4096 10月 20 14:03 wsdlcache
```

更改目录权限

```
$ chown -R userxxx.userxxx /var/lib/php/

# 更改文件执行权限(一般升级不用)
$ vim /etc/php-fpm.d/www.conf
# user=...
# group=xxx
```

## FAQ

### File not found

`nginx/apache` 网页文件的 selinux 上下文需要配置, 如果未配置则日志中返回的错误是 ` FastCGI sent in stderr: "Primary script unknown" while reading response header from upstream`, 暴力解决方法: 关闭

```sh
$ vim /etc/sysconfig/selinux
```

设置为禁用

```
# This file controls the state of SELinux on the system.
# SELINUX= can take one of these three values:
#     enforcing - SELinux security policy is enforced.
#     permissive - SELinux prints warnings instead of enforcing.
#     disabled - No SELinux policy is loaded.
SELINUX=disabled
```

## 补充附录

### 变更记录

**2021-10-28**

-   增加权限改动示例

**2019-09-20**

-   pip 更新为 pip3, 不使用 python2
-   加入 redis

**2019-04-03**

-   redis 使用 remi 安装最新版
-   supervisor 使用 pip 安装最新版, 系统自带的版本较低
-   supervisor 启动加入自己写入配置文件

**2016-10-05**

-   第一版版本

### 参考文章

-   [How To Install Nginx on CentOS 7](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-centos-7)(很及时, 解决了无法使用 IP 连接上服务器的问题)
-   [Nginx 安装（官网翻译）](http://www.cnblogs.com/toughlife/p/5487575.html)
-   [nginx FastCGI 错误 Primary script unknown 解决办法](http://www.jb51.net/article/47916.htm)
