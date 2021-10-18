# 配置 HTTPS

首先配置支持 HTTPS 必须让 Nginx 开启 `http_ssl_module` 模块，[点击查看 nginx 编译安装参数](../guide/nginx-configure-descriptions.md) ，可以使用`nginx -V`查看是否开启`TLS SNI support enabled`。

购买/生成 SSL 证书，可以使用免费的证书，在这里申请就很可以 [腾讯云 SSL 证书](https://console.cloud.tencent.com/ssl)

```conf
# 配置 HTTPS

# 配置个http的站点，用来做重定向，当然如果你不需要把 HTTP->HTTPS 可以把这个配置删了
server {
    listen       80;

    # 配置域名
    server_name foo.com;

    # 添加 STS, 并让所有子域支持, 开启需慎重
    add_header strict-transport-security 'max-age=31536000; includeSubDomains; preload';

    # 配置让这些 HTTP 的访问全部 301 重定向到 HTTPS 的
    return 301 https://foo.com$request_uri;
}

# 配置 HTTPS
server {
    # 配置域名
    server_name www.foo.com foo.com;

    # https默认端口
    listen 443 ssl;

    # 添加STS, 并让所有子域支持, 开启需慎重
    add_header strict-transport-security 'max-age=31536000; includeSubDomains; preload';

    # https配置
    ssl_certificate https/foo.com.crt;
    ssl_certificate_key https/foo.com.key;

    # 其他按正常配置处理即可...
}
```

> 注意，这里证书的格式是 `.crt` 的。

## 配置后的访问规则

| 输入链接                    | 最终访问链接                 |
| --------------------------- | ---------------------------- |
| http://www.xxoo.com         | https://www.xxoo.com         |
| http://www.xxoo.com/404/500 | https://www.xxoo.com/404/500 |
| http://xxoo.com             | https://www.xxoo.com         |
| https://www.xxoo.com        | -（原链接不变）              |
| https://xxoo.com/500        | https://www.xxoo.com/500     |

## 强烈推荐

使用 <https://github.com/Neilpang/acme.sh> 支持泛域名证书申请了，好赞。
详细的使用文档参考 [acme.sh/wiki/说明](https://github.com/acmesh-official/acme.sh/wiki/%E8%AF%B4%E6%98%8E)

## 参考链接

-   [Redirect HTTP to HTTPS in Nginx](https://serversforhackers.com/c/redirect-http-to-https-nginx)
-   [How to force or redirect to SSL in nginx?](https://serverfault.com/questions/250476/how-to-force-or-redirect-to-ssl-in-nginx)
