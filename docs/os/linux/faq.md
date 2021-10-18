# 常见问题

## 1. Centos 如何清空 dns 缓存

```
[root@centos ~]# yum -y install nscd
[root@centos ~]# systemctl enable nscd
[root@centos ~]# systemctl start nscd
[root@centos ~]# nscd -i hosts
```

## 2. 用户权限错误 / 无法执行 crontab -e

出现错误场景, 无法执行 su

```
$ su root
密码：
su: 鉴定故障

$ crontab -e
crontab: installing new crontab
fchown: 不允许的操作
crontab: edits left in /tmp/crontab.jt1XUI
```

解决办法: 变更两个应用的权限, 让应用可以执行计划数据

```
[root@linux ~]# chmod 4755 /usr/bin/crontab
[root@linux ~]# chmod 4755 /usr/bin/su
```

参考地址 : [crontab -e on gentoo failing: "chown: Operation not permitted"](https://serverfault.com/questions/193732/crontab-e-on-gentoo-failing-chown-operation-not-permitted)
