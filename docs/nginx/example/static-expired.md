# Nginx 的静态页面刷新\_缓存的解决方案

## mockplus 的技术方案

```
# Request
Request URL: https://share.mockplus.cn/go/G5XU3GW4MDTC8U4G/resources/scripts/jquery-1.7.1.min.js
Request Method: GET
Status Code: 200 OK
Remote Address: 121.40.151.193:443
Referrer Policy: no-referrer-when-downgrade

# Response
Connection: keep-alive
Content-Encoding: gzip
Content-Type: text/javascript; charset=utf-8
Date: Wed, 29 Aug 2018 14:54:56 GMT
Server: nginx/1.12.2
Transfer-Encoding: chunked
```

分析: 没开启 Etag, 没有告知浏览器进行缓存, 且每次请求(开启缓存情况下)都是 200 正确响应. 重新从服务端获取数据. 对服务器压力大

## netlify 的技术方案

```
# request
Request URL: https://eloquent-almeida-b21318.netlify.com/resources/scripts/jquery-1.7.1.min.js
Request Method: GET
Status Code: 304
Remote Address: 35.189.132.21:443
Referrer Policy: no-referrer-when-downgrade
# response
cache-control: public, max-age=0, must-revalidate
date: Wed, 29 Aug 2018 14:49:01 GMT
etag: "538863031fcda87f03398bbc78c06c81-ssl-df"
server: Netlify
status: 304
vary: Accept-Encoding
x-nf-request-id: 6a89484b-8029-4059-aea9-08991fe66ab6-11566228
```

分析: 启用 Etag, 告知浏览器没有内容更新时候获取本地存储,只是从服务端获取状态
缓存处理方式:
可缓存性 : [public] 表明响应可以被任何对象（包括：发送请求的客户端，代理服务器，等等）缓存。
到期 : [max-age=] 设置缓存存储的最大周期，超过这个时间缓存被认为过期(单位秒)。与 Expires 相反，时间是相对于请求的时间。
重新验证和重新加载 : [must-revalidate] 缓存必须在使用之前验证旧资源的状态，并且不可使用过期资源。

## 解决方案

我们采用 netlify 的解决方案

1. 开启 ETag
1. 缓存机制采用可缓存, 服务端验证方式

```
# request
Request URL: http://.../ne14ke/resources/scripts/jquery-1.7.1.min.js
Request Method: GET
Status Code: 304 Not Modified
Remote Address: 139.129.212.119:80
Referrer Policy: no-referrer-when-downgrade
# response
Cache-Control: public, max-age=0, must-revalidate
Connection: keep-alive
ETag: "5b86b33d-16ed9"
Last-Modified: Wed, 29 Aug 2018 14:52:45 GMT
Server: nginx/1.12.2
```

当文件改变之后

```
# request
Request URL: http://.../.../jquery-1.7.1.min.js
Request Method: GET
Status Code: 200 OK
Remote Address: 139.129.212.119:80
Referrer Policy: no-referrer-when-downgrade
Accept-Ranges: bytes
# response
Cache-Control: public, max-age=0, must-revalidate
Connection: keep-alive
Content-Length: 93924
Content-Type: application/javascript
ETag: "5b86b5e2-16ee4"
Last-Modified: Wed, 29 Aug 2018 15:04:02 GMT
Server: nginx/1.12.2
```

我们可以看到又重新进行了请求(200), 并且采用了 ETag (重新生成), 目的达到.

### 技术点配置

_nginx.conf_

```conf
# 开启 etag
etag on;
```

_server{}_

```conf
# 服务器设置/缓存控制
location ~ .*\.(js|css|png|svg)?$ {
    # 取消缓存
    # 告知浏览器处理缓存的方式
    add_header Cache-Control "public, max-age=0, must-revalidate";
}
```
