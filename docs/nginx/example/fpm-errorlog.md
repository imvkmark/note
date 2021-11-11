# [转] 关于 Nginx 下开启 php-fpm 输出 php 错误日志的设置

原文地址: [关于 Nginx 下开启 php-fpm 输出 php 错误日志的设置](http://www.pooy.net/nginx-open-php-fpm-error-log.html)

最近在本地搭建的 LNMP 的开发环境。为了开发的时候不影响前端的正常开发就屏蔽的 PHP 里面 php.ini 中的一些错误提示。但是这样一来，就影响到了后端开发的一些问题比如不能及时调试开发中的一些问题。

nginx 与 apache 不一样，在 apache 中可以直接指定 php 的错误日志，那样在 php 执行中的错误信息就直接输入到 php 的错误日志中，可以方便查询。

在 nginx 中事情就变成了这样：nginx 只对页面的访问做 access 记录日志。不会有 php 的 error log 信息。nginx 把对 php 的请求发给 php-fpm fastcgi 进程来处理，默认的 php-fpm 只会输出 php-fpm 的错误信息，在 php-fpm 的 errors log 里也看不到 php 的 errorlog。

原因是 php-fpm 的配置文件 php-fpm.conf 中默认是关闭 worker 进程的错误输出，直接把他们重定向到/dev/null,所以我们在 nginx 的 error log 和 php-fpm 的 errorlog 都看不到 php 的错误日志。

所以我们要进行如下的设置就能查看到 nginx 下 php-fpm 不记录 php 错误日志的方法：

1,修改 php-fpm.conf 中的配置，如果没有请增加:

```ini
[global]
; Note: the default prefix is` `/usr/local/php/var
error_log = log``/php_error_log

[www]
catch_workers_output =yes
```

2.修改 php.ini 中配置，没有则增加

```ini
log_errors = On
error_log = "/usr/local/php/var/log/error_log"
error_reporting=E_ALL&~E_NOTICE
```

3.重启 php-fpm，

当 PHP 执行错误时就能看到错误日志在”/usr/local/lnmp/php/var/log/php_error_log”中了

如果出现：

```
$ service php-fpm restart

Gracefully shutting down php-fpm . done

Starting php-fpm
[17-Apr-2014 18:40:52] ERROR: [/usr/local/php/etc/php-fpm.conf:5] unknown entry catch_workers_
[17-Apr-2014 18:40:52] ERROR: failed to load configurationfile'/usr/local/php/etc/php-fpm.conf'
[17-Apr-2014 18:40:52] ERROR: FPM initialization failed
failed
```

那请在第一步的时候，认真将配置写入相对应的组中，不然就出现上面的：**ERROR: [/usr/local/php/etc/php-fpm.conf:5] unknown entry ‘catch_workers_output’**

最后看看效果：


![](https://file.wulicode.com/note/2021/11-11/17-27-07815.png)


![](https://file.wulicode.com/note/2021/11-11/17-27-20563.png)
