# 修改 ssh 默认登录的端口

查看系统版本

```
# cat /etc/system-release
CentOS Linux release 8.1.1911 (Core)
```

查看是否安装过SSH软件(centos 命令)：

``` 
# rpm -qa | grep ssh
openssh-7.4p1-16.el7.x86_64
openssh-server-7.4p1-16.el7.x86_64
libssh2-1.4.3-10.el7_2.1.x86_64
openssh-clients-7.4p1-16.el7.x86_64
```

用编辑器打开SSH配置文件，修改端口：

```
# vi /etc/ssh/sshd_config
```

找到行 `#Port 22` （默认端口为22），修改端口为其他端口, 不要出现端口冲突

``` 
Port 5022
```

重启SSH服务：

``` 
# systemctl restart sshd
```

修改防火墙，允许访问 5022 的端口，并且重启防火墙服务：

``` 
# 配置 5022
$ firewall-cmd --permanent --zone=public --add-port=5022/tcp
# 重启
$ firewall-cmd --reload
```

如果是 Aliyun 主机, 则需要在对应的安全组打开端口访问权限,
否则一样无法访问主机
