# 配置 HTTPS

首先配置支持 HTTPS 必须让 Nginx 开启 `http_ssl_module` 模块，[点击查看 nginx 编译安装参数](../guide/nginx-configure-descriptions.md) ，可以使用`nginx -V`查看是否开启`TLS SNI support enabled`。

购买/生成 SSL 证书，可以使用免费的证书，在这里申请就很可以 [腾讯云 SSL 证书](https://console.cloud.tencent.com/ssl)

```conf
# 配置 HTTPS

# 配置个http的站点，用来做重定向，当然如果你不需要把 HTTP->HTTPS 可以把这个配置删了
server {
    listen 80;

    # 配置域名
    server_name domain.com www.domain.com;

    # 配置让这些 HTTP 的访问全部 301 重定向到 HTTPS 的
    return 301 https://domain.com$request_uri;
}

# 配置 HTTPS
server {
    listen 443 ssl;
    server_name www.domain.com domain.com;

    # https
    ssl_certificate https/domain.com.crt;
    ssl_certificate_key https/domain.com.key;

    # other setting
}
```

> 注意，这里证书的格式是 `.crt` 的。

## 配置后的访问规则

| 输入链接                      | 最终访问链接               |
| ----------------------------- | -------------------------- |
| http://www.domain.com         | https://domain.com         |
| http://www.domain.com/404/500 | https://domain.com/404/500 |
| http://domain.com             | https://domain.com         |
| https://www.domain.com        | https://domain.com         |
| https://domain.com/500        | https://domain.com/500     |

对于网站需要 https 和 http 共同来访问的可以

```conf

server {
    listen 80;
    listen 443 ssl;
    server_name www.domain.com domain.com;

    # https setting...

    # other setting...
}
```

## 参考链接

-   [Redirect HTTP to HTTPS in Nginx](https://serversforhackers.com/c/redirect-http-to-https-nginx)
-   [How to force or redirect to SSL in nginx?](https://serverfault.com/questions/250476/how-to-force-or-redirect-to-ssl-in-nginx)
-   [(自动泛域名证书申请) acme.sh](https://github.com/Neilpang/acme.sh)
