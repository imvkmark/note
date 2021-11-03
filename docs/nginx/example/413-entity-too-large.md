# [转] Nginx 出现 413 Request Entity Too Large 错误解决方法

原文地址 : [Nginx 出现 413 Request Entity Too Large 错误解决方法](http://www.php100.com/html/program/nginx/2013/0905/5516.html)

Nginx 出现的 413 Request Entity Too Large 错误,这个错误一般在上传文件的时候出现
解决方法就是
打开 nginx 主配置文件 `nginx.conf`，一般在 `/usr/local/nginx/conf/nginx.conf` 这个位置，找到 `http{}`, 或者 `server{}` 段, 或者 `location / {}` 段，修改或者添加:

```
client_max_body_size 20m;
```

然后重启 nginx，

```
sudo /etc/init.d/nginxd reload
```

即可。要是以 php 运行的话，这个大小 client_max_body_size 要和 php.ini 中的如下值的最大值差不多或者稍大，这样就不会因为提交数据大小不一致出现错误。

```
post_max_size = 2M
upload_max_filesize = 2M
```

重启 NGINX

```
kill -HUP `cat /usr/local/nginx/nginx.pid`
```

恢复正常
