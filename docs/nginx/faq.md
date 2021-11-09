# 常见问题

## 不记录资源请求

```conf
server {
    // static file log off
    location ~* \.(ico|jpg|jpeg|gif|png|swf|flv|js|css)$ {
        access_log off;
    }
}
```

## 默认 IP 不允许访问网站

_conf.d/default.conf_

```conf
server {
    listen 80 default;
    return 404;
}
```

## nginx 错误 - ERR_CONTENT_LENGTH_MISMATCH

**问题说明**

![](https://file.wulicode.com/note/2021/11-03/19-42-36767.png)

> 错误详细 :
> GET http://sentry.liex.sour-lemon.com/_static/1594691975/sentry/dist/app.js net::ERR_CONTENT_LENGTH_MISMATCH 200 (OK)
> GET http://sentry.liex.sour-lemon.com/_static/1594691975/sentry/dist/vendor.js net::ERR_CONTENT_LENGTH_MISMATCH 200 (OK)
> Uncaught ReferenceError: $ is not defined

**查看日志**

> 2020/07/14 11:32:23 [crit] 16348#0: \*1508 open() "/var/lib/nginx/tmp/proxy/3/28/0000000283" failed (13: Permission denied) while reading upstream, client: 60.216.119.220, server: sentry.liex.sour-lemon.com, request: "GET /\_static/1594691975/sentry/dist/app.js HTTP/1.1", upstream: "http://127.0.0.1:9080/_static/1594691975/sentry/dist/app.js", host: "sentry.liex.sour-lemon.com", referrer: "http://sentry.liex.sour-lemon.com/join-request/sentry/"

**解决方案**

```
$ sudo chmod -R 775 /var/lib/nginx/
```

## 日志切割

关于日志切割参考 [运维中的日志切割(logrotate)](../os/linux/logrotate.md)

## nginx: [error] invalid PID number "" in "/run/nginx.pid"

先执行

```
$ nginx -c /etc/nginx/nginx.conf
```

`nginx.conf` 文件的路径可以从 `nginx -t` 的返回中找到。

```
$ nginx -s reload
```

## 不记录 404 日志

nginx 有个选项 `log_not_found` 用来开启和禁用未发现的文件日志, 可用区块是 `http`, `server`, `location`

```conf
server {
    location =  /favicon.ico {
        log_not_found off;
        access_log off;
    }
}
```

## 参考

-   [invalid PID number "" in "/run/nginx.pid"](https://blog.csdn.net/achang21/article/details/80039561)
