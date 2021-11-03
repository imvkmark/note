# 主域 301 重定向

你的网站可能有多个域名访问，比如：`www.wulicode.com`、`wulicode.com` 等，设置主域意思是不管用户输入哪个域名，都会 `301` 重定向到主域上，设置主域可以对 SEO 更友好，比如：

> 以 wulicode.com 为主域

```
www.wulicode.com => wulicode.com
www.wulicode.com/search/xxoo => wulicode.com/search/xxoo
www.wulicode.com/a/b/c/404.html => wulicode.com/a/b/c/404.html
```

这里把所有的 80 端口匹配域名都重新定向到 https 访问

_domain.com.conf_

```conf
server {
    listen       80;

    # 配置域名
    server_name domain.com www.domain.com;

    # 配置让这些 HTTP 的访问全部 301 重定向到 HTTPS 的
    return 301 https://domain.com$request_uri;
}
```
