## Nginx 简介

Nginx（发音同 engine x）是一个异步框架的 Web 服务器，也可以用作反向代理，负载平衡器 和 HTTP 缓存。该软件由 [Igor Sysoev](https://zh.wikipedia.org/wiki/%E4%BC%8A%E6%88%88%E7%88%BE%C2%B7%E8%B3%BD%E7%B4%A2%E8%80%B6%E5%A4%AB) 创建，并于 2004 年首次公开发布。同名公司成立于 2011 年，以提供支持。Nginx 是一款免费的开源软件，根据类 BSD 许可证的条款发布。一大部分 Web 服务器使用 Nginx ，通常作为负载均衡器。

### Nginx 的特点

-   更快：
    -   单次请求会得到更快的响应。
    -   在高并发环境下，Nginx 比其他 WEB 服务器有更快的响应。
-   高扩展性：
    -   Nginx 是基于模块化设计，由多个耦合度极低的模块组成，因此具有很高的扩展性。许多高流量的网站都倾向于开发符合自己业务特性的定制模块。
-   高可靠性：
    -   Nginx 的可靠性来自于其核心框架代码的优秀设计，模块设计的简单性。另外，官方提供的常用模块都非常稳定，每个 worker 进程相对独立，master 进程在一个 worker 进程出错时可以快速拉起新的 worker 子进程提供服务。
-   低内存消耗：
    -   一般情况下，10000 个非活跃的 `HTTP Keep-Alive` 连接在 Nginx 中仅消耗 `2.5MB` 的内存，这是 Nginx 支持高并发连接的基础。
    -   单机支持 10 万以上的并发连接：**理论上，Nginx 支持的并发连接上限取决于内存，10 万远未封顶。**
-   热部署:
    -   master 进程与 worker 进程的分离设计，使得 Nginx 能够提供热部署功能，即在 7x24 小时不间断服务的前提下，升级 Nginx 的可执行文件。当然，它也支持不停止服务就更新配置项，更换日志文件等功能。
-   最自由的 BSD 许可协议:
    -   这是 Nginx 可以快速发展的强大动力。BSD 许可协议不只是允许用户免费使用 Nginx ，它还允许用户在自己的项目中直接使用或修改 Nginx 源码，然后发布。

### 你可能需要掌握的

-   Linux 服务器和一些常用的操作命令
-   域名，当然如果是本地玩玩也可以是 Hosts
-   基本的正则表达式

## 常用工具

-   [Nginx location match tester](https://nginx.viraptor.info/)
-   [Nginx Config](https://www.digitalocean.com/community/tools/nginx)
-   [Nginx 官网](http://nginx.org/)

## 常见变量

这里列出常用的 Nginx 全局变量，也可以点击 [实时查看](https://echo.xuexb.com/api/dump/path?a=1&%E4%B8%AD%E6%96%87=%E5%A5%BD%E7%9A%84#123) 浏览。

### 服务器相关

| 变量名                | 备注                                                                               | 示例                                               |
| --------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------- |
| `nginx_version`       | 当前运行的 Nginx 版本号                                                            | 1.11.2                                             |
| `server_port`         | 服务器端口                                                                         | 8080                                               |
| `server_addr`         | 服务器端地址                                                                       | 127.0.0.1                                          |
| `server_name`         | 服务器名称                                                                         | 127.0.0.1                                          |
| `server_protocol`     | 服务器的 HTTP 版本                                                                 | HTTP/1.0                                           |
| `status`              | HTTP 响应代码                                                                      | 200                                                |
| `time_iso8601`        | 服务器时间的 ISO 8610 格式                                                         | 2018-09-02T15:14:27+08:00                          |
| `time_local`          | 服务器时间（LOG Format 格式）                                                      | 02/Sep/2018:15:14:27 +0800                         |
| `document_root`       | 当前请求的文档根目录或别名                                                         | `/home/xiaowu/github/echo.xuexb.com`               |
| `request_filename`    | 当前连接请求的文件路径，由 `root` 或 `alias` 指令与 URI 请求生成                   | `/home/xiaowu/github/echo.xuexb.com/api/dump/path` |
| `request_completion`  | 如果请求成功，值为”OK”，如果请求未完成或者请求不是一个范围请求的最后一部分，则为空 |                                                    |
| `pid`                 | 工作进程的 PID                                                                     | 1234                                               |
| `msec`                | 当前的 Unix 时间戳                                                                 | 1535872750.954                                     |
| `limit_rate`          | 用于设置响应的速度限制                                                             | 0                                                  |
| `pipe`                | 如果请求来自管道通信，值为“p”，否则为“.”                                           | .                                                  |
| `connection_requests` | TCP 连接当前的请求数量                                                             | 1                                                  |
| `connection`          | TCP 连接的序列号                                                                   | 363861                                             |
| `realpath_root`       | 当前请求的文档根目录或别名的真实路径，会将所有符号连接转换为真实路径               | /home/xiaowu/github/echo.xuexb.com                 |
| `hostname`            | 主机名                                                                             | bj01                                               |

### 链接相关

| 变量名           | 备注                                                                                                                            | 示例                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `scheme`         | 请求使用的 WEB 协议                                                                                                             | http                                                       |
| `uri`            | 请求中的当前 URI(不带请求参数)，可以不同于浏览器传递的 `$request_uri` 的值，它可以通过内部重定向，或者使用 `index` 指令进行修改 | `/api/dump/path`                                           |
| `document_uri`   | 同 `$uri`                                                                                                                       | `/api/dump/path`                                           |
| `request_uri`    | 这个变量等于包含一些客户端请求参数的原始 URI ，它无法修改                                                                       | `/api/dump/path?a=1&%E4%B8%AD%E6%96%87=%E5%A5%BD%E7%9A%84` |
| `request_method` | HTTP 请求方法                                                                                                                   | GET                                                        |
| `request_time`   | 处理客户端请求使用的时间，从读取客户端的第一个字节开始计时                                                                      | 0.000                                                      |
| `request_length` | 请求的长度（包括请求地址、请求头和请求主体）                                                                                    | 678                                                        |
| `args`           | 请求参数                                                                                                                        | `a=1&%E4%B8%AD%E6%96%87=%E5%A5%BD%E7%9A%84`                |
| `query_string`   | 同 `$args`                                                                                                                      |                                                            |
| `is_args`        | 请求中是否有参数，有则为 `?` 否则为空                                                                                           | `?`                                                        |
| `arg_参数名`     | 请求中具体的参数                                                                                                                | `$arg_a` => `1`                                            |
| `https`          | 如果开启了 SSL 安全模式，则为 `on` 否则为空                                                                                     | `on`                                                       |

### 客户端相关

| 变量名                           | 备注                                                                                                                                      | 示例                                                                                                                        |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `http_accept`                    | 浏览器支持的 MIME 类型                                                                                                                    | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8`                                     |
| `http_accept_encoding`           | 浏览器支持的压缩编码                                                                                                                      | `gzip, deflate, br`                                                                                                         |
| `http_accept_language`           | 浏览器支持的语言                                                                                                                          | `zh-CN,zh;q=0.9,en;q=0.8`                                                                                                   |
| `http_cache_control`             | 浏览器缓存                                                                                                                                | `max-age=0`                                                                                                                 |
| `http_connection`                | 客户端与服务连接类型                                                                                                                      |                                                                                                                             |
| `http_cookie`                    | 浏览器请求 cookie                                                                                                                         | `a=1; b=2`                                                                                                                  |
| `http_host`                      | 浏览器请求 host                                                                                                                           | echo.xuexb.com                                                                                                              |
| `http_referer`                   | 浏览器来源                                                                                                                                | [https://echo.xuexb.com/](https://echo.xuexb.com/)                                                                          |
| `http_upgrade_insecure_requests` | 是一个请求首部，用来向服务器端发送信号，表示客户端优先选择加密及带有身份验证的响应，并且它可以成功处理 upgrade-insecure-requests CSP 指令 | 1                                                                                                                           |
| `http_user_agent`                | 用户设备标识                                                                                                                              | `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36` |
| `http_x_requested_with`          | 异步请求标识                                                                                                                              | true                                                                                                                        |
| `http_x_forwarded_for`           | 反向代理原 IP                                                                                                                             | 198.13.61.105                                                                                                               |
