# [转+] Mac 使用 brew 安装 Nginx、MySQL、PHP-FPM 的 LNMP 开发环境

原文地址： [Mac OS使用brew安装Nginx、MySQL、PHP-FPM的LAMP开发环境](http://tabalt.net/blog/install-nginx-mysql-php-fpm-by-brew-on-mac/)

### 准备工作

新版的 Mac OS 内置了Apache 和 PHP，可以通过以下命令查看Apache和PHP的版本号：


```
$ httpd -v

  Server version: Apache/2.2.26 (Unix)
  Server built:   Dec 10 2013 22:09:38

$ php --version

  PHP 5.4.24 (cli) (built: Jan 19 2014 21:32:15)
  Copyright (c) 1997-2013 The PHP Group
  Zend Engine v2.4.0, Copyright (c) 1998-2013 Zend Technologies
```

因为我们要自己动手来安装 Nginx，因此首先来关闭系统自带的apache：

```
$ sudo apachectl stop  #关闭apache，如果事先没开启过，可以忽略报错信息
```

如果你的apache已经加入了launchctl，使用下面的命令来关闭：

```
$ sudo launchctl unload -w /System/Library/LaunchDaemons/org.apache.httpd.plist
```

为什么选择关闭apache？因为mac os x系统自带的apache是没有优雅的remove/uninstall 的方式的… 对于“洁癖”比较严重的童鞋，可以选择直接删除相关的文件！（千万不要手抖删错目录…）

```
$ sudo rm /usr/sbin/apachectl
$ sudo rm /usr/sbin/httpd
$ sudo rm -r /etc/apache2/
```

删除自带的php

```
$ sudo rm -r /usr/bin/php
$ sudo rm -r /usr/bin/phpize
$ sudo rm -r /usr/bin/php-config
$ sudo rm -r /usr/sbin/php-fpm
```

如果没有安装brew，可以按照官网的步骤安装

```
$ http://brew.sh/
```

### nginx的安装与配置

安装nginx

```
$ brew install nginx
```

修改配置文件

```
$ sudo vim /usr/local/etc/nginx/nginx.conf #修改默认的8080端口为80
```

给予管理员权限

```
$ sudo chown root:wheel /usr/local/opt/nginx/bin/nginx
$ sudo chmod u+s /usr/local/opt/nginx/bin/nginx
```

> 这里无法启动一定要确认权限是否正确, 尤其是在升级之后

这里使用 `brew services` 进行控制

```
$ brew services enable|start|restart|stop nginx
```

运行nginx

```
sudo nginx #打开 nginx
nginx -s reload|reopen|stop|quit  #重新加载配置|重启|停止|退出 nginx
nginx -t   #测试配置是否有语法错误
```

用法详解

```
nginx [-?hvVtq] [-s signal] [-c filename] [-p prefix] [-g directives]
```

选项列表

```
-?,-h           : 打开帮助信息
-v              : 显示版本信息并退出
-V              : 显示版本和配置选项信息，然后退出
-t              : 检测配置文件是否有语法错误，然后退出
-q              : 在检测配置文件期间屏蔽非错误信息
-s signal       : 给一个 nginx 主进程发送信号：stop（停止）, quit（退出）, reopen（重启）, reload（重新加载配置文件）
-p prefix       : 设置前缀路径（默认是：/usr/local/Cellar/nginx/1.2.6/）
-c filename     : 设置配置文件（默认是：/usr/local/etc/nginx/nginx.conf）
-g directives   : 设置配置文件外的全局指令
```

### mysql的安装与配置

安装mysql

```
$ brew install mysql
$ cd /usr/local/opt/mysql/
```

修改配置文件

```
sudo vim my.cnf
#如果出现无法启动mysql，rm my.cnf 
```

加入launchctl启动控制

```
cp /usr/local/opt/mysql/homebrew.mxcl.mysql.plist ~/Library/LaunchAgents/
launchctl load -w ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist
#取消启动
#launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist
```

初始化 mysql

```
./bin/mysql_install_db 
```

执行安全设置脚本,设置root账号密码

```
./bin/mysql_secure_installation
```

命令行连接mysql

```
mysql -uroot -p
```

mysql 可以对外服务

```
vim ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist
# 将这一行
<string>--bind-address=127.0.0.1</string>
# 替换为
<string>--bind-address=0.0.0.0</string>
```

### php的安装与配置

~~(10-13 10:23: 已经将 php 加入 核心包)brew 默认没有 php 安装包：~~


现在可以安装php了：
如果这里加上版本号, 则为指定版本,如果不加则是默认的版本, 非默认版本的属性是 `keg-only`, 意思就是可以支持多版本默认不会将命令行软链到 `/usr/local`

```
$ brew install php@7.2
```

安装之后有两段话需要注意

> php@7.2 is keg-only, which means it was not symlinked into /usr/local,
because this is an alternate version of another formula.
If you need to have php@7.2 first in your PATH run:
  echo 'export PATH="/usr/local/opt/php@7.2/bin:\$PATH"' >> ~/.zshrc
  echo 'export PATH="/usr/local/opt/php@7.2/sbin:\$PATH"' >> ~/.zshrc
> For compilers to find php@7.2 you may need to set:
  export LDFLAGS="-L/usr/local/opt/php@7.2/lib"
  export CPPFLAGS="-I/usr/local/opt/php@7.2/include"


因为 mac 系统自带 php, 如果想使用我们安装的作为第一命令行, 则需要将路径寻找优先级高于系统 `$PATH` 位置

这里将php路径加入PATH有两种方式:

第一种, 修改 `rc` 文件, 可以根据自己的命令行工具来使用

```sh
$ sudo vim ~/.bash_profile	
# add to files
export PATH="$(brew --prefix php@7.2)/bin:$PATH"
$ source ~/.bash_profile
```
这种方式如果使用 `pecl` 来安装 php 扩展的时候则由于 `keg-only` 冲突无法安装, 提示无权创建


第二种方式是
这里强制 php7.2 作为可以执行的版本, 这种可以使用 `pecl` 进行安装 相关扩展, 比如 `redis`, `swoole`

```sh
$ brew link --force php@7.2
```


这里也同样使用 `brew services` 来管理 php
```
$ [sudo] brew services start php@7.2
```

是否使用 sudo 的区别
> If sudo is passed, operate on /Library/LaunchDaemons (started at boot).
Otherwise, operate on ~/Library/LaunchAgents (started at login)

配置路径

```
/usr/local/etc/php/{version}/php.ini
/usr/local/etc/php/{version}/php-fpm.conf
```

配置 Nginx 支持 PHP-FPM

```
sudo vim /usr/local/etc/nginx/nginx.conf	
# 添加默认首页 php
index  index.php index.html index.htm;

# 取消以下内容的注释，并做修改
location ~ \.php$ {
       fastcgi_intercept_errors on;
       fastcgi_pass   127.0.0.1:9000;
       fastcgi_index  index.php;
       fastcgi_param  SCRIPT_FILENAME  /usr/local/Cellar/nginx/1.6.0_1/html$fastcgi_script_name;
       include        /usr/local/etc/nginx/fastcgi_params;
   }
```

### 测试环境

```
sudo vim /usr/local/Cellar/nginx/1.6.0_1/html/index.php

#添加测试代码
<?php 
	phpinfo();
```

### 结语

到目前为止，我们的Nginx、MySQL、PHP-FPM三大软件已经安装好了，针对不同的系统版本和软件版本，可能会遇到一些问题，欢迎留言探讨。

