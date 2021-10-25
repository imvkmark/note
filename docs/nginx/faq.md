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
