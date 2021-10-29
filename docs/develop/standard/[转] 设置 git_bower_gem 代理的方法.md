原文地址: [设置 git/npm/bower/gem 镜像或代理的方法](http://www.html-js.com/article/Methods-Laispace-gitnpmbowergem-mirror-set-or-agent)


有时候我们在某些环境下(比如墙内或公司内网)可能不能正常使用 git/bower/gem 等各种工具, 解决办法有:


- 切换镜像
- 使用代理
- 使用西游



不同工具设置的语法略有偏颇, 总结如下.
## 使用代理


镜像不能用, 那就使用代理吧.


假定公司提供的代理为 [http://proxy.mysite.com:8080](http://proxy.mysite.com:8080)


### 给命令行统一设置代理


- windows



```
$ set http_proxy=http://proxy.mysite.com:8080

// 如果有要求用户名密码则输入: 
$ set http_proxy_user= 
$ set http_proxy_pass=
```


若不想每次都手动设置, 则可以设置到系统的环境变量中


右击`计算机–>属性–>高级–>环境变量–>系统变量`，设置系统变量


- mac



```
$ sudo networksetup -setwebproxy “Ethernet” http://proxy.mysite.com 8000
```


### git


设置:


```
$ git config --global http.proxy http://proxy.mysite.com:8080
```


取消:


```
$ git config --global --unset http.proxy
```


### npm


设置:


```
$ npm config set proxy=http://proxy.mysite.com:8080
```


取消:


```
$ npm config delete proxy
```


### bower


设置: 修改 .bowerrc 文件(如无则新增)


```
{
    "proxy": "http://proxy.mysite.com:8080",
    "https-proxy": "http://proxy.mysite.com:8080"
}
```


取消:删除 .bowerrc 里对应的配置即可


### gem


比如我们要安装 sass


设置:


安装时加上 –http-proxy 参数
```
$ gem install –http-proxy http://proxy.mysite.com:8080 sass
```
取消:


安装时不加上 –http-proxy 参数


```
$ gem install sass
```
