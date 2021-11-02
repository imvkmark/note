# Ubuntu 18.04 安装 LNMP(Nginx, PHP7.4, MySQL5.7)

> 18.04 测试通过
> 原理一致, 不过不同系统支持的版本不同, 详情见 https://launchpad.net/~ondrej/+archive/ubuntu/php
> 现在 Ondrej PPA 支持的平台是 Hirsute (21.04), Groovy (20.10), Focal (20.04), Bionic (18.04) 这几个(2021 年 11 月)

本文基于阿里云服务器手动安装(由于服务器配置比较低，之前一直用一键安装，CPU 会爆到 99%)，服务器配置(`1核、1G、50M`)，安装列表：

```
Ubuntu 18.04
Nginx latest
PHP 7.4
MySQL 5.7
```

## 安装[Nginx](http://nginx.org/)

安装文档参考 : [Linux Package At Ubuntu](http://nginx.org/en/linux_packages.html#Ubuntu)

### 1、首先添加 nginx_signing.key(必须，否则出错)

```sh
# 安装必要工具
$ sudo apt install curl gnupg2 ca-certificates lsb-release ubuntu-keyring

# 导入官方授权key
$ curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \
    | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null

# 验证授权key
$ gpg --dry-run --quiet --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg
```

### 2、添加 [Nginx](http://nginx.org/) 官方提供的源

```sh
# 加入源列表 @ 稳定版
$ echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
http://nginx.org/packages/ubuntu `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list

# 加入源列表 @ 主线版本, 我的理解为开发版
$ echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
http://nginx.org/packages/ubuntu `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list
```

### 3、更新源并安装 [Nginx](http://nginx.org/)

```
$ sudo apt-get update

$ sudo apt-get install nginx
```

**安装**[**Nginx**](http://nginx.org/)**完成后可查看版本号，输入：**

```
$ /usr/sbin/nginx -v
```

至此[Nginx](http://nginx.org/)安装完成，此时访问 IP 可以看到 Welcome Nginx 的界面。

# 安装[PHP7](http://php.net/)

本文通过[Ubuntu](http://www.ubuntu.org/) PPA 来安装[PHP7](http://php.net/).

### 1、添加 PPA

```
$ sudo apt-get install python-software-properties software-properties-common

$ sudo add-apt-repository ppa:ondrej/php

$ sudo apt-get update
```

### 2、安装[PHP7](http://php.net/)以及所需的一些扩展

```
$ sudo apt-get install php7.4-fpm php7.4-mysql php7.4-common php7.4-curl php7.4-cli php7.4-mcrypt php7.4-mbstring php7.4-dom
```

### 3、配置[PHP7](http://php.net/)

打开 `php.ini` 配置文件:

```
$ sudo vim /etc/php/7.4/fpm/php.ini
```

找到`cgi.fix_pathinfo`选项，去掉注释;，然后将值设置为`0`:

```
cgi.fix_pathinfo=0
```

> Note：启动后重启 `php7.4-fpm` ，输入： `sudo service php7.4-fpm restart`

## Nginx 配置

### 1、在 `/etc/nginx/nginx.conf` 文件中的第一行查看你的[Nginx](http://nginx.org/)用户。

```
$ less /etc/nginx/nginx.conf
```

### 2、修改用户和组

> [PHP7](http://php.net/)默认的用户和组是`www-data`。 如果你的[Nginx](http://nginx.org/)用户名也是`www-data`，那么不需要做下面的修改。 如果你的[Nginx](http://nginx.org/)用户名是 nginx，那么你可以在/etc/nginx/nginx.conf 文件中将它修改成`www-data`
> 这里的目的是统一运行的用户名, 你可以使用你喜欢的用户名作为运行用户

```
$ sudo vi /etc/nginx/nginx.conf
```

### 3、重启[Nginx](http://nginx.org/)服务

```
$ sudo service nginx reload
```

## 安装 MySQL

```
$ sudo apt-get install mysql-server-5.7 mysql-client-5.7
```

途中会提示设置 MySQL 的密码，安装好后：

```
$ mysql -uroot -p
```

然后输入刚刚设置的密码，能成功进入即成功安装。

## 参考

-   [Ubuntu 安装 LNMP(Nginx1.8, PHP7.0.4, MySQL5.6,基于阿里云服务器)](https://pigjian.com/article/ubuntu-lnmp-nginx18-php704-mysql56)
