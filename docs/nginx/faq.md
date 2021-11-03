# 常用操作

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