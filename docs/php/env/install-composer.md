# Composer 安装和配置

## 安装

**方法 1 : 官方方式**

> 参考官方文档 : https://getcomposer.org/download/

**方法 2 : 下载并给予权限**

```
$ wget https://mirrors.aliyun.com/composer/composer.phar
$ chmod +x composer.phar
$ mv composer.phar /usr/local/bin/composer
```

## 全局配置文件

修改 composer 的全局配置文件

**Aliyun**

阿里云开源镜像提供的 packagist 镜像服务

> https://developer.aliyun.com/composer

```
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer
```

安畅网络镜像

```
composer config -g repos.packagist composer https://php.cnpkg.org
```

交通大学镜像

```
composer config -g repos.packagist composer https://packagist.mirrors.sjtug.sjtu.edu.cn
```

华为云

```
composer config -g repo.packagist composer https://mirrors.huaweicloud.com/repository/php/
```

腾讯云

```
composer config -g repos.packagist composer https://mirrors.cloud.tencent.com/composer/
```

phpcomposer 镜像

```
composer config -g repo.packagist composer https://packagist.phpcomposer.com
```

关闭全局配置

```
composer config -g --unset repos.packagist
```

更换镜像

```
composer config -g repo.packagist composer 镜像地址
composer clearcache
composer update || install
```

## 参考

-   [Composer Download](https://getcomposer.org/download/)

## 修改记录

2021-10-15 : 加入安装方法, 移除已关闭镜像
