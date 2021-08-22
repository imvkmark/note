# Centos 服务器常见问题

## 1. 如何清空dns 缓存

```
$ yum -y install nscd
$ systemctl enable nscd
$ systemctl start nscd
$ nscd -i hosts
```