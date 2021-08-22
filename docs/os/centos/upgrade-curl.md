# [转+] CentOS 7 更新 curl 为最新版本



## 介绍

由于 CentOS 7 内置的 curl 和 libcurl 源为较旧的 7.29.0，不支持一些新特性且有安全性问题，所以需要更新一下, 这里使用 city-fan 的更新源来更新。

## 更新 ca-bundle

1. 首先备份一下：

```
$ cp /etc/pki/tls/certs/ca-bundle.crt /etc/pki/tls/certs/ca-bundle.crt.bak
```

2. 更新并替换：

```
$ curl http://curl.haxx.se/ca/cacert.pem -o /etc/pki/tls/certs/ca-bundle.crt
```



## 新增 repo 源

新增 repo：

```
$ rpm -Uvh http://www.city-fan.org/ftp/contrib/yum-repo/city-fan.org-release-2-1.rhel7.noarch.rpm

Retrieving http://www.city-fan.org/ftp/contrib/yum-repo/city-fan.org-release-2-1.rhel7.noarch.rpm
warning: /var/tmp/rpm-tmp.ttjkC5: Header V4 DSA/SHA1 Signature, key ID b56a8bac: NOKEY
Preparing...                          ################################# [100%]
Updating / installing...
   1:city-fan.org-release-2-1.rhel7   ################################# [100%]
```

启用 city-fan.org repo：

```
$ cat /etc/yum.repos.d/city-fan.org.repo
[city-fan.org]
name=city-fan.org repository for Red Hat Enterprise Linux (and clones) $releasever ($basearch)
#baseurl=http://mirror.city-fan.org/ftp/contrib/yum-repo/rhel$releasever/$basearch
mirrorlist=http://mirror.city-fan.org/ftp/contrib/yum-repo/mirrorlist-rhel$releasever
enabled=1
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-city-fan.org

[city-fan.org-debuginfo]
name=city-fan.org debuginfo repository for Red Hat Enterprise Linux (and clones) $releasever ($basearch)
#baseurl=http://www.city-fan.org/ftp/contrib-debug/rhel$releasever/$basearch
mirrorlist=http://www.city-fan.org/ftp/contrib-debug/mirrorlist-rhel$releasever
enabled=0
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-city-fan.org

[city-fan.org-source]
name=city-fan.org source repository for Red Hat Enterprise Linux (and clones) $releasever
#baseurl=http://mirror.city-fan.org/ftp/contrib/yum-repo/rhel$releasever/source
mirrorlist=http://mirror.city-fan.org/ftp/contrib/yum-repo/source-mirrorlist-rhel$releasever
enabled=0
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-city-fan.org
```


## 更新 curl

直接使用如下命令进行更新：

``` 
$ yum update curl --enablerepo=city-fan.org  -y
```

更新完成后，建议重启一下。就可以正常使用了。

## 更新相关软件

如果系统中 存在 php-fpm 程序, 则需要对安装的 php-fpm 进行重启

```
$ systemctl restart php-fpm
```

## 参考地址

- [How to yum update curl 7.29 to 7.61 - CentOS 7.X](https://qiita.com/tkprof/items/5460b8d603cbbc542c8c)
- [CentOS 7 更新 curl 为最新版本](https://www.htcp.net/337.html)