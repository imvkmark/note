# [原] filebeat nginx 模块的自定义字段

## 说明

filebeat 提供了多种 Module 预制模块，简化了各种日志的格式化, 但是默认的字段并不能满足实际需求, 例如我们需要记录额外的 Nginx 字段
例如 请求时间、后端响应时间、主机头等信息
那么在 filebeat 的 nginx module 中需要同步定义

Nginx 的模块位置在 `/usr/share/filebeat/module/nginx`, 下边是目录结构.

**目录结构**

```
├── access
│   ├── config
│   │   └── nginx-access.yml
│   ├── ingest
│   │   └── default.json       # 默认的解析字段
│   ├── machine_learning
│   │   └── ....json
│   └── manifest.yml
└── module.yml
```

**默认的解析模块**

这里我们需要修改的是 patterns 中的数据, 注意这里是经过 json 转义的.

```json
{
	"description": "Pipeline for parsing Nginx access logs. Requires the geoip and user_agent plugins.",
	"processors": [
		{
			"grok": {
				"field": "message",
				"patterns": [
					"\"?%{IP_LIST:nginx.access.remote_ip_list} - %{DATA:user.name} \\[%{HTTPDATE:nginx.access.time}\\] \"%{GREEDYDATA:nginx.access.info}\" %{NUMBER:http.response.status_code:long} %{NUMBER:http.response.body.bytes:long} \"%{DATA:http.request.referrer}\" \"%{DATA:user_agent.original}\""
				],
				"pattern_definitions": {
					"IP_LIST": "%{IP}(\"?,?\\s*%{IP})*"
				},
				"ignore_missing": true
			}
		}
	]
}
```

## 更改 nginx 日志的格式

**之前**

```nginx
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for" ';
```

**之后**

```nginx
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for" '
                      '"$host" $request_time $upstream_response_time';
```

这里我们增加了三个字段

```
192.168.1.112 - - [25/Apr/2019:18:22:01 +0800] "GET /help/show/20 HTTP/1.1" 200 7474 "http://t.dailian.iliexiang.com/help?cat_id=2" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36" "-" "t.dailian.iliexiang.com" 0.063 0.021
```

## 更新 Patterns

> 支持的 Patterns [grok-patterns](https://github.com/elastic/logstash/blob/v1.4.2/patterns/grok-patterns)

```
vim /usr/share/filebeat/module/nginx/access/ingest/default.json
```

**之前**

```
"\"?%{IP_LIST:nginx.access.remote_ip_list} - %{DATA:user.name} \\[%{HTTPDATE:nginx.access.time}\\] \"%{GREEDYDATA:nginx.access.info}\" %{NUMBER:http.response.status_code:long} %{NUMBER:http.response.body.bytes:long} \"%{DATA:http.request.referrer}\" \"%{DATA:user_agent.original}\""
```

**之后**

```
"?%{IP_LIST:nginx.access.remote_ip_list} - %{DATA:user.name} \[%{HTTPDATE:nginx.access.time}\] \"%{GREEDYDATA:nginx.access.info}\" %{NUMBER:http.response.status_code:long} %{NUMBER:http.response.body.bytes:long} "%{DATA:http.request.referrer}" \"%{DATA:user_agent.original}\" \"%{DATA:nginx.access.x_forwarded_for}\" \"%{DATA:nginx.access.host}\" %{NUMBER:nginx.access.request_time:float} %{NUMBER:nginx.access.upstream_response_time:float}
```

调试工具: 使用 kibana 的 Debuger

```
http://192.168.1.21:5601/app/kibana#/dev_tools/grokdebugger?_g=()
```

这里需要填写自定义的 Patterns , 否则无法识别
**Custom Patterns**

```
IP_LIST %{IP}(\"?,?\\s*%{IP})*
```

### 更新 Fields

编辑字段

```
vim /etc/filebeat/fields.yml
```

在文件 `/etc/filebeat/fields.yml`, 找到 `nginx` 字段, 添加以上的三个字段

```
            - name: x_forwarded_for
              type: group
              description: >
                Forwarded IP
            - name: host
              type: group
              description: >
                Server hostname.
            - name: request_time
              type: group
              description: >
                Url Request Time
            - name: upstream_response_time
              type: group
              description: >
                Upstream Response Time.
```

### 让新修改的文件生效

先检查配置文件是否正确

```shell
# filebeat test config
```

```shell
# systemctl restart filebeat
```

```graphql
# 获取所有的 pipeline
GET _ingest/pipeline

DELETE _ingest/pipeline/filebeat-7.0.0-nginx-access-default
```

### 模拟请求 pattern

```
POST _ingest/pipeline/filebeat-6.6.1-nginx-access-default/_simulate
{
  "docs":[
  {
    "_source": {
      "message": "10.10.10.10 - - [17/Oct/2017:03:48:00 +0200] \"GET /my_page/40 HTTP/1.1\" 200 75793 \"-\" \"Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)\" 0.277"
    }
  }
  ]
}
```
